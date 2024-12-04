import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";

import { ReplayProps } from "@/shared/types";
import { RootState } from "@/services/states/store";
import { postNewChat } from "@/services/api/new-chat";
import ScrollContent from "./ScrollContent";
import NewQuestionAndReplai from "./NewQuestionAndReplai";
import NewChatInput from "./NewChatInput";
import { postContinueChat } from "@/services/api/continue-chat";

type Props = {
  messages: ReplayProps[];
  replayLoading: boolean;
  replayError: boolean;
  handleLoading: (value: boolean) => void;
  handleError: (value: boolean) => void;
  handleMessages: (value: ReplayProps[]) => void;
};

const NewChats = ({
  messages,
  replayLoading,
  replayError,
  handleLoading,
  handleError,
  handleMessages,
}: Props) => {
  const endRef = useRef<HTMLDivElement>(null);
  const currentWorkspaceId = useSelector(
    (state: RootState) => state.workspaces.currentWorkspace.id,
  );

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleContinueChat = async (value: string) => {
    handleLoading(true);
    const chatId = messages[0].chat_id;
    const newMessages = [
      ...messages,
      {
        question: value,
        chat_id: null,
        message_id: null,
        reply: "",
        suggestions: [],
      },
    ];

    handleMessages(newMessages);

    const response = await postContinueChat(chatId!, value);

    if (response) {
      const lastMessage = newMessages[newMessages.length - 1];
      const updatedMessage = {
        question: lastMessage.question,
        chat_id: chatId,
        ...response,
      } as ReplayProps;
      newMessages[newMessages.length - 1] = updatedMessage;

      handleMessages(newMessages);

      if (response.reply === "") handleError(true);
    } else {
      handleError(true);
    }

    handleLoading(false);
  };

  const handleTryAgain = async () => {
    handleLoading(true);
    handleError(false);

    let response: ReplayProps | undefined = {} as ReplayProps;
    const lastMessage = messages[messages.length - 1];
    const chatId = messages[0].chat_id;

    if (lastMessage.chat_id === null && messages.length === 1) {
      response = await postNewChat(currentWorkspaceId, lastMessage.question!);
    } else {
      response = await postContinueChat(chatId!, lastMessage.question!);
    }

    if (response) {
      console.log(response);
      const lastMessage = messages[messages.length - 1];
      const updatedMessage = {
        question: lastMessage.question,
        chat_id: chatId,
        ...response,
      } as ReplayProps;
      messages[messages.length - 1] = updatedMessage;

      handleMessages(messages);

      if (response.reply === "") handleError(true);
    } else {
      handleError(true);
    }

    handleLoading(false);
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start pt-[80px]">
      <ScrollContent color="transparent">
        <div className="flex max-h-[calc(100vh-270px)] w-full flex-col items-center gap-4 px-2">
          {messages.map((m, index) => (
            <NewQuestionAndReplai
              key={`${m.question}-${index}`}
              message={m}
              replayLoading={replayLoading}
              replayError={replayError}
              isLastMessage={index === messages.length - 1}
            />
          ))}
          <div ref={endRef} className="w-full" />
        </div>
      </ScrollContent>
      <div className="w-full px-2">
        <div className="absolute bottom-0 flex h-[190px] w-full items-center justify-center bg-mainColor">
          {replayError ? (
            <Button
              onClick={handleTryAgain}
              className="rounded-[5px] bg-primaryColor px-10 py-5 text-[18px] text-white hover:bg-[#2546ff]"
            >
              تلاش مجدد
            </Button>
          ) : (
            <NewChatInput
              handleContinueChat={handleContinueChat}
              placeholder="گفتگو را ادامه دهید..."
              replayLoading={replayLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewChats;

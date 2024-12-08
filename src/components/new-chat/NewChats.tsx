import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

import ScrollContent from "../ScrollContent";
import NewQuestionAndReply from "../NewQuestionAndReplai";
import NewChatInput from "./NewChatInput";
import { ReplayProps } from "@/shared/types";
import { RootState } from "@/services/states/store";
import { postNewChat } from "@/services/api/new-chat";
import { postContinueChat } from "@/services/api/continue-chat";
import { updateWorkspaceChats } from "@/services/states/workspace-chats";
import {
  setMessageError,
  setMessageLoading,
  setMessages,
} from "@/services/states/messages";

type Props = {
  messages: ReplayProps[];
};

const NewChats = ({ messages }: Props) => {
  const dispatch = useDispatch();
  const { messageError, messageLoading } = useSelector(
    (state: RootState) => state.messages,
  );
  const chatId = messages[0].chat_id;
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
    dispatch(setMessageLoading(true));

    const newMessages = [
      ...messages,
      {
        question: value,
        chat_id: null,
        message_id: null,
        reply: " ",
        suggestions: [],
      },
    ];
    dispatch(setMessages(newMessages));

    const response = await postContinueChat(chatId!, value);

    if (response) {
      const lastMessage = newMessages[newMessages.length - 1];
      const updatedMessage = {
        question: lastMessage.question,
        chat_id: chatId,
        ...response,
      } as ReplayProps;
      dispatch(setMessages([...newMessages.slice(0, -1), updatedMessage]));

      if (response.reply === "") dispatch(setMessageError(true));
    } else {
      dispatch(setMessageError(true));
    }

    dispatch(setMessageLoading(false));
  };

  const handleTryAgain = async () => {
    dispatch(setMessageLoading(true));
    dispatch(setMessageError(false));

    let response: ReplayProps | undefined = {} as ReplayProps;
    const lastMessage = messages[messages.length - 1];

    if (chatId === null) {
      response = await postNewChat(currentWorkspaceId, lastMessage.question!);
    } else {
      response = await postContinueChat(chatId!, lastMessage.question!);
    }

    if (response) {
      if (chatId === null) {
        dispatch(
          updateWorkspaceChats({
            date: new Date().toISOString().split("T")[0],
            chats: [
              {
                id: null,
                title: lastMessage.question!,
              },
            ],
          }),
        );
      }

      const newMessages = [...messages];
      const updatedMessage = {
        question: lastMessage.question,
        ...response,
      } as ReplayProps;
      dispatch(setMessages([...newMessages.slice(0, -1), updatedMessage]));

      if (response.reply === "") dispatch(setMessageError(true));
    } else {
      dispatch(setMessageError(true));
    }

    dispatch(setMessageLoading(false));
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start px-2 pt-[80px]">
      <ScrollContent color="transparent">
        <div className="flex max-h-[calc(100vh-270px)] w-full flex-col items-center gap-4">
          {messages.map((m, index) => (
            <NewQuestionAndReply
              key={`${m.question}-${index}`}
              message={m}
              messageLoading={messageLoading}
              messageError={messageError}
              isLastMessage={index === messages.length - 1}
            />
          ))}
          <div ref={endRef} className="w-full" />
        </div>
      </ScrollContent>
      <div className="absolute bottom-0 flex h-[190px] w-full items-center justify-center bg-mainColor">
        {messageError ? (
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
            replayLoading={messageLoading}
          />
        )}
      </div>
    </div>
  );
};

export default NewChats;

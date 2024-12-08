import { useDispatch } from "react-redux";
import { Button } from "../ui/button";

import NewChatInput from "../new-chat/NewChatInput";
import { postContinueChat } from "@/services/api/continue-chat";
import {
  setMessageError,
  setMessageLoading,
  setMessages,
} from "@/services/states/messages";
import { ChatMessageProps, ReplayProps } from "@/shared/types";

type Props = {
  messageError: boolean;
  messageLoading: boolean;
  messages: ReplayProps[];
  chatMessages: ChatMessageProps[];
  chatId: string | undefined;
  handleChatMessages: (value: ChatMessageProps[]) => void;
};

const ChatBox = ({
  messageError,
  messageLoading,
  messages,
  chatMessages,
  chatId,
  handleChatMessages,
}: Props) => {
  const dispatch = useDispatch();

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

    const response = await postContinueChat(+chatId!, value);

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
    const lastQuestion = messages[messages.length - 1]?.question;
    const lastQuestion2 = chatMessages[chatMessages.length - 1]?.content;

    const response = await postContinueChat(
      +chatId!,
      lastQuestion ?? lastQuestion2,
    );

    if (response) {
      if (lastQuestion) {
        const newMessages = [...messages];
        const updatedMessage = {
          question: lastQuestion,
          ...response,
        } as ReplayProps;
        dispatch(setMessages([...newMessages.slice(0, -1), updatedMessage]));
      } else {
        const newChatMessages = [...chatMessages];
        const lastChatMessage = newChatMessages[newChatMessages.length - 1];
        const updatedChatMessage = {
          message_answer: response.reply,
          ...lastChatMessage,
        } as ChatMessageProps;
        handleChatMessages([
          ...newChatMessages.slice(0, -1),
          updatedChatMessage,
        ]);
      }

      if (response.reply === "") dispatch(setMessageError(true));
    } else {
      dispatch(setMessageError(true));
    }

    dispatch(setMessageLoading(false));
  };

  return (
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
  );
};

export default ChatBox;

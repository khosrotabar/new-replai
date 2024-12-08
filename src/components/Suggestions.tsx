import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { RootState } from "@/services/states/store";
import { postContinueChat } from "@/services/api/continue-chat";
import { ReplayProps } from "@/shared/types";
import {
  setMessageError,
  setMessageLoading,
  setMessages,
} from "@/services/states/messages";

type Props = {
  suggestions: string[];
  handleTypingMode: (value: boolean) => void;
};

const Suggestions = ({ suggestions, handleTypingMode }: Props) => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state: RootState) => state.messages);
  const chatId = messages[0].chat_id;

  const handleContinueChat = async (value: string) => {
    dispatch(setMessageLoading(true));
    handleTypingMode(true);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex w-full flex-col gap-4 border-t-[1px] border-borderColor px-6 pt-6"
    >
      <span className="text-xs font-light text-[#ACACBE]">سوالات پیشنهادی</span>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggest, index) => {
          return (
            <Button
              key={`${suggest}-${index}`}
              className="h-[30px] cursor-pointer rounded-[3px] bg-[#373743] px-2 hover:bg-gray-500"
              onClick={() => handleContinueChat(suggest)}
            >
              {suggest}
            </Button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Suggestions;

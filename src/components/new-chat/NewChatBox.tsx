import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { ReplayProps } from "@/shared/types";
import { updateWorkspaceChats } from "@/services/states/workspace-chats";
import { postNewChat } from "@/services/api/new-chat";
import { RootState } from "@/services/states/store";
import {
  setMessageError,
  setMessageLoading,
  setMessages,
} from "@/services/states/messages";
import NewChatInput from "./NewChatInput";
import NewChatSamples from "./NewChatSamples";
import NewChats from "./NewChats";

const NewChatBox = () => {
  const dispatch = useDispatch();
  const currentWorkspaceId = useSelector(
    (state: RootState) => state.workspaces.currentWorkspace.id,
  );
  const { messages } = useSelector((state: RootState) => state.messages);

  useEffect(() => {
    dispatch(setMessages([]));
  }, [currentWorkspaceId]);

  const handleNewChat = async (value: string) => {
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

    const response = await postNewChat(currentWorkspaceId, value);

    if (response) {
      dispatch(
        updateWorkspaceChats({
          date: new Date().toISOString().split("T")[0],
          chats: [
            {
              id: null,
              title: value,
            },
          ],
        }),
      );

      const lastMessage = newMessages[newMessages.length - 1];
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full w-[768px]"
    >
      {!messages.length ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          <span className="text-[32px] font-[800] text-[#A0A0A0]">
            چه سوالی از ریپلای دارید؟
          </span>
          <NewChatInput
            handleNewChat={handleNewChat}
            placeholder="سوال خود را بنویسید"
          />
          <NewChatSamples handleQuestions={handleNewChat} />
        </div>
      ) : (
        <NewChats messages={messages} />
      )}
    </motion.div>
  );
};

export default NewChatBox;

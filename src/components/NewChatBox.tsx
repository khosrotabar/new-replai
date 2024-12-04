import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { ReplayProps } from "@/shared/types";
import { updateWorkspaceChats } from "@/services/states/workspace-chats";
import { postNewChat } from "@/services/api/new-chat";
import { RootState } from "@/services/states/store";
import NewChatInput from "./NewChatInput";
import NewChatSamples from "./NewChatSamples";
import NewChats from "./NewChats";

const NewChatBox = () => {
  const dispatch = useDispatch();
  const currentWorkspaceId = useSelector(
    (state: RootState) => state.workspaces.currentWorkspace.id,
  );
  const [messages, setMessages] = useState<ReplayProps[]>([]);
  const [replayLoading, setReplayLoading] = useState<boolean>(false);
  const [replayError, setReplayError] = useState<boolean>(false);

  useEffect(() => {
    setMessages([]);
  }, [currentWorkspaceId]);

  const handleNewChat = async (value: string) => {
    setReplayLoading(true);
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

    setMessages(newMessages);

    if (!messages.length) {
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
    }

    const response = await postNewChat(currentWorkspaceId, value);

    if (response) {
      const lastMessage = newMessages[newMessages.length - 1];
      const updatedMessage = {
        question: lastMessage.question,
        ...response,
      } as ReplayProps;
      newMessages[newMessages.length - 1] = updatedMessage;

      setMessages(newMessages);

      if (response.reply === "") setReplayError(true);
    } else {
      setReplayError(true);
    }

    setReplayLoading(false);
  };

  const handleMessages = (value: ReplayProps[]) => {
    setMessages(value);
  };

  const handleLoading = (value: boolean) => {
    setReplayLoading(value);
  };

  const handleError = (value: boolean) => {
    setReplayError(value);
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
        <NewChats
          messages={messages}
          replayLoading={replayLoading}
          replayError={replayError}
          handleLoading={handleLoading}
          handleError={handleError}
          handleMessages={handleMessages}
        />
      )}
    </motion.div>
  );
};

export default NewChatBox;

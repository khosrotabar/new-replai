import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { getChat } from "@/services/api/get-chat";
import { ChatMessageProps } from "@/shared/types";
import { groupByDate } from "@/utils/reducers";
import { convertToJalaliFull } from "@/utils/convertDateToJalali";
import { RootState } from "@/services/states/store";
import { setMessageError, setMessages } from "@/services/states/messages";
import ChatsLayout from "@/components/layout/ChatsLayout";
import ScrollContent from "@/components/ScrollContent";
import ChatQuestionAndReply from "@/components/chat/ChatQuestionAndReply";
import ChatLoading from "@/components/chat/ChatLoading";
import ChatBox from "@/components/chat/ChatBox";
import NewQuestionAndReply from "@/components/NewQuestionAndReplai";

const Chat = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const chatId = location.pathname.split("/").pop();
  const [chatMessages, setChatMessages] = useState<ChatMessageProps[]>([]);
  const editedChatMessages = groupByDate(chatMessages);
  const editedChatMessagesArray = Object.entries(editedChatMessages);
  const { messages, messageError, messageLoading } = useSelector(
    (state: RootState) => state.messages,
  );
  const { data, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () => getChat(+chatId!),
  });
  const isToday = chatMessages.some(
    (message) =>
      message.created.split("T")[0] === new Date().toISOString().split("T")[0],
  );

  console.log(chatMessages);

  useEffect(() => {
    setChatMessages([]);
    dispatch(setMessages([]));
  }, [chatId]);

  useEffect(() => {
    if (data) {
      setChatMessages(data);
      const lastAnswer = data[data.length - 1].message_answer;

      if (lastAnswer === "" || !lastAnswer) {
        dispatch(setMessageError(true));
      }
    }
  }, [data]);

  const handleChatMessages = (value: ChatMessageProps[]) => {
    setChatMessages(value);
  };

  if (isLoading) {
    return <ChatLoading />;
  }

  // TODO: handle error

  return (
    <ChatsLayout>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative flex h-full w-[768px] flex-col items-center justify-start pt-[80px]">
          <ScrollContent color="transparent">
            <div className="flex max-h-[calc(100vh-270px)] w-full flex-col items-center gap-4">
              {editedChatMessagesArray
                .reverse()
                .map(([date, items], mainIndex) => {
                  return (
                    <div key={date} className="w-full">
                      {/* Date of crteated message */}
                      <div className="my-4 flex w-full items-center justify-center first:mt-0">
                        <div className="rounded-[5px] bg-[#42425366] px-5 py-1">
                          <span className="text-sm font-light text-[#ACACBE]">
                            {convertToJalaliFull(date)}
                          </span>
                        </div>
                      </div>
                      {/* Messages */}
                      <div className="flex w-full flex-col gap-4">
                        {items.map((item, secondIndex) => (
                          <ChatQuestionAndReply
                            key={`${item.content}-${item.id}`}
                            messageLoading={messageLoading}
                            isLastMessage={
                              mainIndex ===
                                editedChatMessagesArray.length - 1 &&
                              secondIndex === items.length - 1
                            }
                            message={item}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              <div className="flex w-full flex-col gap-4">
                {messages.length && !isToday && (
                  <div className="my-4 flex w-full items-center justify-center first:mt-0">
                    <div className="rounded-[5px] bg-[#42425366] px-5 py-1">
                      <span className="text-sm font-light text-[#ACACBE]">
                        {convertToJalaliFull(
                          new Date().toISOString().split("T")[0],
                        )}
                      </span>
                    </div>
                  </div>
                )}
                {messages.map((m, index) => (
                  <NewQuestionAndReply
                    key={`${m.question}-${index}`}
                    message={m}
                    messageError={messageError}
                    isLastMessage={index === messages.length - 1}
                    messageLoading={messageLoading}
                  />
                ))}
              </div>
            </div>
          </ScrollContent>
          <ChatBox
            messages={messages}
            chatId={chatId}
            chatMessages={chatMessages}
            messageError={messageError}
            messageLoading={messageLoading}
            handleChatMessages={handleChatMessages}
          />
        </div>
      </div>
    </ChatsLayout>
  );
};

export default Chat;

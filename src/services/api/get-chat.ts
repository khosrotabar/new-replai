import { axios } from "@/lib/axios";
import { ChatMessageProps } from "@/shared/types";

export const getChat = async (chatId: number): Promise<ChatMessageProps[]> => {
  const { data } = await axios.get(`/api/chats/${chatId}/messages/`);

  return data;
};

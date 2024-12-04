import { axios } from "@/lib/axios";
import { ReplayProps } from "@/shared/types";

export const postContinueChat = async (
  chatId: number,
  text: string,
): Promise<ReplayProps | undefined> => {
  try {
    const { data } = await axios.post(`/api/chats/${chatId}/messages/`, {
      text: text,
    });

    return data;
  } catch (error) {
    console.log(error);

    return undefined;
  }
};

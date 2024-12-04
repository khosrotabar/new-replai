import { axios } from "@/lib/axios";
import { ReplayProps } from "@/shared/types";

export const postNewChat = async (
  workspaceId: number,
  text: string,
): Promise<ReplayProps | undefined> => {
  try {
    const { data } = await axios.post(`/api/workspaces/${workspaceId}/chats/`, {
      text: text,
    });

    return data;
  } catch (error) {
    console.log(error);

    return undefined;
  }
};

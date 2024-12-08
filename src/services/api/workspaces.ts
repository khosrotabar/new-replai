import { axios } from "@/lib/axios";
import { WorkspaceChatProps, WorkspaceProps } from "@/shared/types";

export const getWorkspaces = async (): Promise<WorkspaceProps[]> => {
  const { data } = await axios.get("/api/workspaces/");

  return data;
};

export const getWorkspaceChats = async (
  workspaceId: number,
): Promise<WorkspaceChatProps[]> => {
  const { data } = await axios.get(`/api/workspaces/${workspaceId}/chats/`);

  return data;
};

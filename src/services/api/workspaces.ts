import { axios } from "@/lib/axios";
import { WorkspaceChat, WorkspaceProps } from "@/shared/types";

export const getWorkspaces = async (): Promise<WorkspaceProps[]> => {
  const { data } = await axios.get("/api/workspaces/");

  return data;
};

export const getWorkspaceChats = async (
  workspaceId: number,
): Promise<WorkspaceChat[]> => {
  const { data } = await axios.get(`/api/workspaces/${workspaceId}/chats/`);

  return data;
};

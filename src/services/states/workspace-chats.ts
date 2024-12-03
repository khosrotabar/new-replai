import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkspaceChat } from "@/shared/types";

const initialState: WorkspaceChat[] = [];

const workspaceChatsSlice = createSlice({
  name: "workspace-chats",
  initialState: initialState,
  reducers: {
    setWorkspaceChats: (state, action: PayloadAction<WorkspaceChat[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setWorkspaceChats } = workspaceChatsSlice.actions;

export default workspaceChatsSlice.reducer;

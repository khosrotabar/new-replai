import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkspaceChatProps } from "@/shared/types";

type Props = {
  workspaceChats: WorkspaceChatProps[];
  loading: boolean;
};

const initialState: Props = {
  workspaceChats: [],
  loading: true,
};

const workspaceChatsSlice = createSlice({
  name: "workspace-chats",
  initialState: initialState,
  reducers: {
    setWorkspaceChats: (state, action: PayloadAction<Props>) => {
      state = action.payload;
      return state;
    },
    updateWorkspaceChats: (
      state,
      action: PayloadAction<WorkspaceChatProps>,
    ) => {
      const incomingChat = action.payload;
      const chatExists = state.workspaceChats.some(
        (chat) => chat.date === incomingChat.date,
      );
      const workspaceChats = state.workspaceChats.map((chat) => {
        if (chat.date === incomingChat.date) {
          return {
            ...chat,
            chats: [...incomingChat.chats, ...chat.chats],
          };
        }

        return chat;
      });
      if (!chatExists) {
        workspaceChats.unshift(incomingChat);
      }
      state.workspaceChats = workspaceChats as WorkspaceChatProps[];
    },
  },
});

export const { setWorkspaceChats, updateWorkspaceChats } =
  workspaceChatsSlice.actions;

export default workspaceChatsSlice.reducer;

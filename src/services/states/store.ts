import { configureStore } from "@reduxjs/toolkit";
import workspacesReducer from "./workspaces";
import workspaceChatsReducer from "./workspace-chats";

const store = configureStore({
  reducer: {
    workspaces: workspacesReducer,
    workspaceChats: workspaceChatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

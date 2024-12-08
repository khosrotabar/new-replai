import { configureStore } from "@reduxjs/toolkit";

import workspacesReducer from "./workspaces";
import workspaceChatsReducer from "./workspace-chats";
import messagesResucer from "./messages";

const store = configureStore({
  reducer: {
    workspaces: workspacesReducer,
    workspaceChats: workspaceChatsReducer,
    messages: messagesResucer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkspaceProps } from "@/shared/types";

type WorkspacesProps = {
  workspaces: WorkspaceProps[];
  loading: boolean;
  currentWorkspace: WorkspaceProps;
};

const initialState: WorkspacesProps = {
  workspaces: [],
  loading: true,
  currentWorkspace: {} as WorkspaceProps,
};

const workspacesSlice = createSlice({
  name: "workspaces",
  initialState: initialState,
  reducers: {
    setWorkspaces: (state, action: PayloadAction<WorkspacesProps>) => {
      state = action.payload;
      return state;
    },
    setCurrentWorkspace: (state, action: PayloadAction<WorkspaceProps>) => {
      state.currentWorkspace = action.payload;
    },
  },
});

export const { setWorkspaces, setCurrentWorkspace } = workspacesSlice.actions;

export default workspacesSlice.reducer;

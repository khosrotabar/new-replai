import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReplayProps } from "@/shared/types";

type Props = {
  messages: ReplayProps[];
  messageError: boolean;
  messageLoading: boolean;
};

const initialState: Props = {
  messages: [],
  messageError: false,
  messageLoading: false,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<ReplayProps[]>) => {
      state.messages = action.payload;
    },
    setMessageLoading: (state, action: PayloadAction<boolean>) => {
      state.messageLoading = action.payload;
    },
    setMessageError: (state, action: PayloadAction<boolean>) => {
      state.messageError = action.payload;
    },
  },
});

export const { setMessages, setMessageLoading, setMessageError } =
  messagesSlice.actions;

export default messagesSlice.reducer;

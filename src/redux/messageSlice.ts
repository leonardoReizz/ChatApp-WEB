import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "message",
  initialState: {
    receivedMessage: true,
    isLoading: true,
  },
  reducers: {
    changeMessage(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

export const { changeMessage } = slice.actions;
export default slice.reducer;

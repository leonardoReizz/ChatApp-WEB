import { createSlice } from '@reduxjs/toolkit';
import {IStore} from "./types";
import io from 'socket.io-client';

export const slice = createSlice({
  name: 'socket',
  initialState: {
    socket: io('http://localhost:3333'),
  },
  reducers:{
    changeSocket(state, { payload }) {
      return { ...state, payload }
    },
  }
})

export const { changeSocket } = slice.actions;
export const socket = (state: IStore) => state.socket;
export default slice.reducer;
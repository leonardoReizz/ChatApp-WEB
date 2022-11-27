import { createSlice } from '@reduxjs/toolkit';
import io from 'socket.io-client';

export const slice = createSlice({
  name: 'ioSocket',
  initialState: {
    ioSocket: io('http://localhost:3333'),
    usersOnline: []
  },
  reducers:{
    changeSocket(state, { payload }) {
      return { ...state, ...payload }
    },
  }
})

export const { changeSocket } = slice.actions;
export default slice.reducer;
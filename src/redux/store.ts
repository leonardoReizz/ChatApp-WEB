
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import socketReducer from './socketSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    socket: socketReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
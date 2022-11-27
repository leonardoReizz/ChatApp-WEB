
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import socketReducer from './socketSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    ioSocket: socketReducer,
    message: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
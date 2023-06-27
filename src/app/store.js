import { configureStore } from '@reduxjs/toolkit';
import userSlice, { userReducer } from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
      user : userSlice
  },
});

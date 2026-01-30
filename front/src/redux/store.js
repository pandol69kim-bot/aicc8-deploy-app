import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
  }),
});

export default store;

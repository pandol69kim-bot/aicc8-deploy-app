import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import modalSlice from './slices/modalSlice';

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
  }),
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import challengeReducer from './module/challengeSlice';
import friendsSlice from './module/friendsSlice';
import modalReducer from './module/modalSlice';
import userReducer from './module/userSlice';

const store = configureStore({
  reducer: {
    challenge: challengeReducer,
    modal: modalReducer,
    user: userReducer,
  },
});

export default store;

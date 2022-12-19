import { configureStore } from '@reduxjs/toolkit';
import challengeReducer from './module/challengeSlice';
import friendsSlice from './module/friendsSlice';
import modalReducer from './module/modalSlice';
import userReducer from './module/userSlice';
import dajimReducer from './module/dajimSlice';

const store = configureStore({
  reducer: {
    challenge: challengeReducer,
    modal: modalReducer,
    user: userReducer,
    dajim: dajimReducer,
  },
});

export default store;

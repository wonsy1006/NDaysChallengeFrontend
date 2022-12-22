import { configureStore } from '@reduxjs/toolkit';

import challengeReducer from './module/challengeSlice';
import friendsSlice from './module/friendsSlice';
import modalReducer from './module/modalSlice';
import userReducer from './module/userSlice';
import dajimReducer from './module/dajimSlice';
import { userApi } from './service/userService';

const store = configureStore({
  reducer: {
    challenge: challengeReducer,
    modal: modalReducer,
    user: userReducer,
    dajim: dajimReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware),
});

export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST, PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import challengeReducer from './module/challengeSlice';
import friendsSlice from './module/friendsSlice';
import modalReducer from './module/modalSlice';
import userReducer from './module/userSlice';
import dajimReducer from './module/dajimSlice';
import stampReducer from './module/stampSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  challenge: challengeReducer,
  modal: modalReducer,
  user: userReducer,
  dajim: dajimReducer,
  // stamp: stampReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }),
});

export const persistor = persistStore(store);
export default store;


import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import authReducer from './createSlice/authSlice'
import userReducer from './createSlice/userSlice'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
export default store;
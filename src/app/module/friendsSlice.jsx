import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from './instance';

const initialState = {
  message: '',
  errorMessage: '',
  friends: [],
  request: [],
  acceptance: [],
};

export const searchFriends = createAsyncThunk(
  'friends/search',
  async (args, thunkAPI) => {
    try {
      const data = await instance.get('/friends/find');
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const sendRequestToFriend = createAsyncThunk(
  'friends/sendRequest',
  async (args, thunkAPI) => {
    try {
      const data = await instance.post('/friends/request');
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const acceptFriendRequest = createAsyncThunk(
  'friends/acceptRequest',
  async (args, thunkAPI) => {
    try {
      const data = await instance.post('/friends/accept');
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const rejectFriendRequest = createAsyncThunk(
  'friends/rejectRequest',
  async (args, thunkAPI) => {
    try {
      const data = await instance.delete('/friends/request');
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getFriendsList = createAsyncThunk(
  'friends/getFriendsList',
  async (args, thunkAPI) => {
    try {
      const data = await instance.get('/friends/list');
    } catch (error) {}
  },
);

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
});

export default friendsSlice.reducer;

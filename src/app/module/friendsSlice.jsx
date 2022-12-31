import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from './instance';

const initialState = {
  message: '',
  errorMessage: '',
  friends: [],
  request: [],
  acceptance: [],
};

export const searchFriends = createAsyncThunk('friends/search');

export const sendRequestToFriend = createAsyncThunk();

export const acceptFriendRequest = createAsyncThunk();

export const getFriendsList = createAsyncThunk(
  'friends/getFriendsList',
  async (args, thunkAPI) => {
    try {
      const data = await instance.get();
    } catch (error) {}
  },
);

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
});

export default friendsSlice.reducer;

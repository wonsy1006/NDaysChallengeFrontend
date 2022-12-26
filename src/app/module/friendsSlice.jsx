import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

export const getFriendsList = createAsyncThunk();

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
});

export default friendsSlice.reducer;

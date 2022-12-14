import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from './instance';

const initialState = {
  loading: false,
  message: '',
  errorMessage: '',
  friendsList: [],
  searchResult: {},
  requests: {},
  acceptances: [],
};

export const searchFriends = createAsyncThunk(
  'friends/searchFriends',
  async ({ id, nickname }, thunkAPI) => {
    try {
      console.log({ id, nickname });
      const data = await instance.get('/friends/find', { id, nickname });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const sendRequestToFriend = createAsyncThunk(
  'friends/sendRequest',
  async ({ id, nickname }, thunkAPI) => {
    try {
      const data = await instance.post('/friends/request', { id, nickname });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const acceptFriendRequest = createAsyncThunk(
  'friends/acceptRequest',
  async ({ id, nickname, image }, thunkAPI) => {
    try {
      const data = await instance.post('/friends/accept', {
        id,
        nickname,
        image,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const rejectFriendRequest = createAsyncThunk(
  'friends/rejectRequest',
  async ({ id, nickname }, thunkAPI) => {
    try {
      const data = await instance.delete('/friends/request', { id, nickname });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchFriends.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchFriends.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.searchResult = payload.data;
        console.log(payload.data);
        state.error = null;
      })
      .addCase(searchFriends.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(sendRequestToFriend.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendRequestToFriend.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.requests = payload.data;
        state.error = null;
      })
      .addCase(sendRequestToFriend.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(acceptFriendRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(acceptFriendRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.requests = payload.data;
        state.error = null;
      })
      .addCase(acceptFriendRequest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default friendsSlice.reducer;

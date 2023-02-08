import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from './instance';

const initialState = {
  loading: false,
  message: '',
  errorMessage: '',
  searchResult: {},
  request: {},
  acceptances: [],
  requestList: [],
  acceptList: [],
};

export const findFriends = createAsyncThunk(
  'friends/findFriends',
  async ({ id, nickname }, thunkAPI) => {
    try {
      const data = await instance.get(`/friends/find`, {
        params: { id: id, nickname: nickname },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const sendRequestToFriend = createAsyncThunk(
  'friends/sendRequest',
  async (id, thunkAPI) => {
    try {
      const data = await instance.post('/friends/request', id);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getRequestList = createAsyncThunk(
  'friends/getRequestList',
  async (args, thunkAPI) => {
    try {
      const data = await instance.get('/friends/request');
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

export const getAcceptList = createAsyncThunk(
  'friends/getAcceptList',
  async (args, thunkAPI) => {
    try {
      const data = await instance.get(`/friends/accept`);
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
      const data = await instance.delete(`/friends/request`, { id, nickname });
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
      .addCase(findFriends.pending, (state) => {
        state.loading = true;
      })
      .addCase(findFriends.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.searchResult = payload.data;
        state.error = null;
      })
      .addCase(findFriends.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(sendRequestToFriend.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendRequestToFriend.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.request = payload.data;
        console.log(payload.data);
        state.error = null;
      })
      .addCase(sendRequestToFriend.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getRequestList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRequestList.fulfilled, (state, action) => {
        state.loading = false;
        state.requestList = action.payload.data;
        console.log(action);
        console.log(action.payload);
        state.error = null;
      })
      .addCase(getRequestList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(acceptFriendRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(acceptFriendRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.friendsList = payload.data;
        state.error = null;
      })
      .addCase(acceptFriendRequest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getAcceptList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAcceptList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.acceptList = payload.data;
        console.log(payload);
        state.error = null;
      })
      .addCase(getAcceptList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default friendsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from './instance';

const initialState = {
  dajim: {},
  feed: [],
  message: '',
  error: '',
  isLoading: false,
};

export const updateDajim = createAsyncThunk(
  'dajim/updateDajim',
  async ({ challengeId, dajimNumber, open, content }, thunkAPI) => {
    try {
      await instance.post(`/challenge/${challengeId}/dajim`, {
        dajimNumber,
        open,
        content,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getDajim = createAsyncThunk(
  'dajim/getDajim',
  async (args, thunkAPI) => {
    try {
      const data = await instance.get(`/challenge/${challengeId}/dajim`, args);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getDajimFeed = createAsyncThunk(
  'dajim/getDajimFeed',
  async (args, thunkAPI) => {
    try {
      const data = await instance.get(`/feed`, args);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

const dajimSlice = createSlice({
  name: 'dajim',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateDajim.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateDajim.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateDajim.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getDajim.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDajim.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.dajim = payload.data;
      })
      .addCase(getDajim.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getDajimFeed.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDajimFeed.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.feed = payload.data;
        console.log(state.feed);
      })
      .addCase(getDajimFeed.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default dajimSlice.reducer;

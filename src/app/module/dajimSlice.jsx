import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from './instance';

const initialState = {
  dajim: {},
  dajimNumber: null,
  feed: [],
  stickers: [],
  message: '',
  error: '',
  loading: false,
};

export const createDajim = createAsyncThunk(
  'dajim/createDajim',
  async ({ challengeId, open, content }, thunkAPI) => {
    try {
      const data = await instance.post(`/challenge/${challengeId}/dajim`, {
        open,
        content,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const patchDajim = createAsyncThunk(
  'dajim/patchDajim',
  async ({ challengeId, dajimNumber }, thunkAPI) => {
    try {
      const data = await instance.patch(`/challenge/${challengeId}/dajim`, {
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
  async (challengeId, thunkAPI) => {
    try {
      const data = await instance.get(`/challenge/${challengeId}/dajim`);
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
      const data = await instance.get(`/feed`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const selectEmotion = createAsyncThunk(
  'dajim/selectEmotion',
  async ({ dajimNumber, sticker }, thunkAPI) => {
    try {
      const data = await instance.post(`/feed/emotion`, {
        dajimNumber,
        sticker,
      });
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
  extraReducers: (builder) => {
    builder
      .addCase(createDajim.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDajim.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.dajim = payload.data;
      })
      .addCase(createDajim.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getDajim.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDajim.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.dajim = payload.data;
      })
      .addCase(getDajim.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(patchDajim.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(patchDajim.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.dajim = payload.data;
      })
      .addCase(getDajimFeed.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDajimFeed.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.feed = payload.data;
      })
      .addCase(getDajimFeed.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(selectEmotion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(selectEmotion.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.stickers = payload;
      })
      .addCase(selectEmotion.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default dajimSlice.reducer;

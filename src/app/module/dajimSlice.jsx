import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from './instance';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const initialState = {
  dajim: {},
  message: '',
  error: '',
  isLoading: false,
};

export const updateDajim = createAsyncThunk(
  'dajim/updateDajim',
  async ({ dajimNumber, open, content }, thunkAPI) => {
    try {
      const { challenges } = useSelector(state => state.challenge);

      const params = useParams();

      const challenge = challenges.find(
        challenge => challenge.roomNumber === parseInt(params.roomNumber),
      );

      console.log(challenge);

      const data = await instance.post(`/challenge/${challenge.roomNumber}`, {
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
        state.dajim = payload;
        state.error = null;
      })
      .addCase(updateDajim.rejected, (state, { payload }) => {
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
        state.dajim = payload.data;
      })
      .addCase(getDajimFeed.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default dajimSlice.reducer;

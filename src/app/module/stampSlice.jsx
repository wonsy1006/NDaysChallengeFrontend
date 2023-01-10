import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../utils/api';
import instance from './instance';

const initialState = {
  stamps: [],
  loading: false,
  error: null,
};

export const sendStamps = createAsyncThunk(
  'challenge/sendStamps',
  async ({ roomNumber, stampNumber, day }, thunkAPI) => {
    try {
      const data = await instance.post(`${baseUrl}/challenge/stamp`, {
        roomNumber,
        stampNumber,
        day,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(data);
    }
  },
);

const stampSlice = createSlice({
  name: 'stamp',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(sendStamps.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendStamps.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.stamps = payload.data.stamp;
      })
      .addCase(sendStamps.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data;
      }),
});

export default stampSlice.reducer;

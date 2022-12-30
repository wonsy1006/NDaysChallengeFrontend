import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from './instance';
import { PURGE } from 'redux-persist';
import baseUrl from '../../utils/api';

const initialState = {
  challenges: [],
  challengeDetail: {},
  message: '',
  error: '',
  loading: false,
  success: false,
};

export const createChallenge = createAsyncThunk(
  'challenge/create',
  async (
    {
      name,
      category,
      type,
      totalDays,
      startDate,
      reward,
      passCount,
      status,
      successCount,
      usedPassCount,
      memberNumber,
    },
    thunkAPI,
  ) => {
    try {
      await instance.post(`/challenge/create`, {
        name,
        category,
        type,
        totalDays,
        startDate,
        reward,
        passCount,
        status,
        successCount,
        usedPassCount,
        memberNumber,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getChallengeList = createAsyncThunk(
  'challenge/getChallengeList',
  async (args, thunkAPI) => {
    try {
      const data = await instance.get(`/challenge/list`, args);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getChallengeDetail = createAsyncThunk(
  'challenge/getChallengeDetail',
  async (challengeId, thunkAPI) => {
    try {
      const data = await instance.get(`/challenge/${challengeId}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteChallenge = createAsyncThunk(
  'challenge/deleteChallenge',
  async (id, { rejectWithValue }) => {
    try {
      const data = await instance.delete(`${baseUrl}/challenges/${id}`);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createChallenge.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createChallenge.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.data = payload;
      })
      .addCase(createChallenge.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getChallengeList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChallengeList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.challenges = payload.data;
      })
      .addCase(getChallengeList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getChallengeDetail.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChallengeDetail.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.challengeDetail = payload.data;
        console.log(payload.data);
        state.error = null;
      })
      .addCase(getChallengeDetail.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteChallenge.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteChallenge.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        // state.challenges = state.challenges.filter(
        //   (_) => _.id !== payload.data,
        // );
      })
      .addCase(deleteChallenge.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(PURGE, () => initialState);
  },
});

export default challengeSlice.reducer;

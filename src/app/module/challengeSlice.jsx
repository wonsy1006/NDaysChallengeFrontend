import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from './instance';
import { PURGE } from 'redux-persist';

const initialState = {
  challenges: [],
  completedChallenges: [],
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
      await instance.post(`/challenge`, {
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
      return thunkAPI.fulfillWithValue();
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
      const data = await instance.get(`/challenge/${challengeId}`, challengeId);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// 스탬프 갱신
export const updateStamp = createAsyncThunk(
  'challenge/updateStamp',
  async (
    { roomNumber, stampNumber, day, successCount, usedPassCount },
    thunkAPI,
  ) => {
    try {
      await instance.post('/challenge/stamp', {
        roomNumber,
        stampNumber,
        day,
        successCount,
        usedPassCount,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteChallenge = createAsyncThunk(
  'challenge/deleteChallenge',
  async (challengeId, thunkAPI) => {
    try {
      const data = await instance.delete(
        `/challenge/${challengeId}`,
        challengeId,
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getCompletedChallengeList = createAsyncThunk(
  'challenge/getCompletedChallengeList',
  async (args, thunkAPI) => {
    try {
      const data = await instance.get(`/user/challenges`, args);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createChallenge.pending, (state) => {
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
      .addCase(getChallengeList.pending, (state) => {
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
      .addCase(getChallengeDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChallengeDetail.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.challengeDetail = payload.data;
        state.error = null;
      })
      .addCase(getChallengeDetail.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateStamp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStamp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateStamp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteChallenge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteChallenge.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteChallenge.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getCompletedChallengeList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCompletedChallengeList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.completedChallenges = payload.data;
      })
      .addCase(getCompletedChallengeList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(PURGE, () => initialState);
  },
});

export default challengeSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../utils/api';

const accessToken = localStorage.getItem('accessToken');

const initialState = {
  challenges: [],
  message: '',
  error: '',
  loading: false,
  success: false,
};

// 챌린지 생성
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
    { rejectWithValue },
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };
      await axios.post(
        `${baseUrl}/challenge/create`,
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
        config,
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getChallengeList = createAsyncThunk(
  'challenge/get',
  async (args, { rejectWithValue }) => {
    try {
      const data = await axios.get(`${baseUrl}/challenge/list`, args, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(data);
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

export const deleteChallenge = createAsyncThunk(
  'challenge/delete',
  async (id, { rejectWithValue }) => {
    try {
      const data = await axios.delete(`${baseUrl}/challenges/${id}`);
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
      });
  },
});

export default challengeSlice.reducer;

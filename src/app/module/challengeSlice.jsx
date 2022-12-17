import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  challenges: [],
  message: '',
  errorMessage: '',
  loading: false,
  success: false,
};

// 챌린지 생성
export const createChallenge = createAsyncThunk(
  'challenge/createChallenge',
  async (
    {
      id,
      name,
      category,
      type,
      totalDays,
      startDate,
      endDate,
      reward,
      passCount,
      status,
    },
    { rejectWithValue },
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        'http://localhost:8080/challenges',
        {
          id,
          name,
          category,
          type,
          totalDays,
          startDate,
          endDate,
          reward,
          passCount,
          status,
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
  'challenge/challengeList',
  async (args, { rejectWithValue }) => {
    try {
      const data = await axios.get('http://localhost:8080/challenges');
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
        console.log(state.challenges.length);
      })
      .addCase(getChallengeList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default challengeSlice.reducer;

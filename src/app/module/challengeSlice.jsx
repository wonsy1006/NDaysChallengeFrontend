import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import challenges from '../../challenges';

const initialState = {
  challenges: challenges,
  message: '',
  errorMessage: '',
  loading: false,
  success: false,
};

// 개인 리스트 조회 (최신순 - 챌린지 생성일 기준)

// 단체 리스트 조회 (최신순 - 챌린지 생성일 기준)
// export const getChallengeList = createAsyncThunk(
//   'challenge/getChallengeList',
//   async (name, thunkAPI) => {
//     try {
//       const response = await axios(url);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue('something went wrong');
//     }
//   },
// );

// export const getChallengeList = createAsyncThunk(
//   'challenge/getChallengeList',
//   async (arg, { getState, rejectWithValue }) => {
//     const { challenge } = getState((state) => state.challenge);

//     try {
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   },
// );

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    // subtractPassCount: (state) => {
    //   state.challenges.passCount--;
    // },
    // changeChallengeStatus: (state) => {},
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getChallengeList.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(getChallengeList.fulfilled, (state, { payload }) => {
  //       state.loading = false;
  //       state.error = null;
  //       state.data = payload;
  //     })
  //     .addCase(getChallengeList.rejected, (state, { payload }) => {
  //       state.loading = false;
  //       state.error = payload;
  //     });
  // },
});

export default challengeSlice.reducer;

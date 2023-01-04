import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  challengeId: '',
  stamps: [],
  message: '',
  errorMessage: '',
  isLoading: true,
};

const stampSlice = createSlice({
  name: 'stamp',
  initialState,
  reducers: {
    createStamps: (state, action) => {
      challengeId = action.payload.challengeId;
      stampNumber = action.payload.totalDays;
    },
    getStamps: (state, action) => {
      state.challengeId = action.payload.challengeId;
    },
    changeStatusToPass: state => {
      state.currentDay = action.payload.currentDay;
      state.status = 'pass';
    },
    changeStatusToSuccess: state => {
      state.currentDay = action.payload.currentDay;
      state.status = 'success';
    },
    changeStatusToFail: state => {
      state.currentDay = action.payload.currentDay;
      state.status = 'fail';
    },
  },
});

export default stampSlice.reducer;

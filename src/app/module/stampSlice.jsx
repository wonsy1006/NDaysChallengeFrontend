import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stamps: [],
  message: '',
  errorMessage: '',
  isLoading: true,
};

const stampSlice = createSlice({
  name: 'stamp',
  initialState,
  reducers: {
    createStamps: (state, action) => {},
    changeStatusToPass: state => {
      state.status = 'pass';
    },
    changeStatusToFail: state => {
      state.status = 'fail';
    },
  },
});

export const {
  changeStatusToSuccess,
  changeStatusToPass,
  changeStatusToFail,
} = stampSlice.actions;
export default stampSlice.reducer;

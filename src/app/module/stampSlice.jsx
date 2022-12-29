import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'unchecked',
  message: '',
  errorMessage: '',
  isLoading: true,
};

const stampSlice = createSlice({
  name: 'stamp',
  initialState,
  reducers: {
    changeStatusToSuccess: state => {
      state.status = 'success';
    },
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

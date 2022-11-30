import { createSlice } from '@reduxjs/toolkit';
import challenges from '../../../challenges';

const initialState = {
  challenges: challenges,
  message: '',
  errorMessage: '',
  isLoading: true,
};

const stampSlice = createSlice({
  name: 'stamp',
  initialState,
  reducers: {},
});

export default stampSlice.reducer;

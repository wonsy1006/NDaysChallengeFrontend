import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dajim: {},
  message: '',
  errorMessage: '',
  isLoading: true,
};

const dajimSlice = createSlice({
  name: 'dajim',
  ...initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default dajimSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  errorMessage: '',
  data: [],
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
});

export default friendsSlice.reducer;

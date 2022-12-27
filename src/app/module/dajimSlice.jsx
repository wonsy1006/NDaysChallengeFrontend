import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import baseUrl from '../../utils/api';
import { useParams } from 'react-router-dom';

const accessToken = localStorage.getItem('accessToken');

const initialState = {
  dajim: {},
  message: '',
  error: '',
  isLoading: false,
};

export const updateDajim = createAsyncThunk(
  'dajim/updateDajim',
  async (args, { rejectWithValue }) => {
    try {
      const { challenges } = useSelector(state => state.challenge);

      const params = useParams();

      const challenge = challenges.find(
        challenge => challenge.roomNumber === parseInt(params.roomNumber),
      );
      const data = await axios.post(
        `${baseUrl}/challenge/${challenge.roomNumber}`,
        args,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
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

export const getDajimFeed = createAsyncThunk(
  'dajim/getDajimFeed',
  async (data, { rejectWithValue }) => {
    try {
      const data = await axios.get(`${baseUrl}/feed`);
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

const dajimSlice = createSlice({
  name: 'dajim',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDajimFeed.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDajimFeed.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.dajim = payload.data;
      })
      .addCase(getDajimFeed.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default dajimSlice.reducer;

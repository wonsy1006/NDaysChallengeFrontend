import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const accessToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  loading: false,
  user: {}, // user 객체
  accessToken: null, // JWT 저장
  error: null,
  success: false, // signUp 과정 모니터
};

export const userSignUp = createAsyncThunk(
  // action type string
  'user/signUp',
  // callback function
  async ({ id, pw, nickname, image }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // make request to backend
      await axios.post(
        'http://localhost:8080/auth/signup',
        { id, pw, nickname, image },
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

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ id, pw }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        'http://localhost:8080/auth/login',
        { id, pw },
        config,
      );
      localStorage.setItem('userToken', data.accessToken);
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

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      // store에서 user data 가져오기
      const { user } = getState();

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:8080/auth/login`,
        config,
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('accessToken');
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(userSignUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = true;
        state.user = payload;
        state.accessToken = payload.accessToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(getUserDetails.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

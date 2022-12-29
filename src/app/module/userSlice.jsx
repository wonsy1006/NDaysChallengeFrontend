import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import axios from 'axios';
import instance from './instance';

const accessToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null;

const initialState = {
  loading: false,
  userInfo: {},
  accessToken: null,
  refreshToken: null,
  error: null,
  success: false,
};

export const userSignUp = createAsyncThunk(
  // action type string
  'user/signUp',
  // callback function
  async ({ id, pw, nickname, image }, thunkAPI) => {
    try {
      // // configure header's Content-Type as JSON
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // };
      // // make request to backend
      const { data } = await instance.post('/auth/signup', {
        id,
        pw,
        nickname,
        image,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
        `${baseUrl}/auth/login`,
        { id, pw },
        config,
      );
      localStorage.setItem('accessToken', data.accessToken);
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
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.accessToken}`,
        },
      };
      const { data } = await axios.get(`${baseUrl}/user/details`, config);
      console.log({ data });
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem('accessToken');
      state.loading = false;
      state.user = null;
      state.accessToken = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userSignUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(userSignUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userLogin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = true;
        state.userInfo = payload;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getUserDetails.pending, state => {
        state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
      })
      .addCase(getUserDetails.rejected, (state, { payload }) => {
        state.loading = false;
      })
      // .addCase(reissueToken.pending, state => {
      //   state.loading = true;
      // })
      // .addCase(reissueToken.fulfilled, (state, { payload }) => {
      //   state.loading = false;
      //   state.refreshToken = payload;
      // })
      // .addCase(reissueToken.rejected, (state, { payload }) => {
      //   state.loading = false;
      //   state.error = payload;
      // })
      .addCase(PURGE, () => initialState);
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

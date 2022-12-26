import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../utils/api';

const accessToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null;

const initialState = {
  loading: false,
  userInfo: {}, // user 객체
  accessToken: null, // JWT 저장
  refreshToken: null,
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
        `${baseUrl}/auth/signup`,
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
      // localStorage.setItem('userId', data.id);
      // localStorage.setItem('userPw', data.pw);
      // localStorage.setItem('userPic', data.image);
      // localStorage.setItem('userNickname', data.nickname);
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

export const reissueToken = createAsyncThunk(
  'user/reissue',
  async (arg, { rejectWithValue }) => {
    try {
      axios.interceptors.response.use(
        success => success,
        async error => {
          const errorCode = error.response.data.code;

          if (errorCode === 'TOKEN-0001') {
            const originalRequest = error.config;

            await axios
              .post(`${baseUrl}/auth/reissue`)
              .then(result => {
                localStorage.setItem(
                  'accessToken',
                  result.data.response.accessToken,
                );
                window.location.reload();
              })
              .catch(error => {
                localStorage.removeItem('accessToken');
              });
            return Promise.reject(error);
          }
        },
      );
    } catch (error) {}
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem('accessToken');
      // localStorage.removeItem('userId');
      // localStorage.removeItem('userPw');
      // localStorage.removeItem('userPic');
      // localStorage.removeItem('userNickname');
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
      .addCase(reissueToken.pending, state => {
        state.loading = true;
      })
      .addCase(reissueToken.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.refreshToken = payload;
      })
      .addCase(reissueToken.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(PURGE, () => initialState);
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

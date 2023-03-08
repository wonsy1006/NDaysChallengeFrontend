import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useCookies } from 'react-cookie';
import { PURGE } from 'redux-persist';
import instance from './instance';

const initialState = {
  loading: false,
  userInfo: {},
  accessToken: null,
  refreshToken: null,
  error: null,
  success: false,
  result: null,
};

export const userSignUp = createAsyncThunk(
  'user/signUp',
  async ({ id, pw, nickname, image }, thunkAPI) => {
    try {
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
  async ({ id, pw }, thunkAPI) => {
    try {
      const { data } = await instance.post(`/auth/login`, { id, pw });
      const accessToken = data.accessToken;
      console.log(data, accessToken);

      const [cookies, setCookie, removeCookie] = useCookies('token');

      if (accessToken) {
        setCookie('token', accessToken);
      }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (args, thunkAPI) => {
    try {
      const { data } = await instance.get(`/user/details`, args);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const checkId = createAsyncThunk(
  'user/checkId',
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await instance.get(`/auth/id-check`, { id });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const checkNickname = createAsyncThunk(
  'user/checkNickname',
  async ({ nickname }, thunkAPI) => {
    try {
      const { data } = await instance.get(`/auth/nickname-check`, { nickname });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// export const logout = createAsyncThunk(
//   'user/logout',
//   async (args, thunkAPI) => {
//     try {
//       const { data } = await instance.post(`/auth/logout`, args);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
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
        state.userInfo = payload;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
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
        state.userInfo = payload;
        state.error = payload;
      })
      .addCase(getUserDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(checkId.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkId.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.result = payload.data;
      })
      .addCase(checkId.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(PURGE, () => initialState);
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

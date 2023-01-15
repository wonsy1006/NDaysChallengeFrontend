import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../utils/api';
import instance from './instance';

const initialState = {
  stamps: [
    {
      challengeId: '',
      count: '',
      stamps: [
        {
          day: '',
          status: '',
        },
      ],
    },
  ],
  loading: false,
  error: null,
};

// export const sendStamps = createAsyncThunk(
//   'challenge/sendStamps',
//   async ({ roomNumber, stampNumber, day }, thunkAPI) => {
//     try {
//       const data = await instance.post(`${baseUrl}/challenge/stamp`, {
//         roomNumber,
//         stampNumber,
//         day,
//       });
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(data);
//     }
//   },
// );

const stampSlice = createSlice({
  name: 'stamp',
  initialState,
  reducers: {
    createStamps: (state, action) => {
      const challengeId = action.payload.challengeId;
      const count = action.payload.count;

      state.stamps.concat({ challengeId, count, stamps });

      return state.stamps.filter((stamp) => stamp.challengeId === challengeId);
    },
    getStamps: (state, action) => {
      const challengeId = action.payload.challengeId;
      state.stamps = state.stamps.filter((stamps) => {
        stamps.challengeId === challengeId;
      });

      return state.stamps;
    },
    updateTodayStatus: (state, action) => {
      const challengeId = action.payload.challengeId;
      const currentDay = action.payload.currentDay;
      const status = action.payload.status;

      state.stamps = state.stamps.map((stamp) => {
        if (stamp.currentDay === currentDay) {
          return;
        }
      });
    },
  },
});

export default stampSlice.reducer;

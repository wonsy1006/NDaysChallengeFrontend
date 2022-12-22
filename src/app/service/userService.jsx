import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../utils/api';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.accessToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: build => ({
    getDetails: build.query({
      query: () => ({
        url: 'user/details',
        method: 'GET',
      }),
    }),
  }),
});

// export react hook
export const { useGetDetailsQuery } = userApi;

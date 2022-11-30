import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dajim = [{}];

const initialState = {
  dajim: dajim,
  message: '',
  errorMessage: '',
  isLoading: true,
};

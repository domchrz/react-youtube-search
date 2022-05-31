import { createSlice } from '@reduxjs/toolkit';
import { Slice } from './types';

const config: Slice<string, 'error'> = {
  name: 'error',
  initialState: '',
  reducers: {
    error: (_, { payload }) => payload,
  },
};

const errorSlice =  createSlice(config)

export const errorReducer = errorSlice.reducer;
export const errorActions = errorSlice.actions;
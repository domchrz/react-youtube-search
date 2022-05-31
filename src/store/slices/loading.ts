import { createSlice } from '@reduxjs/toolkit';
import { Slice } from './types';

const config: Slice<boolean, 'isLoading'> ={
  name: 'isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (_, { payload }) => payload,
  },
}


const loadingSlice = createSlice(config);

export const loadingReducer = loadingSlice.reducer;
export const loadingActions = loadingSlice.actions;
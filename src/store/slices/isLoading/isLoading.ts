import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { getVideoPage } from '../../actions/asyncThunk';


const isLoadingSlice = createSlice<boolean, SliceCaseReducers<boolean>, 'isLoading'>({
  name: 'isLoading',
  initialState: false,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getVideoPage.pending, () => true)
    builder.addCase(getVideoPage.fulfilled, () => false)
  },
});

export const isLoadingReducer = isLoadingSlice.reducer;
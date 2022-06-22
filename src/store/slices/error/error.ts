import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { getVideoPage } from '../../actions/asyncThunk';

const errorSlice = createSlice<string, SliceCaseReducers<string>, 'error'>({
  name: 'error',
  initialState: '',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getVideoPage.rejected,
      (state: any, { payload }: { payload: any }) => payload.error.message
    );
    builder.addCase(
      getVideoPage.pending,
      (state: any, { payload }: { payload: any }) => ''
    );
    builder.addCase(
      getVideoPage.fulfilled,
      (state: any, { payload }: { payload: any }) => ''
    );
  },
});

export const errorReducer = errorSlice.reducer;

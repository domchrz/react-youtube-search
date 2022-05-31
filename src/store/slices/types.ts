import { SliceCaseReducers } from '@reduxjs/toolkit';

export interface Slice<S, N> {
  name: N;
  initialState: S;
  reducers: SliceCaseReducers<S>;
}

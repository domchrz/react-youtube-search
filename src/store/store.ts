import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { errorReducer } from './slices/error';
import { isLoadingReducer } from './slices/isLoading';
import { videosReducer } from './slices/videos';

const store = configureStore({
  reducer: {
    videos: videosReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;
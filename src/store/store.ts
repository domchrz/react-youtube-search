import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { errorReducer } from './slices/error';
import { loadingReducer } from './slices/loading';
import { videosReducer } from './slices/videos';

const store = configureStore({
  reducer: {
    videos: videosReducer,
    isLoading: loadingReducer,
    error: errorReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;
import { createSlice } from '@reduxjs/toolkit';
import { Video } from '../../components/VideoOverview/types';
import { Videos } from '../../components/VideoList/types';
import { Slice } from './types';

const config: Slice<Videos, 'videos'> = {
  name: 'videos',
  initialState: {
    nextPageToken: '',
    items: [],
  },
  reducers: {
    setItems: (_, { payload }) => ({
      nextPageToken: payload.nextPageToken,
      items: payload.items,
    }),
    addItems: (state, { payload }) => ({
      nextPageToken: payload.nextPageToken,
      items: state.items.concat(
        payload.items.filter(
          (item: Video) => !state.items.some(i => i.id.videoId === item.id.videoId)
        )
      ),
    }),
  },
};

const videosSlice = createSlice(config);

export const videosReducer = videosSlice.reducer;
export const videosActions = videosSlice.actions;

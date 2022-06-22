import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { getVideoPage } from '../../actions/asyncThunk';
import { VideoData, VideoPageData, Videos } from './types';

const videosSlice = createSlice<Videos, SliceCaseReducers<Videos>, 'videos'>({
  name: 'videos',
  initialState: {
    nextPageToken: '',
    items: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getVideoPage.fulfilled,
      (state: Videos, { payload }: { payload: VideoPageData }) => ({
        nextPageToken: payload.nextPageToken,
        items: payload.isNewQuery
          ? payload.items
          : state.items.concat(
              payload.items.filter(
                (item: VideoData) => !state.items.some(i => i.id.videoId === item.id.videoId)
              )
            ),
      })
    );
  },
});

export const videosReducer = videosSlice.reducer;

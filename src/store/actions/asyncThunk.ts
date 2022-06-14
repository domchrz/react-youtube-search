import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_FETCH_URL, API_KEY, MAX_RESULTS } from '../../constants/api';
import { VideoPageData } from '../slices/videos/types';

export interface getVideoPagePayload {
  query: string;
  isNewQuery: boolean;
  nextPageToken?: string;
}

export const getVideoPage = createAsyncThunk(
  'videos/setItems',
  async ({ query, isNewQuery, nextPageToken }: getVideoPagePayload, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'GET',
        url: BASE_FETCH_URL,
        params: {
          q: query,
          key: API_KEY,
          maxResults: MAX_RESULTS,
          pageToken: nextPageToken,
        },
      });
      const data = response.data;
      return {
        nextPageToken: data.nextPageToken,
        items: data.items,
        isNewQuery,
      };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

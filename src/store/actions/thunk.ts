import { Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Videos } from '../../components/VideoList/types';
import { BASE_FETCH_URL, API_KEY, MAX_RESULTS } from '../../constants/api';
import { errorActions } from '../slices/error';
import { loadingActions } from '../slices/loading';
import { videosActions } from '../slices/videos';

export function getVideos(
  query: string,
  nextPageToken: void
): (dispatch: Dispatch) => Promise<void>;

export function getVideos(
  query: string,
  nextPageToken: string
): (dispatch: Dispatch) => Promise<void>;

export function getVideos<P>(query: string, nextPageToken: P) {
  return async (dispatch: Dispatch) => {
    loadingActions.setIsLoading(true);
    try {
      await axios({
        method: 'GET',
        url: BASE_FETCH_URL,
        params: {
          q: query,
          key: API_KEY,
          maxResults: MAX_RESULTS,
          pageToken: nextPageToken,
        },
      })
        .then(response => response.data)
        .then((data: Videos) => {
          const videos = { nextPageToken: data.nextPageToken, items: data.items };
          dispatch(
            !!nextPageToken ? videosActions.addItems(videos) : videosActions.setItems(videos)
          );
          dispatch(errorActions.error(''));
        });
    } catch (error: any) {
      if (typeof error === 'object' && error.message) {
        dispatch(errorActions.error(error.message));
      }
    }
    loadingActions.setIsLoading(false);
  };
}

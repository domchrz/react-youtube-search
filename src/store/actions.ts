import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { Videos } from '../components/VideoList/types';
import { baseUrl, apiKey } from '../constants/api';

export const getSearchResults = (query: string) => async (dispatch: Dispatch) => {
  try {
    await axios({
      method: 'GET',
      url: baseUrl,
      params: {
        q: query,
        key: apiKey,
        maxResults: 10,
      },
    })
      .then(response => response.data)
      .then((data: Videos) => {
        dispatch({
          type: 'GET_SEARCH_RESULTS',
          payload: { nextPageToken: data.nextPageToken, items: data.items },
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const getNextPage = (nextPageToken: string) =>  async (dispatch: Dispatch) => {
  try {
    await axios({
      method: 'GET',
      url: baseUrl,
      params: {
        key: apiKey,
        maxResults: 10,
        nextPageToken
      },
    })
      .then(response => response.data)
      .then((data: Videos) => {
        dispatch({
          type: 'GET_NEXT_PAGE',
          payload: { nextPageToken: data.nextPageToken, items: data.items },
        });
      });
  } catch (error) {
    console.log(error);
  }
};

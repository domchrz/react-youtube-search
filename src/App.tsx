import { AnyAction } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  SearchBar,
  VideoList,
  Placeholder,
  InfiniteScrollObserver,
  ErrorMessage,
} from './components';
import { RootState } from './store/types';
import { StyledMain, StyledHeader, StyledHeadline } from './styles';
import thr from './helpers/throttle';
import { Videos } from './store/slices/videos/types';
import Video from './ViewModels/video';
import videosSelector from './store/selectors/videos';
import { getVideoPage } from './store/actions/asyncThunk';

const throttle = thr();

export default function App() {
  const [query, setQuery] = useState<string>('');
  const videos = useSelector<RootState, Videos<Video>>(videosSelector);
  const isLoading = useSelector<RootState, boolean>(state => state.isLoading);
  const error = useSelector<RootState, string>(state => state.error);
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

  console.log(videos.items);

  useEffect(() => {
    if (query.length === 0) return;
    dispatch(getVideoPage({ query, isNewQuery: true }));
    window.scrollTo(0, 0);
  }, [query]);

  const handleScroll = () =>
    !!!error &&
    throttle(
      () =>
        dispatch(getVideoPage({ query, isNewQuery: false, nextPageToken: videos.nextPageToken })),
      500
    );

  const handleSetQuery = (searchQuery: string) => throttle(() => setQuery(searchQuery), 500);

  return (
    <>
      <StyledHeader>
        <SearchBar handleSetQuery={handleSetQuery} />
        <StyledHeadline>SearchTube</StyledHeadline>
      </StyledHeader>
      <StyledMain>
        {!!videos.items.length && <VideoList items={videos.items} />}
        {isLoading && <Placeholder />}
        <InfiniteScrollObserver fetchNewVideos={handleScroll} />
      </StyledMain>
      {!!error && <ErrorMessage error={error} />}
    </>
  );
}

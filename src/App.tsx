import { AnyAction } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { SearchBar, VideoList, Placeholder, Observer, ErrorMessage} from './components'
import { Videos } from './components/VideoList/types';
import { getVideos } from './store/actions/thunk';
import { StoreState } from './store/types';
import { StyledMain, StyledHeader, StyledHeadline } from './styles';
import thr from './helpers/throttle';

const throttle = thr();

export default function App() {
  const [query, setQuery] = useState<string>('');
  const videos = useSelector<StoreState, Videos>(state => state.videos);
  const isLoading = useSelector<StoreState, boolean>(state => state.loading);
  const error = useSelector<StoreState, string>(state => state.error);
  const dispatch = useDispatch<ThunkDispatch<StoreState, any, AnyAction>>();

  useEffect(() => {
    if (query.length === 0) return;
    dispatch(getVideos(query));
    window.scrollTo(0, 0);
  }, [query]);

  const handleScroll = () => !(!!error) && throttle(() =>  dispatch(getVideos(query, videos.nextPageToken)), 500);

  return (
    <>
      <StyledHeader>
        <SearchBar setQuery={setQuery} />
        <StyledHeadline>SearchTube</StyledHeadline>
      </StyledHeader>
      <StyledMain>
        {!!videos.items.length && <VideoList items={videos.items} />}
        {isLoading && <Placeholder />}
        <Observer callback={handleScroll} />
      </StyledMain>
      {!!error && <ErrorMessage error={error} />}
    </>
  );
}

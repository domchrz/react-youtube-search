import { Videos } from '../components/VideoList/types';

export interface StoreState {
  videos: Videos;
  error: string;
  loading: boolean;
}

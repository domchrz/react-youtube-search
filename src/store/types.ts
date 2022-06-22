import { VideoPageData } from './slices/videos/types';

export interface RootState {
  isLoading: boolean;
  error: string;
  videos: VideoPageData
}
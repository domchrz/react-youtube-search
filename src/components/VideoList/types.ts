import { Video } from '../VideoOverview/types';

export interface Videos {
  nextPageToken: string;
  items: Video[];
}
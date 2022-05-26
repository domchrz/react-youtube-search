import { Video } from '../Video/types';

export interface Videos {
  nextPageToken: string;
  items: Video[];
}
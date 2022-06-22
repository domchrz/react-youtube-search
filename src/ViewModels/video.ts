import { getPublishedTime } from '../helpers/date';
import { clipTitle } from '../helpers/titles';
import { VideoData } from '../store/slices/videos/types';

export default class Video {
  thumbnailUrl;
  youTubeId;

  constructor(private videoData: VideoData) {
    this.thumbnailUrl = {
      high: this.videoData.snippet.thumbnails.high.url,
      medium: this.videoData.snippet.thumbnails.medium.url,
      low: this.videoData.snippet.thumbnails.default.url,
    };
    this.youTubeId = this.videoData.id.videoId;
  }

  get published() {
    const publishedTime = getPublishedTime(this.videoData.snippet.publishedAt);
    return `${publishedTime.time} ${publishedTime.unit}`;
  }

  get title() {
    return clipTitle(this.videoData.snippet.title, 60);
  }

  get channelTitle() {
    return clipTitle(this.videoData.snippet.channelTitle, 60);
  }
}

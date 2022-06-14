export interface VideoData {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    channelTitle: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
  };
}

export interface VideoPageData {
  nextPageToken: string;
  items: VideoData[];
  isNewQuery: boolean;
}

export interface Videos<Items = VideoData> {
  nextPageToken: string;
  items: Items[];
}

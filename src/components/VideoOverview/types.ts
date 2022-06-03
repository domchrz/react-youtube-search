export interface Video {
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

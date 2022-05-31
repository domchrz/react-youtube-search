import { useEffect, useState } from 'react';
import { getDateDiff, getVideoDate, VideoDate } from '../../helpers/date';
import { clipTitle } from '../../helpers/titles';
import VideoEmbed from '../VideoEmbed';
import { StyledContainer, StyledContent, StyledImg, StyledMeta, StyledPlayIcon, StyledTitle } from './styles';
import { Video } from './types';

export default function VideoOverview({ item }: { item: Video }) {
  const [publishedAgo, setPublishedAgo] = useState<VideoDate>();
  const [loadVideo, setLoadVideo] = useState<boolean>(false);

  useEffect(() => {
    setPublishedAgo(getVideoDate(getDateDiff(item.snippet.publishedAt)));
  }, []);

  return (
    <StyledContainer>
      <StyledContent>
        {loadVideo ? (
          <VideoEmbed videoId={item.id.videoId} />
        ) : (
          <>
            <StyledImg src={item.snippet.thumbnails.high.url} onClick={() => setLoadVideo(true)} />
            <StyledPlayIcon>
              smart_display
            </StyledPlayIcon>
          </>
        )}
      </StyledContent>
      <StyledTitle>{clipTitle(item.snippet.title, 60)}</StyledTitle>
      <StyledMeta>
        <p>{clipTitle(item.snippet.channelTitle)}</p>
        {publishedAgo && <p>published {`${publishedAgo.time} ${publishedAgo.unit}`} ago</p>}
      </StyledMeta>
    </StyledContainer>
  );
}

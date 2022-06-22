import { FC, useState } from 'react';
import Video from '../../ViewModels/video';
import VideoEmbed from '../VideoEmbed';
import {
  StyledContainer,
  StyledContent,
  StyledImg,
  StyledMeta,
  StyledPlayIcon,
  StyledTitle,
} from './styles';

const VideoOverview: FC<{ item: Video }> = ({ item }) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  return (
    <StyledContainer>
      <StyledContent>
        {showVideo ? (
          <VideoEmbed videoId={item.youTubeId} />
        ) : (
          <>
            <StyledImg src={item.thumbnailUrl.high} onClick={() => setShowVideo(true)} />
            <StyledPlayIcon>smart_display</StyledPlayIcon>
          </>
        )}
      </StyledContent>
      <StyledTitle>{item.title}</StyledTitle>
      <StyledMeta>
        <p>{item.channelTitle}</p>
        {item.published && <p>published {item.published} ago</p>}
      </StyledMeta>
    </StyledContainer>
  );
};

export default VideoOverview;

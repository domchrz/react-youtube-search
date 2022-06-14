import { FC } from 'react';
import Video from '../../ViewModels/video';
import VideoOverview from '../VideoOverview';
import { StyledUl } from './styles';

const VideoList: FC<{ items: Video[] }> = ({ items }) => {
  return (
    <StyledUl>
      {items.map((item: Video) => (
        <VideoOverview key={item.youTubeId} item={item} />
      ))}
    </StyledUl>
  );
};

export default VideoList;

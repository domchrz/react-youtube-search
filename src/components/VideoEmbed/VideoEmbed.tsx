import { FC } from 'react';
import { BASE_EMBED_URL } from '../../constants/api';
import { StyledIframe } from './styles';

const VideoEmbed: FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <StyledIframe
      src={BASE_EMBED_URL + videoId}
      allow="autoplay; fullscreen; picture-in-picture"
      frameBorder="0"></StyledIframe>
  );
};

export default VideoEmbed;

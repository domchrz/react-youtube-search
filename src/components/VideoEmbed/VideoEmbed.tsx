import { BASE_EMBED_URL } from '../../constants/api';
import { StyledIframe } from './styles';

export default function VideoEmbed({ videoId }: { videoId: string }) {
  return (
    <StyledIframe
      src={BASE_EMBED_URL + videoId}
      allow="autoplay; fullscreen; picture-in-picture"
      frameBorder="0"></StyledIframe>
  );
}

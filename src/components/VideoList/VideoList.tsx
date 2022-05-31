import { Video } from '../VideoOverview/types';
import VideoOverview from '../VideoOverview';
import { StyledUl } from './styles';

export default function VideoList({ items }: { items: Video[] }) {
  return (
    <StyledUl>
      {items.map((item: Video) => (
        <VideoOverview key={item.id.videoId} item={item} />
      ))}
    </StyledUl>
  );
}

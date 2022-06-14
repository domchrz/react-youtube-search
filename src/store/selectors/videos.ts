import Video from '../../ViewModels/video';
import { RootState } from '../types';

const videosSelector = (state: RootState) => ({
  ...state.videos,
  items: state.videos.items.map(item => new Video(item)),
});

export default videosSelector;
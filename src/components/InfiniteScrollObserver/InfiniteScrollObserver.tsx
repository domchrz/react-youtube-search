import { useEffect, useRef, FC } from 'react';
import { StyledDiv } from './styles';

const InfiniteScrollObserver: FC<{ fetchNewVideos: Function }> = ({ fetchNewVideos }) => {
  const element = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (!element.current) return;

    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchNewVideos();
        }
      },
      { threshold: 0.2 }
    );
    observer.current.observe(element.current);

    return () => observer.current?.disconnect();
  }, [fetchNewVideos]);

  return <StyledDiv ref={element}></StyledDiv>;
};

export default InfiniteScrollObserver;

import { useEffect, useRef, FC } from 'react';
import { StyledDiv } from './styles';

const Observer: FC<{callback: Function}> = ({callback}) => {
  const element = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (!element.current) return

    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.3 }
    );
    observer.current.observe(element.current)

    return () => observer.current?.disconnect();
  }, [callback]);


  return (
    <StyledDiv ref={element}></StyledDiv>
  )
}

export default Observer;

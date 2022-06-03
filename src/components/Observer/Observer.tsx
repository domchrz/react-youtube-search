import { useEffect, useRef, useState } from 'react';
import { StyledDiv } from './styles';

export default function Observer({callback}: { callback: Function}) {
  const [element, setElement] = useState<HTMLDivElement>()
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (!element) return

    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.3 }
    );
    observer.current.observe(element)

    return () => observer.current?.disconnect();
  }, [element, callback]);


  return (
    <StyledDiv ref={(node: HTMLDivElement) => setElement(node)}></StyledDiv>
  )
}

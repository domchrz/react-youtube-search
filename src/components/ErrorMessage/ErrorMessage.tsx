import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { StyledContainer } from './styles';

const ErrorMessage: FC<{error: string}> = ({ error }) => {
  const [windowInnerHeight, setWindowInnerHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const listener = () => {
      const innerHeight = window.innerHeight;
      setWindowInnerHeight(innerHeight);
    };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  return createPortal(<StyledContainer bottom={windowInnerHeight}>{error}</StyledContainer>, document.body);
}

export default ErrorMessage;

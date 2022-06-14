import { useState } from 'react';
import { MAX_RESULTS } from '../../constants/api';
import PlaceholderOverview from '../PlaceholderOverview';
import { StyledUl } from './styles';

export default function Placeholder() {
  const [items] = useState<JSX.Element[]>(
    Array.from({ length: MAX_RESULTS }, () => <PlaceholderOverview />)
  );

  return <StyledUl>{!!items.length && items.map(item => item)}</StyledUl>;
}

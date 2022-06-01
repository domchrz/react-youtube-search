import { useEffect, useState } from 'react';
import { MAX_RESULTS } from '../../constants/api';
import Overview from '../Overview';
import { StyledUl } from './styles';

export default function Placeholder() {
  const [items, setItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setItems(Array.from({ length: MAX_RESULTS }, () => <Overview />));
  }, [MAX_RESULTS]);
  
  return <StyledUl>{!!items.length && items.map(item => item)}</StyledUl>;
}

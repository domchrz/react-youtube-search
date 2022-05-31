import { useEffect, useState } from 'react';
import { MAX_RESULTS } from '../../constants/api';
import Overview from '../Overview';

export default function Placeholder() {
  const [items, setItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setItems(Array.from({ length: MAX_RESULTS }, () => <Overview />));
  }, [MAX_RESULTS]);
  
  return <div>{!!items.length && items.map(item => item)}</div>;
}

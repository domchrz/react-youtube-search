import { useState } from 'react';
import Observer from './components/Observer';

export default function App() {
  const [items, setItems] = useState<number[]>([]);

  const setNumbers = () => {
    console.log('run');
    setItems(prevState => prevState.concat(prevState.length));
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <h1>Hello from App</h1>
      {items.map(item => (
        <div
          key={item}
          style={{ color: `rgb(${item}, ${item}, ${item})`, width: '100%', height: '300px' }}>
          {item}
        </div>
      ))}
      <Observer callback={setNumbers} />
    </div>
  );
}

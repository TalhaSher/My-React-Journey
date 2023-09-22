import { useState, useEffect } from 'react';
import Main from './components/Main/Main';

import './App.css';

function App() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount) : 0;
  });

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const clearCount = () => {
    setCount(0);
  };

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <>
      <Main count={count} add={incrementCount} clear={clearCount} />
    </>
  );
}

export default App;

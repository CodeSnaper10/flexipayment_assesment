import React from 'react';
import { Link } from 'react-router-dom';
import { useCount } from './CountContext';

const Page1 = () => {
  const { count, incrementCount, getBackgroundColor } = useCount();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: getBackgroundColor() }}>
      <h1>Page 1</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <br />
      <Link to="/page2">Go to Page 2</Link>
    </div>
  );
};

export default Page1;

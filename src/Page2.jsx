import React from 'react';
import { Link } from 'react-router-dom';
import { useCount } from './CountContext';

const Page2 = () => {
  const { count, getBackgroundColor } = useCount();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: getBackgroundColor() }}>
      <h1>Page 2</h1>
      <p>Count from Page 1: {count}</p>
      <Link to="/">Go to Page 1</Link>
    </div>
  );
};

export default Page2;

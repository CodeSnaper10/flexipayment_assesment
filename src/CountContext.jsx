import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const getBackgroundColor = () => {
    return count % 2 === 0 ? 'lightpink' : 'lightblue';
  };

  return (
    <CountContext.Provider value={{ count, incrementCount, getBackgroundColor }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);

import { useState } from 'react';
import { createContext } from 'react';

export const Context = createContext();

export function ContextProvider({ children }) {
  const [category, setCategory] = useState('all');

  return (
    <Context.Provider value={{ category, setCategory }}>
      {children}
    </Context.Provider>
  );
}

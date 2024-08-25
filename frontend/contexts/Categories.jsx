import { useState } from 'react';
import { createContext } from 'react';

export const CategoriesContext = createContext();

export function ContextProvider({ children }) {
  const [category, setCategory] = useState('all');

  return (
    <CategoriesContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
}

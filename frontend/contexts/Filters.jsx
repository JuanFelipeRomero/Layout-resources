import { useState } from 'react';
import { createContext } from 'react';

export const FiltersContext = createContext();

export function FiltersContextProvider({ children }) {
  const [filter, setFilter] = useState('all');

  return (
    <FiltersContext.Provider value={{ filter, setFilter }}>
      {children}
    </FiltersContext.Provider>
  );
}

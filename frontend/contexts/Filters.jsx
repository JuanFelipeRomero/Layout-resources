import { useState } from 'react';
import { createContext } from 'react';

export const FiltersContext = createContext();

export function FiltersContextProvider({ children }) {
  const [filter, setFilter] = useState(null);

  return (
    <FiltersContext.Provider value={{ filter, setFilter }}>
      {children}
    </FiltersContext.Provider>
  );
}

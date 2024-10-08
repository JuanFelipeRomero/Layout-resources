import { useState } from 'react';
import { createContext } from 'react';

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

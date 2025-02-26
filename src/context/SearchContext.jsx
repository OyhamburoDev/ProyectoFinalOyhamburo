// 1. Creación del contexto (CounterContext.jsx)
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const value = {
    isSearchOpen,
    setIsSearchOpen,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export { SearchContext };

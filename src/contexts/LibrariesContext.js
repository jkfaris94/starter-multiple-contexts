import { createContext, useState } from "react";

export const LibrariesContext = createContext({
  libraries: [],
  setLibraries: () => {},
});

export function LibrariesContextProvider({ initialData = [], children }) {
  const [libraries, setLibraries] = useState(initialData);
  return (
    <LibrariesContext.Provider value={{ libraries, setLibraries }}>
      {children}
    </LibrariesContext.Provider>
  );
}
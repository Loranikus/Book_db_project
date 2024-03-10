import { useState, createContext, useEffect } from "react";


export const DbUpdateContext = createContext(null);

export const DbUpdateContextProvider = ({ children }) => {
    const [dbUpdated, setDbUpdated] = useState(false);
  
    const updateDb = () => {
      setDbUpdated((prev) => !prev);
    };
    return (
      <DbUpdateContext.Provider value={{ updateDb }}>
        {children}
      </DbUpdateContext.Provider>
    );
  };
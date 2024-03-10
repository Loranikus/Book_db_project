import { useState, createContext, useEffect } from "react";

export const RowContext = createContext(null);

export const RowContextProvider = ({ children }) => {
    const [row, setRow] = useState([]);
    return (
      <>
        <RowContext.Provider value={{ row, setRow }}>
          {children}
        </RowContext.Provider>
      </>
    );
  };
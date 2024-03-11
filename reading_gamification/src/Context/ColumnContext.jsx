import { useState, createContext, useEffect } from "react";

export const ColumnContext = createContext(null);

export const ColumnContextProvider = ({ children }) => {
  const [column, setColumn] = useState([
    {
      key: "isbn",
      label: "ISBN",
    },
    {
      key: "author",
      label: "Autor",
    },
    {
      key: "book",
      label: "Kniha",
    },
    {
      key: "cover",
      label: "Obálka",
    }
  ]);
  return (
    <ColumnContext.Provider value={{ column, setColumn }}>
      {children}
    </ColumnContext.Provider>
  );
};

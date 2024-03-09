import { useState, createContext } from "react";

export const ColumnContext = createContext(null);
export const RowContext = createContext(null);

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
    },
  ]);
  return (
    <ColumnContext.Provider value={{ column, setColumn }}>
      {children}
    </ColumnContext.Provider>
  );
};

export const RowContextProvider = ({ children }) => {
  const [row, setRow] = useState([
    {
      key: "1",
      isbn: "vzorová data",
      author: "vzorová data",
      book: "vzorová data",
      cover: "vzorová data",
    },
    {
      key: "2",
      isbn: "druha data",
      author: "dalsi data",
      book: "jeste dalsi data",
      cover: "a posledni data",
    },
  ]);
  return (
    <>
      <RowContext.Provider value={{ row, setRow }}>
        {children}
      </RowContext.Provider>
    </>
  );
};

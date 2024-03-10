import { useState, createContext } from "react";
import { createClient } from "@supabase/supabase-js";

export const ColumnContext = createContext(null);
export const RowContext = createContext(null);
export const SupaContext = createContext(null);
export const DbUpdateContext = createContext(null);

const supaURL = "https://wdhsblcbpdlovrfqloqi.supabase.co";
const supaKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkaHNibGNicGRsb3ZyZnFsb3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNjAxNzQsImV4cCI6MjAyNTYzNjE3NH0.-yYvrqwuQJmDLW6qwN0lV5LZHdvC6H-iUBMKRs3mbKI";

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
  const [row, setRow] = useState([]);
  return (
    <>
      <RowContext.Provider value={{ row, setRow }}>
        {children}
      </RowContext.Provider>
    </>
  );
};

export const SupaContextProvider = ({ children }) => {
  const supabase = createClient(supaURL, supaKey);
  return (
    <SupaContext.Provider value={{ supabase }}>{children}</SupaContext.Provider>
  );
};

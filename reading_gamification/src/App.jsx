import { useState } from "react";
import "./App.css";
import SearchField from "./components/SearchField";
import BookList from "./components/BookList";
import { ColumnContextProvider, RowContextProvider } from "./Context";

const App = () => {
  return (
    <>
      <ColumnContextProvider>
        <RowContextProvider>
          <SearchField />
          <BookList />
        </RowContextProvider>
      </ColumnContextProvider>
    </>
  );
};

export default App;

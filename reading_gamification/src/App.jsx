import { useState } from "react";
import "./App.css";
import SearchField from "./components/SearchField";
import BookList from "./components/BookList";
import {
  ColumnContextProvider,
  RowContextProvider,
  SupaContextProvider,
  DbUpdateContextProvider,
} from "./Context";

const App = () => {
  return (
    <>
      <SupaContextProvider>
        <DbUpdateContextProvider>
          <ColumnContextProvider>
            <RowContextProvider>
              <SearchField />
              <BookList />
            </RowContextProvider>
          </ColumnContextProvider>
        </DbUpdateContextProvider>
      </SupaContextProvider>
    </>
  );
};

export default App;

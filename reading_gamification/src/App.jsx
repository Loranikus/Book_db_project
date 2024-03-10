import { useState } from "react";
import "./App.css";
import SearchField from "./components/SearchField";
import BookList from "./components/BookList";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { ColumnContextProvider } from "./Context/ColumnContext";
import { RowContextProvider } from "./Context/Rowcontext";
import { SupaContextProvider } from "./Context/SupaContext";
import { DbUpdateContextProvider } from "./Context/DbUpdateContext";
import { AuthContextProvider } from "./Context/AuthContext";

const App = () => {
  return (
    <>
      <SupaContextProvider>
        <AuthContextProvider>
          <DbUpdateContextProvider>
            <ColumnContextProvider>
              <RowContextProvider>
                <Registration />
                <Login />
                <SearchField />
                <BookList />
              </RowContextProvider>
            </ColumnContextProvider>
          </DbUpdateContextProvider>
        </AuthContextProvider>
      </SupaContextProvider>
    </>
  );
};

export default App;

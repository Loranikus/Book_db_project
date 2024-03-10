import React from "react";
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
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <SupaContextProvider>
        <AuthContextProvider>
          <DbUpdateContextProvider>
            <ColumnContextProvider>
              <RowContextProvider>
                <Navigation />
                <Routes>
                  <Route path="/" element={<BookList />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/search" element={<SearchField />} />
                </Routes>
              </RowContextProvider>
            </ColumnContextProvider>
          </DbUpdateContextProvider>
        </AuthContextProvider>
      </SupaContextProvider>
    </>
  );
};

export default App;

/*<Registration />
                <Login />
                <SearchField />
                <BookList />*/

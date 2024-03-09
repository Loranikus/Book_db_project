import { useState } from "react";
import "./App.css";
import SearchField from "./components/SearchField";
import BookTable from "./components/BookTable";

function App() {
  return (
    <>
      <SearchField />
      <BookTable />
    </>
  );
}

export default App;

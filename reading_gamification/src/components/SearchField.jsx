import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState, useContext } from "react";
import {
  ColumnContext,
  RowContext,
  SupaContext,
  DbUpdateContext,
} from "../Context";

const API_Key = "AIzaSyBa82XsjdW95ul9KvVnf5itbSTqmc4JGCg";

const SearchField = () => {
  const { row, setRow } = useContext(RowContext);
  const { column } = useContext(ColumnContext);
  const { supabase } = useContext(SupaContext);
  const { updateDb } = useContext(DbUpdateContext);
  const [searchValue, setSearchValue] = useState("");

  const addDbRow = async (info) => {
    console.log();
    const { error } = await supabase.from("bookList").insert({
      key: `${row.length + 1}`,
      isbn: `${info.industryIdentifiers[0].identifier}`,
      author: `${info.authors}`,
      book: `${info.title}`,
      cover: `${
        info.imageLinks ? info.imageLinks.thumbnail : "Obrázek není k dispozici"
      }`,
    });
    updateDb();
  };
 /* const handleAddRow = (info) => {
    const newRow = {
      key: `${row.length + 1}`,
      isbn: `${info.industryIdentifiers[0].identifier}`,
      author: `${info.authors}`,
      book: `${info.title}`,
      cover: `${
        info.imageLinks ? info.imageLinks.thumbnail : "Obrázek není k dispozici"
      }`,
    };
    setRow([...row, newRow]);
    addDbRow(newRow);
  };*/

  const handleSearch = async (e) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${searchValue}&key=${API_Key}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const dataInfo = data.items[0].volumeInfo;
        addDbRow(dataInfo);
      } else {
        console.error("Failed to fetch data", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
    setSearchValue("");
  };

  return (
    <div className="flex flex-col flex-wrap w-full items-center h-full">
      <Input
        type="text"
        label="Vyplň ISBN"
        labelPlacement="inside"
        placeholder="Vlož číslo"
        isClearable
        color="primary"
        className="max-w-xs mb-2"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />

      <Button onClick={handleSearch} className="max-w-xs">
        Najdi knihu!
      </Button>
    </div>
  );
};
export default SearchField;

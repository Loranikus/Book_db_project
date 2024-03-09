import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState, useContext } from "react";
import { ColumnContext, RowContext } from "../Context";

const API_Key = "AIzaSyBa82XsjdW95ul9KvVnf5itbSTqmc4JGCg";

const SearchField = () => {
  const { row, setRow } = useContext(RowContext);
  const { column } = useContext(ColumnContext);
  const [searchValue, setSearchValue] = useState("");

  const handleAddRow = () => {
    const newRow = {
      key: `${row.length} + 1`,
      isbn: "vzor",
      author: "vzor",
      book: "vzor",
      cover: "vzor",
    };
    setRow([...row, newRow]);
  };

  const handleSearch = async (e) => {
   
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${searchValue}&key=${API_Key}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
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

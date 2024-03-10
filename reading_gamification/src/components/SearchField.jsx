import { Input, Button, Tooltip } from "@nextui-org/react";
import { useState, useContext } from "react";
import { SupaContext } from "../Context/SupaContext";
import { RowContext } from "../Context/Rowcontext";
import { AuthContext } from "../Context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { DbUpdateContext } from "../Context/DbUpdateContext";

const API_Key = "AIzaSyBa82XsjdW95ul9KvVnf5itbSTqmc4JGCg";

const SearchField = () => {
  const { row, setRow } = useContext(RowContext);
  const { supabase } = useContext(SupaContext);
  const { updateDb } = useContext(DbUpdateContext);
  const { auth } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState("");

  const addDbRow = async (info) => {
    const newKey = uuidv4();
    const { error } = await supabase.from("bookList").insert({
      key: newKey,
      isbn: `${info.industryIdentifiers[0].identifier}`,
      author: `${info.authors}`,
      book: `${info.title}`,
      cover: `${
        info.imageLinks ? info.imageLinks.thumbnail : "Obrázek není k dispozici"
      }`,
    });
    updateDb();
  };

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
        placeholder={auth ?  "Vyplň hledané ISBN" : "Nejsi přihlášený"}
        isDisabled={!auth}
        isClearable
        color="primary"
        className="max-w-xs mb-2"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />

      <Button isDisabled={!auth} onClick={handleSearch} className="max-w-xs">
        Najdi knihu!
      </Button>
    </div>
  );
};
export default SearchField;

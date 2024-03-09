import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const SearchField = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col flex-wrap w-full items-center h-full">
      <Input
        type="text"
        label="Vyplň ISBN"
        labelPlacement="inside"
        placeholder="1234567890"
        isClearable
        color="primary"
        className="max-w-xs mb-2"
      />
      
      <Button onClick={handleSearch} className="max-w-xs">Najdi knihu!</Button>
    </div>
  );
};

export default SearchField;

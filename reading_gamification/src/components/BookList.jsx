import {
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
  TableBody,
  getKeyValue,
} from "@nextui-org/react";
import React from "react";

const rows = [
  {
    key: "1",
    isbn: "vzorová data",
    author: "vzorová data",
    book: "vzorová data",
    cover: "vzorová data",
  },
  {
    key:"2",
    isbn: "druha data",
    author: "dalsi data",
    book: "jeste dalsi data",
    cover: "a posledni data",
  }
];

const columns = [
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
];

const BookList = () => {
  return (
    <div className="mt-2 flex flex-wrap w-full justify-center">
      <Table className="max-w-4xl">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>} 
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookList;

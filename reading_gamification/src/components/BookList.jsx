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
import { useState, useContext } from "react";
import { ColumnContext, RowContext } from "../Context";

const BookList = () => {
  const { row } = useContext(RowContext);

  const { column } = useContext(ColumnContext);

  return (
    <div className="mt-2 flex flex-wrap w-full justify-center">
      <Table aria-label="List of inserted books" className="max-w-4xl">
        <TableHeader columns={column}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={row}
        emptyContent="Ještě nebyly přidány žádné knihy">
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {columnKey === "cover" ? (
                    <img
                      src={item[columnKey]}
                      alt="Book Cover"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  ) : (
                    item[columnKey]
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookList;

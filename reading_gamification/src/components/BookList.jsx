import {
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
  TableBody,
} from "@nextui-org/react";
import React from "react";
import { useState, useContext, useEffect } from "react";
import {DbUpdateContext} from "../Context/DbUpdateContext";
import {ColumnContext} from "../Context/ColumnContext";
import {RowContext} from "../Context/Rowcontext";
import { AuthContext } from "../Context/AuthContext";
import { SupaContext } from "../Context/SupaContext";


const BookList = () => {
  const { row, setRow } = useContext(RowContext);
  const { supabase } = useContext(SupaContext);
  const { updateDb } = useContext(DbUpdateContext);
  const { column } = useContext(ColumnContext);
  const { auth, user } = useContext(AuthContext);

  useEffect(() => {
    if (auth === true) {
      const loadData = async () => {
        try {
          const { data, error } = await supabase.from("bookList").select();
          if (error) {
            console.error("Error fetching data from Supabase:", error.message);
          } else {
            setRow(data);
          }
        } catch (error) {
          console.error("Error fetching data from Supabase:", error.message);
        }
      };
      loadData();
    }
  }, [auth, supabase, updateDb]);

  return (
    <div className="mt-2 flex flex-wrap w-full justify-center">
      <Table aria-label="List of inserted books" className="max-w-4xl">
        <TableHeader columns={column}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={row}
          emptyContent={auth ? "Ještě nebyly přidány žádné knihy" : "Nejdřív se přihlaš"}
        >
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

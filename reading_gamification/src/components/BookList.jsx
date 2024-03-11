import {
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
  TableBody,
  Image,
  Button,
} from "@nextui-org/react";
import React from "react";
import { useState, useContext, useEffect } from "react";
import { DbUpdateContext } from "../Context/DbUpdateContext";
import { ColumnContext } from "../Context/ColumnContext";
import { RowContext } from "../Context/Rowcontext";
import { AuthContext } from "../Context/AuthContext";
import { SupaContext } from "../Context/SupaContext";
import { Delete } from "../assets/icons/Delete";

const BookList = () => {
  const { row, setRow } = useContext(RowContext);
  const { supabase } = useContext(SupaContext);
  const { updateDb } = useContext(DbUpdateContext);
  const { column } = useContext(ColumnContext);
  const { auth, user } = useContext(AuthContext);
  const [del, setDel] = useState (false)

  useEffect(() => {
    if (auth === true) {
      const loadData = async () => {
        try {
          const { data, error } = await supabase.from("bookList").select();
          if (error) {
            console.error("Error fetching data from Supabase:", error.message);
          } else {
            setRow(data);
            setDel(false)
          }
        } catch (error) {
          console.error("Error fetching data from Supabase:", error.message);
        }
      };
      loadData();
    }
  }, [auth, supabase, updateDb, del]);

  const handleDelete = async (key) => {
    try {
      const { error } = await supabase.from("bookList").delete().eq("key", key);
    } catch (error) {
      console.error("Nepodařilo se smazat řádek");
    }
    setDel(true)
  };

  return (
    <div className="mt-2 flex flex-wrap w-full justify-center">
      <Table aria-label="List of inserted books" className="max-w-4xl">
        <TableHeader
          columns={[...column, { key: "options", label: "Možnosti" }]}
        >
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={row}
          emptyContent={
            auth ? "Ještě nebyly přidány žádné knihy" : "Nejdřív se přihlaš"
          }
        >
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {columnKey === "cover" ? (
                    <Image
                      src={item[columnKey]}
                      alt="Book Cover"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  ) : columnKey === "options" ? (
                    <Button
                      isIconOnly
                      color="none"
                      aria-label="delete"
                      disableRipple
                      onClick={() => handleDelete(item.key)}
                    >
                      <Delete />
                    </Button>
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

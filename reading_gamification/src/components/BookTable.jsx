import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const BookTable = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableColumn>ISBN</TableColumn>
          <TableColumn>Autor</TableColumn>
          <TableColumn>Kniha</TableColumn>
          <TableColumn>Obálka</TableColumn>
        </TableHeader>
      </Table>
    </>
  );
};

export default BookTable;

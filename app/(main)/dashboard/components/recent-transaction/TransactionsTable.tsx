import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns, Transaction } from "./columnsDef";

interface Props {
  data: Transaction[];
}

export default function TransactionsTable({ data }: Props) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="px-4 py-3 text-left text-sm font-medium text-secondary select-none"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row, index, rows) => {
          const isLast = index === rows.length - 1;

          return (
            <tr
              key={row.id}
              className={
                isLast ? "" : "border-b border-border dark:border-border-dark"
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 text-sm">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

import { ColumnDef } from "@tanstack/react-table";
import { LuTrash2 } from "react-icons/lu";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import Category from "./Category";

export type Transaction = {
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return <p className="text-nowrap">{row.original.date}</p>;
    },
  },

  {
    accessorKey: "description",
    header: () => (
      <p className="flex">
        Description
        <span className="text-white line-clamp-1">
          ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        </span>
      </p>
    ),
    cell: ({ row }) => (
      <div className="relative group">
        <p className="line-clamp-1">{row.original.description}</p>
        <p className="absolute hidden group-hover:block bg-surface-bg p-1 z-50 max-w-md">
          {row.original.description}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: () => <div className="text-center">Category</div>,
    cell: ({ row }) => {
      return <Category>{row.original.category}</Category>;
    },
  },

  {
    accessorKey: "amount",
    header: () => <div className="text-end">Amount</div>,
    cell: ({ row }) => {
      const amount = row.original.amount;
      const type = row.original.type;

      const isIncome = type === "income";

      return (
        <p
          className={`text-end text-nowrap ${
            isIncome ? "text-profit" : "text-danger"
          }`}
        >
          {isIncome ? "+" : "-"}${Math.abs(amount).toFixed(2)}
        </p>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) =>
      row.original.type === "income" ? (
        <IoIosTrendingUp className="~size-3/4 text-profit" />
      ) : (
        <IoIosTrendingDown className="~size-3/4 text-danger" />
      ),
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: () => (
      <div className="text-center">
        <button className="text-danger">
          <LuTrash2 className="~size-3/4" />
        </button>
      </div>
    ),
  },
];

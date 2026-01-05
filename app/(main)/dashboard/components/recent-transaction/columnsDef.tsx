import { ColumnDef } from "@tanstack/react-table";
import { LuTrash2 } from "react-icons/lu";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import Category from "@/app/common-components/Category";
import { useTransactionStore } from "@/app/store/useTransactionStore";
import { Transaction } from "@/app/types/transaction";

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
        <span className="text-white dark:text-dark-bg line-clamp-1">
          ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        </span>
      </p>
    ),
    cell: ({ row }) => (
      <div className="relative group">
        <p className="line-clamp-1">{row.original.description}</p>
        <p className="absolute bottom-1/2 translate-y-1/2 hidden group-hover:block bg-surface-bg dark:bg-dark-surface p-1 z-50 max-w-md">
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
            isIncome
              ? "text-profit dark:text-profit-dark "
              : "text-danger dark:text-danger-dark "
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
        <IoIosTrendingUp className="~size-3/4 text-profit dark:text-profit-dark " />
      ) : (
        <IoIosTrendingDown className="~size-3/4 text-danger dark:text-danger-dark" />
      ),
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      const removeTransaction = useTransactionStore(
        (s) => s.removeTransactions
      );

      return (
        <div className="text-center">
          <button
            onClick={() => removeTransaction([row.original.id])}
            className="text-danger dark:text-danger-dark"
          >
            <LuTrash2 className="~size-3/4" />
          </button>
        </div>
      );
    },
  },
];

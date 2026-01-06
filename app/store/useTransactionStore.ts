import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Transaction } from "../types/transaction";
import { Month } from "react-day-picker";
import {
  initialMonthList,
  recalculateMonthlyTotal,
  updateMonthlyTotal,
} from "./transactionStoreFunctions";

interface Totals {
  income: number;
  expense: number;
  netBalance: number;
}

type Month =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

export interface MonthlyTotals {
  id: number;
  month: Month;
  totals: Totals;
}

interface TransactionStore {
  transactions: Transaction[];
  totals: Totals;
  monthlyTotals: MonthlyTotals[];

  addTransaction: (transaction: Transaction) => void;
  removeTransactions: (ids: string[]) => void;
}

export const useTransactionStore = create<TransactionStore>()(
  persist(
    (set, get) => ({
      transactions: [],
      totals: { income: 0, expense: 0, netBalance: 0 },
      monthlyTotals: initialMonthList,

      addTransaction: (transaction) => {
        const { transactions, totals, monthlyTotals } = get();

        const updatedTransactions = [...transactions, transaction];

        const updatedTotal =
          transaction.type === "expense"
            ? {
                income: totals.income,
                expense: totals.expense + transaction.amount,
                netBalance: totals.netBalance - transaction.amount,
              }
            : {
                income: totals.income + transaction.amount,
                expense: totals.expense,
                netBalance: totals.netBalance + transaction.amount,
              };

        const updatedMonthlyTotal = updateMonthlyTotal(
          monthlyTotals,
          transaction.date,
          transaction.amount,
          transaction.type
        );

        set({
          transactions: updatedTransactions,
          totals: updatedTotal,
          monthlyTotals: updatedMonthlyTotal,
        });
      },

      removeTransactions: (ids) => {
        const { transactions, monthlyTotals } = get();

        const remaining = transactions.filter((t) => !ids.includes(t.id));

        const recalculatedTotal = remaining.reduce(
          (acc, t) => {
            if (t.type === "expense") {
              acc.expense += t.amount;
              acc.netBalance -= t.amount;
            } else {
              acc.income += t.amount;
              acc.netBalance += t.amount;
            }
            return acc;
          },
          { income: 0, expense: 0, netBalance: 0 }
        );

        const removedTra = transactions.filter((t) => ids.includes(t.id));

        const recalculatedMonthlyTotal = recalculateMonthlyTotal(
          removedTra,
          monthlyTotals
        );

        set({
          transactions: remaining,
          totals: recalculatedTotal,
          monthlyTotals: recalculatedMonthlyTotal,
        });
      },
    }),
    { name: "transactions-store" }
  )
);

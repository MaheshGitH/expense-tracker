import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Transaction } from "../types/transaction";

interface TotalCount {
  income: number;
  expense: number;
  netBalance: number;
}

interface TransactionStore {
  transactions: Transaction[];
  totalCount: TotalCount;

  addTransaction: (transaction: Transaction) => void;
  removeTransactions: (ids: string[]) => void;
}

export const useTransactionStore = create<TransactionStore>()(
  persist(
    (set, get) => ({
      transactions: [],
      totalCount: { income: 0, expense: 0, netBalance: 0 },

      addTransaction: (transaction) => {
        const { transactions, totalCount } = get();

        const updatedTransactions = [...transactions, transaction];

        const updatedTotal =
          transaction.type === "expense"
            ? {
                income: totalCount.income,
                expense: totalCount.expense + transaction.amount,
                netBalance: totalCount.netBalance - transaction.amount,
              }
            : {
                income: totalCount.income + transaction.amount,
                expense: totalCount.expense,
                netBalance: totalCount.netBalance + transaction.amount,
              };

        set({ transactions: updatedTransactions, totalCount: updatedTotal });
      },

      removeTransactions: (ids) => {
        const { transactions } = get();

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

        set({
          transactions: remaining,
          totalCount: recalculatedTotal,
        });
      },
    }),
    { name: "transactions-store" }
  )
);

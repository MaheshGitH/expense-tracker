import getMonthIndex from "../libs/getMonthIndex";
import { Transaction } from "../types/transaction";
import { MonthlyTotals } from "./useTransactionStore";

export const initialMonthList: MonthlyTotals[] = [
  {
    id: 0,
    month: "Jan",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 1,
    month: "Feb",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 2,
    month: "Mar",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 3,
    month: "Apr",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 4,
    month: "May",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 5,
    month: "Jun",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 6,
    month: "Jul",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 7,
    month: "Aug",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 8,
    month: "Sep",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 9,
    month: "Oct",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 10,
    month: "Nov",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
  {
    id: 11,
    month: "Dec",
    totals: {
      expense: 0,
      income: 0,
      netBalance: 0,
    },
  },
];

export function updateMonthlyTotal(
  existingMontlyTotal: MonthlyTotals[],
  date: string,
  amount: number,
  type: string
): MonthlyTotals[] {
  const monthIndex = getMonthIndex(date);

  if (type === "expense") {
    const updatedMonthlyTotal = existingMontlyTotal.map((monthlyTotal) => {
      if (monthlyTotal.id === monthIndex) {
        return {
          ...monthlyTotal,
          totals: {
            ...monthlyTotal.totals,
            expense: monthlyTotal.totals.expense + amount,
            netBalance: monthlyTotal.totals.netBalance - amount,
          },
        };
      }

      return monthlyTotal;
    });

    return updatedMonthlyTotal;
  } else {
    const updatedMonthlyTotal = existingMontlyTotal.map((monthlyTotal) => {
      if (monthlyTotal.id === monthIndex) {
        return {
          ...monthlyTotal,
          totals: {
            ...monthlyTotal.totals,
            income: monthlyTotal.totals.income + amount,
            netBalance: monthlyTotal.totals.netBalance + amount,
          },
        };
      }

      return monthlyTotal;
    });

    return updatedMonthlyTotal;
  }
}

export function recalculateMonthlyTotal(
  removedTransactions: Transaction[],
  monthlyTotals: MonthlyTotals[]
): MonthlyTotals[] {
  const updatedTotals = monthlyTotals.map((month) => ({
    ...month,
    totals: { ...month.totals },
  }));

  for (const transaction of removedTransactions) {
    const monthIndex = getMonthIndex(transaction.date);

    const month = updatedTotals.find((m) => m.id === monthIndex);
    if (!month) continue;

    if (transaction.type === "expense") {
      month.totals.expense -= transaction.amount;
      month.totals.netBalance += transaction.amount;
    }

    if (transaction.type === "income") {
      month.totals.income -= transaction.amount;
      month.totals.netBalance -= transaction.amount;
    }
  }

  return updatedTotals;
}

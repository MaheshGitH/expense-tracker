import { MonthlyTotals } from "../store/useTransactionStore";

export default function extractTrendData(monthlyTotal: MonthlyTotals[]) {
  const expense: (number | null)[] = monthlyTotal.map((total) =>
    total.totals.expense === 0 ? null : total.totals.expense
  );

  const income: (number | null)[] = monthlyTotal.map((total) =>
    total.totals.income === 0 ? null : total.totals.income
  );
  const netBalance: (number | null)[] = monthlyTotal.map((total) =>
    total.totals.netBalance === 0 ? null : total.totals.netBalance
  );

  const labels: string[] = monthlyTotal.map((month) => month.month);

  return { expense, income, netBalance, labels };
}

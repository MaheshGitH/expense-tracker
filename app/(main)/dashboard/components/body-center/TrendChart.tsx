"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useTheme from "@/app/hooks/useTheme";
import extractTrendData from "@/app/libs/extractTrendData";
import { useTransactionStore } from "@/app/store/useTransactionStore";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const TrendChart = () => {
  const theme = useTheme();
  const monthlyTotal = useTransactionStore((s) => s.monthlyTotals);
  const { labels, expense, income, netBalance } =
    extractTrendData(monthlyTotal);

  const data: ChartData<"line"> = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        data: income,
        borderColor: theme === "dark" ? "#16a34a" : "#059669",
        backgroundColor: theme === "dark" ? "#16a34a" : "#059669",
      },
      {
        label: "Expense",
        data: expense,
        borderColor: theme === "dark" ? "#db1f1f" : "#e64d4d",
        backgroundColor: theme === "dark" ? "#db1f1f" : "#e64d4d",
      },
      {
        label: "Net Balance",
        data: netBalance,
        borderColor: " #1a1ab3",
        backgroundColor: " #1a1ab3",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default TrendChart;

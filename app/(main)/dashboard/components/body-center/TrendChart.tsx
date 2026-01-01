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

  const data: ChartData<"line"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          5000, 5200, 4800, 6000, 6100, 7000, 7200, 6800, 6400, 6600, 7100,
          7500,
        ],
        borderColor: theme === "dark" ? "#16a34a" : "#059669",
        backgroundColor: theme === "dark" ? "#16a34a" : "#059669",
      },
      {
        label: "Expense",
        data: [
          3000, 3100, 2900, 3500, 3600, 4000, 4200, 4100, 3800, 3900, 4300,
          4500,
        ],
        borderColor: theme === "dark" ? "#db1f1f" : "#e64d4d",
        backgroundColor: theme === "dark" ? "#db1f1f" : "#e64d4d",
      },
      {
        label: "Net Balance",
        data: [
          2000, 2100, 1900, 2500, 2500, 3000, 3000, 2700, 2600, 2700, 2800,
          3000,
        ],
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

import React from "react";
import { LuTrash2 } from "react-icons/lu";
import Transaction from "./Transaction";

const transactions = [
  {
    amount: 3.12,
    date: "2025-10-24",
    description: "Coffee at Cafe Shop and Eat at Restaurant",
    tag: "Food",
    loss: true,
  },
  {
    amount: 45.5,
    date: "2025-10-23",
    description:
      "Monthly grocery shopping from local supermarket including vegetables, fruits, dairy products and household essentials",
    tag: "Groceries",
    loss: true,
  },
  {
    amount: 1200,
    date: "2025-10-22",
    description: "Salary credited for October",
    tag: "Income",
    loss: false,
  },
  {
    amount: 18.75,
    date: "2025-10-21",
    description: "Uber ride from office to home during peak hours",
    tag: "Travel",
    loss: true,
  },
  {
    amount: 250,
    date: "2025-10-20",
    description: "Dinner with friends at an Italian restaurant after work",
    tag: "Food",
    loss: true,
  },
  {
    amount: 7.99,
    date: "2025-10-19",
    description: "Netflix monthly subscription renewal",
    tag: "Entertainment",
    loss: true,
  },
  {
    amount: 320,
    date: "2025-10-18",
    description: "Freelance project payment received from client",
    tag: "Income",
    loss: false,
  },
  {
    amount: 2.5,
    date: "2025-10-17",
    description: "Tea and snacks from roadside stall",
    tag: "Food",
    loss: true,
  },
  {
    amount: 89.99,
    date: "2025-10-16",
    description: "Electricity and water utility bill payment for the month",
    tag: "Bills",
    loss: true,
  },
  {
    amount: 15,
    date: "2025-10-15",
    description: "Book purchase: Atomic Habits",
    tag: "Education",
    loss: true,
  },
];

const RecentTransactions = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between mb-8">
        <p className="font-montserrat font-semibold text-base">
          Recent Transactions
        </p>
        <button className="flex items-center gap-1.5 py-1.5 px-3 bg-danger rounded-md text-white">
          Delete <LuTrash2 />
        </button>
      </div>
      {transactions.map((transaction, index) => (
        <Transaction
          key={index}
          amount={transaction.amount}
          date={transaction.date}
          description={transaction.description}
          tag={transaction.tag}
          loss={transaction.loss}
        />
      ))}
    </div>
  );
};

export default RecentTransactions;

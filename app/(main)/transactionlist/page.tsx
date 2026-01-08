import TotalSection from "@/app/common-components/total-count/TotalSection";
import TransactionList from "./components/TransactionList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transaction List",
};

const page = () => {
  return (
    <div>
      <p className="~text-2xl/3xl font-semibold mb-8">Transactions List</p>
      <div className="flex flex-col gap-8">
        <TotalSection hideLastMonthPercent />
        <div className="flex flex-col gap-4">
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default page;

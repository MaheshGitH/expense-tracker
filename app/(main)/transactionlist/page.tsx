import TotalSection from "@/app/common-components/total-count/TotalSection";
import TransactionList from "./components/TransactionList";
import Search from "./components/Search";
import Filter from "./components/Filter";

const page = () => {
  return (
    <div>
      <p className="~text-2xl/3xl font-semibold mb-8">Transactions List</p>
      <div className="flex flex-col gap-8">
        <TotalSection hideLastMonthPercent />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <Search />
            <Filter />
          </div>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default page;

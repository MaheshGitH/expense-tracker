import FinancialSummary from "./components/FinancialSummary";
import Header from "./components/Header";
import TransactionDetail from "./components/TransactionDetail";

const page = () => {
  return (
    <>
      <div className="mb-4">
        <Header />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="flex flex-col flex-grow gap-4">
          <TransactionDetail />
        </div>
        <FinancialSummary />
      </div>
    </>
  );
};

export default page;

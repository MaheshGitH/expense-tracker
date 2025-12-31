import TransactionForm from "@/app/common-components/transaction-form/TransactionForm";

const TransactionDetail = () => {
  return (
    <div className="flex flex-col gap-8 md:border md:p-6 border-border rounded-md">
      <p className="font-montserrat font-semibold ~text-base/3xl">
        Transaction Details
      </p>
      <TransactionForm isClearable />
    </div>
  );
};

export default TransactionDetail;

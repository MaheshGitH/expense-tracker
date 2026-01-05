import { useTransactionStore } from "@/app/store/useTransactionStore";

interface Props {
  id: string;
  onClick: () => void;
}

const Option = ({ id, onClick }: Props) => {
  const removeTransaction = useTransactionStore((s) => s.removeTransactions);
  return (
    <div className="flex flex-col border border-border dark:border-border-dark rounded-md">
      <button disabled className="text-start px-4 py-2 rounded-t-md opacity-50">
        Edit
      </button>
      <button
        onClick={() => {
          removeTransaction([id]);
          onClick();
        }}
        className="text-danger dark:text-danger-dark px-4 py-2 rounded-b-md"
      >
        Delete
      </button>
    </div>
  );
};

export default Option;

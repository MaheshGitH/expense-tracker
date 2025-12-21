import { FaArrowUp } from "react-icons/fa";

interface Props {
  heading: string;
  arrow: "up" | "down" | "none";
  amount: number;
  lastMonthPercent: number;
  type: "profit" | "expense" | "balance";
}

const TotalCount = ({
  heading,
  arrow,
  amount,
  lastMonthPercent,
  type,
}: Props) => {
  return (
    <div className="border border-border text-secondary px-2 py-4 rounded-md">
      <div className="flex justify-between mb-2">
        <p>{heading}</p>
        <FaArrowUp
          className={` ${
            arrow === "down"
              ? " rotate-180 "
              : arrow === "up"
              ? "rotate-0"
              : " hidden "
          }   ${
            type === "profit"
              ? " text-profit "
              : type === "expense"
              ? "text-danger"
              : " text-primary "
          }`}
        />
      </div>
      <div>
        <span
          className={`font-montserrat font-semibold ~text-xl/2xl ${
            type === "profit"
              ? " text-profit "
              : type === "expense"
              ? "text-danger"
              : " text-primary "
          }`}
        >
          ${Number(amount).toFixed(2)}
        </span>
        <p className="font-lato ~text-[0.625rem]/xs">
          {lastMonthPercent}% from last month
        </p>
      </div>
    </div>
  );
};

export default TotalCount;

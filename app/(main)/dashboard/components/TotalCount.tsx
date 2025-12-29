import { FaArrowUp } from "react-icons/fa";
import { FaScaleUnbalanced } from "react-icons/fa6";

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
    <div className="border border-border text-secondary px-2 py-4 md:p-8 lg:p-12 rounded-md">
      <div className="flex justify-between mb-2">
        <p>{heading}</p>
        {type === "balance" ? (
          <FaScaleUnbalanced className="text-primary" />
        ) : (
          <FaArrowUp
            className={` ${
              arrow === "down"
                ? " rotate-180 md:rotate-[135deg] "
                : arrow === "up"
                ? "rotate-0 md:rotate-45"
                : " hidden "
            }   ${
              type === "profit"
                ? " text-profit "
                : type === "expense"
                ? "text-danger"
                : " "
            }`}
          />
        )}
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

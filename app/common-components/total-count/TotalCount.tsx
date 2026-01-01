import { FaArrowUp } from "react-icons/fa";
import { FaScaleUnbalanced } from "react-icons/fa6";

interface Props {
  heading: string;
  arrow: "up" | "down" | "none";
  amount: number;
  lastMonthPercent: number;
  type: "profit" | "expense" | "balance";
  hideLastMonthPercent?: boolean;
}

const TotalCount = ({
  heading,
  arrow,
  amount,
  lastMonthPercent,
  type,
  hideLastMonthPercent,
}: Props) => {
  return (
    <div className="border border-border dark:border-border-dark text-secondary px-2 py-4 md:p-8 lg:p-12 rounded-md">
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
                ? " text-profit dark:text-profit-dark"
                : type === "expense"
                ? "text-danger dark:text-danger-dark"
                : " "
            }`}
          />
        )}
      </div>
      <div>
        <span
          className={`font-montserrat font-semibold ~text-xl/2xl ${
            type === "profit"
              ? " text-profit dark:text-profit-dark"
              : type === "expense"
              ? "text-danger dark:text-danger-dark"
              : " text-primary"
          }`}
        >
          ${Number(amount).toFixed(2)}
        </span>
        {hideLastMonthPercent ? null : (
          <p className="font-lato ~text-[0.625rem]/xs">
            {lastMonthPercent}% from last month
          </p>
        )}
      </div>
    </div>
  );
};

export default TotalCount;

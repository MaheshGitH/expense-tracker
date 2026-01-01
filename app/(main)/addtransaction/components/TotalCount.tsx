interface Props {
  title: string;
  amount: number;
  profit?: boolean;
  loss?: boolean;
}

const TotalCount = ({ title, amount, profit, loss }: Props) => {
  return (
    <div
      className={`flex justify-between py-3 border-b border-border dark:border-border-dark ${
        title === "Net Income" && " border-none "
      }`}
    >
      <p className="text-secondary">{title}:</p>
      <span
        className={`font-semibold ${
          profit && " text-profit dark:text-profit-dark"
        } ${loss && "text-danger dark:text-danger-dark"}`}
      >
        ${Number(amount).toFixed(2)}
      </span>
    </div>
  );
};

export default TotalCount;

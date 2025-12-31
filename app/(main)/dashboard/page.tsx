import BodyCenter from "./components/body-center/BodyCenter";
import BodyTop from "./components/BodyTop";
import RecentTransactions from "./components/recent-transaction/RecentTransactions";

const page = () => {
  return (
    <div className="flex flex-col gap-12 mt-4 mb-12">
      <BodyTop />
      <BodyCenter />
      <RecentTransactions />
    </div>
  );
};

export default page;

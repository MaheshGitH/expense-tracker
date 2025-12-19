import BodyCenter from "./components/body-center/BodyCenter";
import BodyTop from "./components/BodyTop";
import RecentTransactions from "./components/RecentTransactions";

const page = () => {
  return (
    <div className="flex flex-col gap-12 mt-4 mx-2">
      <BodyTop />
      <BodyCenter />
      <RecentTransactions />
    </div>
  );
};

export default page;

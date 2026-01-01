import BodyCenter from "./components/body-center/BodyCenter";
import TotalSection from "@/app/common-components/total-count/TotalSection";
import RecentTransactions from "./components/recent-transaction/RecentTransactions";

const page = () => {
  return (
    <div className="flex flex-col gap-12 mt-4 mb-12">
      <TotalSection />
      <BodyCenter />
      <RecentTransactions />
    </div>
  );
};

export default page;

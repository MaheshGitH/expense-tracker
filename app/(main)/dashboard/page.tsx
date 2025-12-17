import TopBar from "../common-components/topbar/TopBar";
import BodyCenter from "./components/body-center/BodyCenter";
import BodyTop from "./components/BodyTop";

const page = () => {
  return (
    <div className="m-2">
      {/* <TopBar /> */}
      <div className="flex flex-col gap-12">
        {/* <BodyTop /> */}
        <BodyCenter />
      </div>
    </div>
  );
};

export default page;

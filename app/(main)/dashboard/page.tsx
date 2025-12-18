import BodyCenter from "./components/body-center/BodyCenter";
import BodyTop from "./components/BodyTop";

const page = () => {
  return (
    <div className="flex flex-col gap-12 mt-4 mx-2">
      {/* <BodyTop /> */}
      <BodyCenter />
    </div>
  );
};

export default page;

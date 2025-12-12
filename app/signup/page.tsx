import Form from "./components/Form";
import OR from "./components/OR";
import RedirectSignIn from "./components/RedirectSignIn";
import SocialLogin from "./components/SocialLogin";
import TextArea from "./components/TextArea";

const page = () => {
  return (
    <div className="flex flex-col gap-8 mx-4 my-10 font-lato text-xs">
      <TextArea />
      <SocialLogin />
      <OR />
      <Form />
      <RedirectSignIn />
    </div>
  );
};

export default page;

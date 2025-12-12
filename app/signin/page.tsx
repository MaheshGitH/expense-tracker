import RedirectAuth from "../commonComponents/sign/RedirectAuth";
import TextArea from "../commonComponents/sign/TextArea";
import Form from "./components/Form";
import OR from "./components/OR";
import SocialLogin from "./components/SocialLogin";

const page = () => {
  return (
    <div className="flex flex-col gap-8 mx-4 my-10">
      <TextArea
        boldtext="Login to your account"
        text="Enter your credentials to access your financial dashboard."
      />
      <Form />
      <OR />
      <SocialLogin />
      <RedirectAuth
        href="/signup"
        text="Don’t have an account?"
        boldText="Sign up"
      />
    </div>
  );
};

export default page;

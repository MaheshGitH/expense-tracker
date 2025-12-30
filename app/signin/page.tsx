import RedirectAuth from "../common-components/sign/RedirectAuth";
import TextArea from "../common-components/sign/TextArea";
import Form from "./components/Form";
import OR from "./components/OR";
import SocialLogin from "./components/SocialLogin";

const page = () => {
  return (
    <div className="md:flex justify-center items-center h-screen w-screen px-4 py-10">
      <div className="flex flex-col gap-8 md:max-w-md md:border border-border rounded-md md:p-12">
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
    </div>
  );
};

export default page;

import RedirectAuth from "../common-components/sign/RedirectAuth";
import TextArea from "../common-components/sign/TextArea";
import Form from "./components/Form";
import OR from "./components/OR";
import SocialLogin from "./components/SocialLogin";

const page = () => {
  return (
    <div className="flex flex-col gap-8 mx-4 my-10">
      <TextArea
        boldtext="Create your account"
        text="Start tracking your expenses and managing your finances today."
        center
      />
      <SocialLogin />
      <OR />
      <Form />
      <RedirectAuth
        href="signin"
        text="Already have an account?"
        boldText="Sign In"
      />
    </div>
  );
};

export default page;

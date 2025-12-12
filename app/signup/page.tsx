import TextArea from "../commonComponents/sign/TextArea";
import Form from "./components/Form";
import OR from "./components/OR";
import RedirectSignIn from "./components/RedirectSignIn";
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
      <RedirectSignIn />
    </div>
  );
};

export default page;

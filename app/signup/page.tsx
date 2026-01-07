import { redirect } from "next/navigation";
import RedirectAuth from "../common-components/sign/RedirectAuth";
import TextArea from "../common-components/sign/TextArea";
import Form from "./components/Form";
import OR from "./components/OR";
import SocialLogin from "./components/SocialLogin";

const page = () => {
  redirect("/dashboard");
  return (
    <div className="md:flex justify-center items-center h-screen w-screen px-4 py-10">
      <div className="flex flex-col gap-8 md:max-w-md md:border border-border rounded-md md:p-12">
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
    </div>
  );
};

export default page;

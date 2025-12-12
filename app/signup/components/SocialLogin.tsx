import Social from "@/app/commonComponents/sign/Social";
import GitHub from "@/app/icons/GitHub";
import Google from "@/app/icons/Google";

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-2">
      <Social icon={<Google />} text="Signin with google" />
      <Social icon={<GitHub />} text="Signin with github" />
    </div>
  );
};

export default SocialLogin;

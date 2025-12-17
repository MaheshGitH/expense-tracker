import Social from "@/app/common-components/sign/Social";
import GitHub from "@/app/icons/GitHub";
import Google from "@/app/icons/Google";

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-2">
      <Social icon={<Google />} text="Signin with google" center />
      <Social icon={<GitHub />} text="Signin with github" center />
    </div>
  );
};

export default SocialLogin;

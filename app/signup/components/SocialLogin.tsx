import GitHub from "@/app/icons/GitHub";
import Google from "@/app/icons/Google";

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex item-center gap-1.5 px-4 py-2 border border-border rounded-md">
        <Google />
        <span className="font-lato text-xs">Sigup with google</span>
      </div>
      <div className="flex item-center gap-1.5 px-4 py-2 border border-border rounded-md">
        <GitHub />
        <span className="font-lato text-xs">Sigup with github</span>
      </div>
    </div>
  );
};

export default SocialLogin;

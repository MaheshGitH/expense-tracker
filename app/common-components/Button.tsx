import toggleTheme from "@/app/libs/toggleTheme";

interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  return (
    <button className="w-full py-3 rounded-md bg-primary text-white">
      {children}
    </button>
  );
};

export default Button;

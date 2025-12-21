import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  text: string;
  center?: boolean;
}

const Social = ({ icon, text, center }: Props) => {
  return (
    <div
      className={`flex gap-1.5 px-4 py-2 border border-border rounded-md ${
        center ? "justify-center" : "  "
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Social;

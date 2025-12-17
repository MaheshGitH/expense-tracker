import AppLogo from "@/app/AppLogo";

interface Props {
  center?: boolean;
  boldtext: string;
  text: string;
}

const TextArea = ({ center, boldtext, text }: Props) => {
  return (
    <div className={`flex flex-col gap-4 ${center ? "items-center" : ""}`}>
      <AppLogo />
      <div>
        <p
          className={`font-montserrat font-semibold text-base ${
            center ? "text-center" : ""
          }`}
        >
          {boldtext}
        </p>

        <p
          className={`text-secondary text-xs mt-2 ${
            center ? "text-center" : ""
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default TextArea;

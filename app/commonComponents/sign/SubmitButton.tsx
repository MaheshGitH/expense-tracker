interface Props {
  children: string;
}

const SubmitButton = ({ children }: Props) => {
  return (
    <button className="w-full mt-2 py-3 rounded-md bg-primary text-white">
      {children}
    </button>
  );
};

export default SubmitButton;

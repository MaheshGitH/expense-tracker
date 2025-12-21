interface Props {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

const FormInput = ({ label, id, type, placeholder }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <input
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-border rounded-md mt-2 outline-none"
        id={id}
        type={type}
      />
    </div>
  );
};

export default FormInput;

import FormInput from "@/app/common-components/sign/FormInput";
import SubmitButton from "@/app/common-components/sign/SubmitButton";

const Form = () => {
  return (
    <form className="flex flex-col gap-4" action="">
      <FormInput
        id="email"
        label="Email"
        placeholder="example@mail.com"
        type="email"
      />
      <FormInput
        id="password"
        label="Password"
        placeholder=""
        type="password"
      />
      <button className="text-primary self-end mt-2">Forgot password?</button>
      <SubmitButton>Log In</SubmitButton>
    </form>
  );
};

export default Form;

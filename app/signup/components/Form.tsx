import FormInput from "@/app/commonComponents/sign/FormInput";
import SubmitButton from "@/app/commonComponents/sign/SubmitButton";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <FormInput label="Name" id="name" placeholder="Choco late" type="text" />
      <FormInput
        label="Email"
        id="email"
        placeholder="example@mail.com"
        type="email"
      />
      <FormInput
        label="Password"
        id="password"
        placeholder=""
        type="password"
      />
      <FormInput
        label="Confirm password"
        id="confirmpassword"
        placeholder=""
        type="password"
      />
      <SubmitButton>Sign Up</SubmitButton>
    </form>
  );
};

export default Form;

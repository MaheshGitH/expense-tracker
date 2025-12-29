import FormInput from "@/app/common-components/sign/FormInput";
import Button from "@/app/common-components/Button";

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
      <Button>Log In</Button>
    </form>
  );
};

export default Form;

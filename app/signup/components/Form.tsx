import Input from "./Input";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input label="Name" id="name" placeholder="Choco late" type="text" />
      <Input
        label="Email"
        id="email"
        placeholder="example@mail.com"
        type="email"
      />
      <Input label="Password" id="password" placeholder="" type="password" />
      <Input
        label="Confirm password"
        id="confirmpassword"
        placeholder=""
        type="password"
      />
      <button className="w-full mt-2 py-3 rounded-md bg-primary text-white">
        Sign Up
      </button>
    </form>
  );
};

export default Form;

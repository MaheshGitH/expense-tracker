interface Props {
  children: string;
}

const Category = ({ children }: Props) => {
  return (
    <p className="w-fit lg:mx-auto text-center mt-0.5 py-1.5 px-3 rounded-full text-primary bg-primary-bg">
      {children}
    </p>
  );
};

export default Category;

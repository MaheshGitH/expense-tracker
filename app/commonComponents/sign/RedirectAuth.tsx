interface Props {
  text: string;
  boldText: string;
  href: string;
}

const RedirectAuth = ({ text, boldText, href }: Props) => {
  return (
    <p className="text-center mt-2">
      {text}
      <a href={href} className="ml-2 text-primary font-semibold">
        {boldText}
      </a>
    </p>
  );
};

export default RedirectAuth;

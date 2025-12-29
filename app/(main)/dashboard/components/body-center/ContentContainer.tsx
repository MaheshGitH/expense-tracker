import { ReactNode } from "react";

interface Props {
  heading: string;
  subheading?: string;
  children: ReactNode;
}

const ContentContainer = ({ children, heading, subheading }: Props) => {
  return (
    <div className="md:border border-border md:p-8 lg:p-12 rounded-md">
      <p className="font-montserrat font-semibold ~text-base/xl mb-1">
        {heading}
      </p>
      <p className="text-secondary mb-8">{subheading}</p>

      {children}
    </div>
  );
};

export default ContentContainer;

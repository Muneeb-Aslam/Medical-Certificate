import React, { ReactNode } from "react";

interface FormDivProps {
  children?: ReactNode;
}

const FormDiv: React.FC<FormDivProps> = ({ children }) => {
  return (
    <div className="pl-8 flex flex-col gap-2 justify-start items-start">
      {children}
    </div>
  );
};

export default FormDiv;

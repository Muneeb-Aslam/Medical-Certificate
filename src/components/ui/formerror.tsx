import * as React from "react";
import { FieldError, FieldErrorsImpl } from "react-hook-form";

interface FormErrorProps {
  error?: FieldError | FieldErrorsImpl | undefined;
}

const FormError: React.FC<FormErrorProps> = ({ error }) => {
  if (!error) return null;

  return (
    <p className="text-red-600 text-xs font-semibold">
      {error.message?.toString()}
    </p>
  );
};

export { FormError };

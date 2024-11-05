import * as React from "react";
import { cn } from "../../utils/helper";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  "aria-required"?: boolean;
}

const FormLabel = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    { className, children, "aria-required": isRequired = false, ...props },
    ref
  ) => (
    <label
      ref={ref}
      className={cn("text-green text-lg font-semibold flex justify-start items-start gap-1", className)}
      {...props}
    >
      {children}
      {isRequired && <span className="text-red-600">*</span>}
    </label>
  )
);

FormLabel.displayName = "Label";

export { FormLabel };

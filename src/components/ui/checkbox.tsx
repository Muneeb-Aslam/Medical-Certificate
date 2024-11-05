/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

interface props {
  setChecked: (e: any) => void;
  checked: boolean;
}

const CheckBox: React.FC<props> = ({ setChecked, checked, ...props }) => {
  return (
    <div className="card flex justify-content-center">
      <Checkbox
        onChange={(e: CheckboxChangeEvent) => setChecked(e.checked)}
        checked={checked}
        {...props}
      ></Checkbox>
    </div>
  );
};

export default CheckBox;

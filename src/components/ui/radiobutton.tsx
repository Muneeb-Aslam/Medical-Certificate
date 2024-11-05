/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

interface props {
  selectedItem?: string;
  setSelectedItem: (e: any) => void;
  options: any;
}
const RadioButtons: React.FC<props> = ({
  // selectedItem,
  setSelectedItem,
  options,
}) => {
  return (
    <div className="card flex justify-content-center">
      <div className="flex flex-column gap-3">
        {options.map((itm: any) => {
          return (
            <div key={itm.key} className="flex align-items-center">
              <RadioButton
                inputId={itm.key}
                name="category"
                value={itm}
                onChange={(e: RadioButtonChangeEvent) =>
                  setSelectedItem(e.value)
                }
              />
              <label htmlFor={itm.key} className="ml-2">
                {itm.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButtons;

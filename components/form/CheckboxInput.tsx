"use client";

import { Checkbox } from "@/components/ui/checkbox";

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

const CheckboxInput = ({
  name,
  label,
  defaultChecked = false,
}: CheckboxInputProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox name={name} defaultChecked={defaultChecked} id={name} />
      <label
        htmlFor={name}
        className="text-sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;

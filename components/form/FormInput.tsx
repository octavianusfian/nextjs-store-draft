import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (value: string) => void;
};

const FormInput = ({
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  required = true,
}: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
        value={value}
        // defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;

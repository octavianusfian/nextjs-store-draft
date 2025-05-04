import { Label } from "../ui/label";
import { Input } from "../ui/input";

const name = "price";
type FormInputNumberProps = {
  // defaultValue?: number;
  label?: string;
  required?: boolean;
  value?: number;
  onChange?: (value: string) => void;
};

const PriceInput = ({
  label,
  value,
  onChange,
  required = true,
}: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        {label} Price ($)
      </Label>
      <Input
        name={name}
        // defaultValue={defaultValue || 100}
        type="number"
        min={0}
        value={value || 100}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default PriceInput;

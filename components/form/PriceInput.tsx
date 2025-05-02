import { Label } from "../ui/label";
import { Input } from "../ui/input";

const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        Price ($)
      </Label>
      <Input
        name={name}
        defaultValue={defaultValue || 100}
        type="number"
        min={0}
        required
      />
    </div>
  );
};

export default PriceInput;

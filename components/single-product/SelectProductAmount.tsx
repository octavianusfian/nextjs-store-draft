import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export enum Mode {
  SingleProduct = "singleProduct",
  CartItem = "cartItem",
}

type SelectProductAmountProps = {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: (value: number) => void;
};

type SelectCartItemAmountProps = {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => Promise<void>;
  isLoading: boolean;
};

const SelectProductAmount = (
  props: SelectCartItemAmountProps | SelectProductAmountProps
) => {
  const { mode, amount, setAmount } = props;

  const cartItem = mode === Mode.CartItem;

  return (
    <div className="flex gap-2 items-center md:flex-col">
      <h4 className="mb-2">Amount : </h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(+value)}
        disabled={cartItem ? props.isLoading : false}
      >
        <SelectTrigger>
          <SelectValue placeholder={amount} />
        </SelectTrigger>
        <SelectContent>
          {Array.from(
            { length: cartItem ? amount + 10 : 10 },
            (_, index) => {
              const selectValue = (index + 1).toString();

              return (
                <SelectItem key={selectValue} value={selectValue}>
                  {selectValue}
                </SelectItem>
              );
            }
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectProductAmount;

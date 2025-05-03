"use client";
import { useState } from "react";
import SelectProductAmount from "../single-product/SelectProductAmount";
import { Mode } from "../single-product/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import { toast } from "sonner";

const ThirdColumn = ({ quantity, id }: { quantity: number; id: string }) => {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast("Info", {
      description: (
        <span className="text-black capitalize">Calculating...</span>
      ),
    });
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });

    setAmount(value);

    toast("Success", {
      description: (
        <span className="text-green-500 capitalize">{result.message}</span>
      ),
    });

    setIsLoading(false);
  };
  return (
    <div className="md:ml-8 flex md:flex-col gap-4 items-center">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction} >
        <input type="hidden" name="id" value={id} />
        <SubmitButton text="remove" className="mt-0 md:mt-4" size="sm" />
      </FormContainer>
    </div>
  );
};

export default ThirdColumn;

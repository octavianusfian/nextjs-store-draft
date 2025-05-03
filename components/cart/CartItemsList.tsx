"use client";
import { Card } from "@/components/ui/card";
import { FirstColumn, SecondColumn, ForthColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";
import { CartItemWithProduct } from "@/utils/types";

const CartItemsList = ({ cartItems }: { cartItems: CartItemWithProduct[] }) => {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { name, image, price, id: productId, company } = cartItem.product;

        return (
          <Card
            key={id}
            className="flex items-center flex-col gap-y-4 md:flex-row md:items-start flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn name={name} image={image} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn id={id} quantity={amount} />
            <ForthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
};

export default CartItemsList;

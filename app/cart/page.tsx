import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/");

  const previousCart = await fetchOrCreateCart({ userId });
  const { updatedCart, cartItems } = await updateCart(previousCart);

  if (cartItems.length === 0)
    return (
      <>
        <SectionTitle text="Empty Cart" />
        <Card className="mt-8 flex items-center justify-center py-16">
          <Button
            variant={"default"}
            size={"lg"}
            className="cursor-pointer text-xl"
            asChild
          >
            <Link href={"/products"}>Go Shopping!</Link>
          </Button>
        </Card>
      </>
    );
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="grid mt-8 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4">
          <CartTotals cart={updatedCart} />
        </div>
      </div>
    </>
  );
};

export default CartPage;

import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/");

  const previousCart = await fetchOrCreateCart({ userId });
  const { updatedCart, cartItems } = await updateCart(previousCart);

  if (cartItems.length === 0) return <SectionTitle text="Empty Cart" />;
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

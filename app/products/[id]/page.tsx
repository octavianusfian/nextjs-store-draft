import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import ProductReviews from "@/components/reviews/ProductReviews";
import SubmitReview from "@/components/reviews/SubmitReview";
import { auth } from "@clerk/nextjs/server";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { name, price, description, image, company } = await fetchSingleProduct(
    id
  );

  const { userId } = await auth();

  const reviewDoesNotExist = userId && !(await findExistingReview(userId, id));

  const dollarsAmount = formatCurrency(price);
  return (
    <section> 
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGES */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full rounded object-cover"
          />
        </div>

        {/* PRODUCT INFO */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="text-3xl capitalize font-bold">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={id} />
              <ShareButton productId={id} name={name} />
            </div>
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="text-md mt-3 bg-muted p-2 inline-block rounded">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
      <ProductReviews productId={id} /> 
      {reviewDoesNotExist && <SubmitReview productId={id} />}
    </section>
  );
};

export default SingleProductPage;

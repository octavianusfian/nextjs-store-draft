import { fetchProductReviews } from "@/utils/actions";
import React from "react";
import ReviewCard from "./ReviewCard";

const ProductReviews = async ({ productId }: { productId: string }) => {
  const reviews = await fetchProductReviews(productId);
  return (
    <div className="mt-16">
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {reviews.map((review) => {
          const { comment, rating, authorImageUrl, authorName } = review;

          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };

          return <ReviewCard reviewInfo={reviewInfo} key={review.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductReviews;

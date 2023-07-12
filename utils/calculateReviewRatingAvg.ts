import { Review } from "@prisma/client";

export const calculateReviewRatingAvg = (reviews: Review[] = []) => {
  if (!reviews.length) {
    return 0;
  }

  return (
    reviews.reduce((total, review) => {
      return total + review.rating;
    }, 0) / reviews.length
  );
};

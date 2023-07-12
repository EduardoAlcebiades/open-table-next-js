import ReviewCard from "./ReviewCard";

import { Restaurant } from "../page";

type Props = {
  restaurant: Restaurant;
};

export default function ReviewsSection({ restaurant }: Props) {
  return (
    <section>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What {restaurant.reviews.length}{" "}
        {restaurant.reviews.length === 1 ? "person is" : "people are"} saying
      </h1>

      {restaurant.reviews.length ? (
        restaurant.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))
      ) : (
        <p>There are no reviews for this restaurant yet!</p>
      )}
    </section>
  );
}

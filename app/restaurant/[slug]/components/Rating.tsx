import { Review } from "@prisma/client";
import { calculateReviewRatingAvg } from "../../../../utils/calculateReviewRatingAvg";
import Stars from "../../../components/Stars";

type Props = {
  reviews: Review[];
};

export default function Rating({ reviews }: Props) {
  const renderRatingAvg = () => {
    const rating = calculateReviewRatingAvg(reviews);

    return rating.toFixed(1);
  };

  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">{renderRatingAvg()}</p>
      </div>

      <div>
        <p className="text-reg ml-4">
          {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
        </p>
      </div>
    </div>
  );
}

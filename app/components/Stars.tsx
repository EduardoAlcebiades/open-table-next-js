import { Review } from "@prisma/client";
import Image, { StaticImageData } from "next/image";
import { calculateReviewRatingAvg } from "../../utils/calculateReviewRatingAvg";

import emptyStar from "../../public/icons/empty-star.png";
import fullStar from "../../public/icons/full-star.png";
import halfStar from "../../public/icons/half-star.png";

type Props =
  | {
      reviews?: Review[];
      rating: number;
    }
  | {
      reviews: Review[];
      rating?: number;
    };

export default function Stars({ rating, reviews }: Props) {
  const renderStars = () => {
    const rate = rating ?? calculateReviewRatingAvg(reviews);
    const sequence: Array<{ src: StaticImageData; alt: string }> = [];
    const integer = Math.floor(rate);
    const decimal = rate - integer;

    for (let i = 1; i <= 5; i++) {
      if (i <= integer) {
        sequence.push({ src: fullStar, alt: "full star" });
      } else if (i - 1 === integer && decimal > 0) {
        if (decimal <= 0.2) {
          sequence.push({ src: emptyStar, alt: "empty star" });
        } else if (decimal > 0.2 && decimal <= 0.6) {
          sequence.push({ src: halfStar, alt: "half star" });
        } else {
          sequence.push({ src: fullStar, alt: "full star" });
        }
      } else {
        sequence.push({ src: emptyStar, alt: "empty star" });
      }
    }

    return sequence.map((img, i) => (
      <Image key={i} src={img.src} alt={img.alt} className="w-4 h-4 mr-1" />
    ));
  };

  return <div className="flex items-center">{renderStars()}</div>;
}

import Link from "next/link";
import Price from "./Price";
import Stars from "./Stars";

import { RestaurantCardType } from "../page";

type Props = {
  restaurant: RestaurantCardType;
};

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
    >
      <img src={restaurant.main_image} alt="" className="w-full h-36" />

      <div className="p-1">
        <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>

        <div className="flex items-center">
          <div className="flex mb-2">
            <Stars reviews={restaurant.reviews} />
          </div>

          <p className="ml-2">
            {restaurant.reviews.length}{" "}
            {restaurant.reviews.length === 1 ? "review" : "reviews"}
          </p>
        </div>

        <div className="flex text-reg font-light capitalize">
          <p className="mr-3">{restaurant.cuisine.name}</p>

          <Price price={restaurant.price} />

          <p className="ml-3">{restaurant.location.name}</p>
        </div>

        <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
      </div>
    </Link>
  );
}

import Description from "./Description";
import Rating from "./Rating";
import Title from "./Title";

import { Restaurant } from "../page";

type Props = {
  restaurant: Restaurant;
};

export default function InfoSection({ restaurant }: Props) {
  return (
    <section>
      <Title title={restaurant.name} />
      <Rating />
      <Description description={restaurant.description} />
    </section>
  );
}

import ImagesSection from "./components/ImagesSection";
import InfoSection from "./components/InfoSection";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import ReviewsSection from "./components/ReviewsSection";

import { PrismaClient } from "@prisma/client";

export interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUniqueOrThrow({
    where: { slug },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  return restaurant;
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function Restaurant({ params }: Props) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />

        <InfoSection restaurant={restaurant} />
        <ImagesSection restaurant={restaurant} />
        <ReviewsSection />
      </div>

      <ReservationCard />
    </>
  );
}

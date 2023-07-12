import ImagesSection from "./components/ImagesSection";
import InfoSection from "./components/InfoSection";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import ReviewsSection from "./components/ReviewsSection";

import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";

export interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    },
  });

  if (!restaurant) {
    notFound();
  }

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
        <ReviewsSection restaurant={restaurant} />
      </div>

      <ReservationCard />
    </>
  );
}

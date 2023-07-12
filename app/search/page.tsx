import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SideBar from "./components/SideBar";

import { Cuisine, Location, Price, Prisma, PrismaClient } from "@prisma/client";
import { RestaurantCardType } from "../page";

const prisma = new PrismaClient();

export interface SearchParams {
  location?: string;
  cuisine?: string;
  price?: Price;
}

const fetchRestaurantsByLocation = async ({
  location,
  cuisine,
  price,
}: SearchParams): Promise<RestaurantCardType[]> => {
  const where: Prisma.RestaurantWhereInput = {};

  if (location) {
    where.location = { name: { equals: location } };
  }

  if (cuisine) {
    where.cuisine = { name: { equals: cuisine } };
  }

  if (price) {
    where.price = { equals: price };
  }

  const restaurants = await prisma.restaurant.findMany({
    where,
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      slug: true,
      reviews: true,
      price: true,
    },
  });

  return restaurants;
};

const fetchLocations = async (): Promise<Location[]> => {
  const locations = await prisma.location.findMany();

  return locations;
};

const fetchCuisines = async (): Promise<Cuisine[]> => {
  const cuisines = await prisma.cuisine.findMany();

  return cuisines;
};

type Props = {
  searchParams: SearchParams;
};

export default async function Search({ searchParams }: Props) {
  const restaurants = await fetchRestaurantsByLocation(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />

      <main className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />

        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>Sorry, we found no restaurants for this area</p>
          )}
        </div>
      </main>
    </>
  );
}

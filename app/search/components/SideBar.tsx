import Link from "next/link";
import Price from "../../components/Price";

import { Cuisine, Location, Price as PRICE } from "@prisma/client";
import { SearchParams } from "../page";

type Props = {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: SearchParams;
};

export default function SideBar({ locations, cuisines, searchParams }: Props) {
  return (
    <div className="w-1/5 mr-5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            key={location.id}
            className={`font-light text-reg transition-colors${
              searchParams.location === location.name
                ? " font-medium underline"
                : ""
            }`}
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                location:
                  searchParams.location === location.name
                    ? undefined
                    : location.name,
              },
            }}
          >
            {location.name}
          </Link>
        ))}
      </div>

      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            key={cuisine.id}
            className={`font-light text-reg transition-colors${
              searchParams.cuisine === cuisine.name
                ? " font-medium underline"
                : ""
            }`}
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine:
                  searchParams.cuisine === cuisine.name
                    ? undefined
                    : cuisine.name,
              },
            }}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>

      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>

        <div className="flex">
          <Link
            className={`border w-full text-reg text-center font-light rounded-l p-2 transition-colors${
              searchParams.price === PRICE.CHEAP ? " bg-gray-200" : ""
            }`}
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price:
                  searchParams.price === PRICE.CHEAP ? undefined : PRICE.CHEAP,
              },
            }}
          >
            <Price price={PRICE.CHEAP} />
          </Link>

          <Link
            className={`border-t border-b w-full text-reg text-center font-light p-2 transition-colors${
              searchParams.price === PRICE.REGULAR ? " bg-gray-200" : ""
            }`}
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price:
                  searchParams.price === PRICE.REGULAR
                    ? undefined
                    : PRICE.REGULAR,
              },
            }}
          >
            <Price price={PRICE.REGULAR} />
          </Link>

          <Link
            className={`border w-full text-reg text-center font-light rounded-r p-2 transition-colors${
              searchParams.price === PRICE.EXPENSIVE ? " bg-gray-200" : ""
            }`}
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price:
                  searchParams.price === PRICE.EXPENSIVE
                    ? undefined
                    : PRICE.EXPENSIVE,
              },
            }}
          >
            <Price price={PRICE.EXPENSIVE} />
          </Link>
        </div>
      </div>
    </div>
  );
}

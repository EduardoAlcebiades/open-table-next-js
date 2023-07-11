import MenuSection from "../components/MenuSection";
import RestaurantNavBar from "../components/RestaurantNavBar";

import { Item, PrismaClient } from "@prisma/client";

type Props = {
  params: {
    slug: string;
  };
};

const prisma = new PrismaClient();

const fetchItems = async (slug: string): Promise<Item[]> => {
  const items = await prisma.item.findMany({ where: { restaurant: { slug } } });

  return items;
};

export default async function RestaurantMenu({ params }: Props) {
  const items = await fetchItems(params.slug);

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug} />

      <MenuSection items={items} />
    </div>
  );
}

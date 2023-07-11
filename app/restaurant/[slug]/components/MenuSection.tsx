import MenuCard from "./MenuCard";

import { Item } from "@prisma/client";

type Props = {
  items: Item[];
};

export default function MenuSection({ items }: Props) {
  return (
    <section className="bg-white">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>

        <div className="flex flex-wrap justify-between">
          {items.length ? (
            items.map((item) => (
              <MenuCard
                key={item.id}
                title={item.name}
                description={item.description}
                price={item.price}
              />
            ))
          ) : (
            <p>This restaurant does not have any menu item!</p>
          )}
        </div>
      </div>
    </section>
  );
}

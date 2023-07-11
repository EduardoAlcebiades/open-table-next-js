import { Price as PRICE } from "@prisma/client";

type Props = {
  price: PRICE;
};

export default function Price({ price }: Props) {
  const renderPrice = (price: PRICE) => {
    switch (price) {
      case PRICE.CHEAP:
        return (
          <>
            <span>$$</span>
            <span className="text-gray-400">$$</span>
          </>
        );
      case PRICE.REGULAR:
        return (
          <>
            <span>$$$</span>
            <span className="text-gray-400">$</span>
          </>
        );
      case PRICE.EXPENSIVE:
        return <span>$$$$</span>;
      default:
        return <span className="text-gray-400">$$$$</span>;
    }
  };

  return <p className="flex">{renderPrice(price)}</p>;
}

import { Restaurant } from "../page";

type Props = {
  restaurant: Restaurant;
};

export default function ImagesSection({ restaurant }: Props) {
  return (
    <section>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {restaurant.images.length} photos
      </h1>

      <div className="flex flex-wrap">
        {restaurant.images.map((image) => (
          <img key={image} src={image} alt="" className="w-56 h-44 mr-1 mb-1" />
        ))}
      </div>
    </section>
  );
}

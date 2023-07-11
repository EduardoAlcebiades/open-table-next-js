type Props = {
  title: string;
  description: string;
  price: string;
};

export default function MenuCard({ title, description, price }: Props) {
  return (
    <div className=" border rounded p-3 w-[49%] mb-3">
      <h3 className="font-bold text-lg">{title}</h3>

      <p className="font-light mt-1 text-sm">{description}</p>

      <p className="mt-7">{price}</p>
    </div>
  );
}

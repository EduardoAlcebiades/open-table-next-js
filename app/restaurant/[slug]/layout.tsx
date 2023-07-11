import Header from "./components/Header";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

export default function RestaurantLayout({ children, params }: Props) {
  return (
    <>
      <Header name={params.slug} />

      <main className="flex m-auto w-2/3 justify-between items-start -mt-11 pb-4">
        {children}
      </main>
    </>
  );
}

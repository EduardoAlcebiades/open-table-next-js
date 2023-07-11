import Header from "./components/Header";

type Props = {
  children: React.ReactNode;
};

export default function RestaurantLayout({ children }: Props) {
  return (
    <>
      <Header />

      <main className="flex m-auto w-2/3 justify-between items-start -mt-11 pb-4">
        {children}
      </main>
    </>
  );
}

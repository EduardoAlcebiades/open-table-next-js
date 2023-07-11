import MenuSection from "../components/MenuSection";
import RestaurantNavBar from "../components/RestaurantNavBar";

export default function RestaurantMenu() {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar />

      <MenuSection />
    </div>
  );
}

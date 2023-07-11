import ImagesSection from "./components/ImagesSection";
import InfoSection from "./components/InfoSection";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import ReviewsSection from "./components/ReviewsSection";

export default function Restaurant() {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar />

        <InfoSection />
        <ImagesSection />
        <ReviewsSection />
      </div>

      <ReservationCard />
    </>
  );
}

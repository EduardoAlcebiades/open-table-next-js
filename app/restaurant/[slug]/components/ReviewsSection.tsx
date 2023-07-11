import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  return (
    <section>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What 100 people are saying
      </h1>

      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </section>
  );
}

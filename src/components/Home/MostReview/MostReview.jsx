import phones from "../../../../public/phone.json";
import MostReviewCard from "./MostReviewCard";

const MostReview = () => {
  const sortArray = phones.sort((a, b) => b.rating - a.rating);

  return (
    <div className="mb-5">
      <div className="mb-4">
        <h1 className="text-5xl font-bold mb-5 my-2">
          Most Reviews <span className="text-orange-600">Smartphones</span>
        </h1>
        <p>
          These phones are celebrated for their innovation, performance, and
          user satisfaction, making them popular choices in the market.
        </p>
      </div>

      <div className="md:grid lg:grid-cols-4 md:grid-cols-2 p-8 items-center bg-gray-200 py-8  gap-5 justify-center mb-2">
        {sortArray.slice(0, 4).map((phone) => (
            
          <MostReviewCard key={phone.id} phone={phone}>
          </MostReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MostReview;

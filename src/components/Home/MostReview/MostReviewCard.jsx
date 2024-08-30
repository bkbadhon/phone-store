import { CiStar } from "react-icons/ci";
const MostReviewCard = ({phone}) => {
    const {id , name, brand, price, info, rating, photo} = phone;

    return (
        <div className="border-2 h-96 border-orange-500 mb-4 card bg-base-100 shadow-xl" data-aos="fade-right" data-aos-duration="2000">
        <figure><img className="w-[100px] h-[100px]" src={photo} data-aos="fade-down" data-aos-duration="2000"/></figure>
        <div className="card-body" data-aos="fade-right" data-aos-duration="2000">
          <h2 className="card-title flex flex-row justify-around text-xs text-center">
            {name}
            <div className="badge badge-secondary">{brand}</div>
          </h2>
          <p className="text-xs">Details:{info}</p>
          <p className="text-lg">Price:{price}$</p>
          <p className="flex mx-auto text-center justify-center">Reviews:<CiStar className="mt-1 text-xl text-orange-600" /><CiStar className="mt-1 text-xl text-orange-600"  /><CiStar className="mt-1 text-xl text-orange-600" /><CiStar className="mt-1 text-xl text-orange-600" /><CiStar className="mt-1 text-xl text-orange-600" /></p>

        </div>
      </div>
    );
};

export default MostReviewCard;
import { CiStar } from "react-icons/ci";
const MostReviewCard = ({phone}) => {
    const {id , name, brand, price, info, rating, photo} = phone;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="w-[200px] h-[200px]" src={photo} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{brand}</div>
          </h2>
          <p>Details:{info}</p>
          <p>Price:{price}$</p>
          <p className="flex mx-auto text-center justify-center">Reviews:<CiStar className="mt-1 text-xl text-orange-600" /><CiStar className="mt-1 text-xl text-orange-600"  /><CiStar className="mt-1 text-xl text-orange-600" /><CiStar className="mt-1 text-xl text-orange-600" /><CiStar className="mt-1 text-xl text-orange-600" /></p>

          <button className="mx-auto bg-orange-500 p-2 rounded-lg text-white">Buy Now</button>
        </div>
      </div>
    );
};

export default MostReviewCard;
import { Link } from "react-router-dom";
import img1 from "../../../public/cashondelivery.jpg";
import img2 from "../../../public/free-shipping.jpg";
const Service = () => {
  return (
    <div>
      <div className="text-center my-8" data-aos="fade-down" data-aos-duration="2000">
        <h2 className="text-3xl font-bold">
          <span className="text-orange-600">Our Best</span> Services
        </h2>
        <p>
          These phones are celebrated for their innovation, performance, and
          user satisfaction, making them popular choices in the market.
        </p>
      </div>

      <div className="hero bg-base-200 my-8 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img1}
            className="w-1/2 rounded-lg shadow-2xl"
            data-aos="fade-right" data-aos-duration="2000"
          />
          <div className="w-1/2" data-aos="fade-left" data-aos-duration="2000">
            <h1 className="text-5xl font-bold"><span className="text-orange-600">Cash On</span> Delivery</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={'/mobiles'}>

            <button className="btn bg-orange-600 text-white">Get Started</button>    
            </Link>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 my-8 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="w-1/2" data-aos="fade-right" data-aos-duration="2000">
            <h1 className="text-5xl font-bold"><span className="text-orange-600">Free</span> Shipping</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={'/mobiles'}>

            <button className="btn bg-orange-600 text-white">Get Started</button>    
            </Link>
          </div>
          <img
            src={img2}
            className="w-1/2 rounded-lg shadow-2xl"
            data-aos="fade-left" data-aos-duration="2000"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

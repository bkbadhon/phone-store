import { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { Link,useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import useCart from "../Hook/useCart";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";


const Cart = () => {
  const axiosLink = useAxios(AxiosSource);
  const [phones, setPhones] = useState([]);
  const { id } = useParams();
  console.log(phones)

  useEffect(()=>{
    axiosLink.get('/phones')
    .then(res=>{
      const findService = res.data.find((phone) => phone._id == id);
      setPhones(findService);
      console.log(findService)
    })
    .catch(err=>{
      console.log(err)
    })

  },[axiosLink, id])

  const [quantity, setQuantity] = useState("");

  // Function to handle changes in the input field
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const { user } = useContext(AuthContext);

  const pricePerProduct = phones.price;
  const numberOfProducts = quantity;
  const discountPercentage = 5;

  // Calculate the total cost without discount
  const totalCostBeforeDiscount = pricePerProduct * numberOfProducts;

  // Calculate the discount amount
  const discountAmount = totalCostBeforeDiscount * (discountPercentage / 100);

  // Calculate the final total cost after discount
  const totalCostAfterDiscount = totalCostBeforeDiscount - discountAmount;
  // Function to log the current value of the input field

  const [, refetch] = useCart();
  const handleSubmit = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: phones._id,
        email: user.email,
        name: phones.name,
        price: phones.price,
        image: phones.photo,
        brand: phones.brand,
        info: phones.info,
        processor: phones.processor,
        rating: phones.rating,
      };
      axiosLink
        .post("/cart", cartItem)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: `${phones.name} Added to Cart`,
              icon: "success",
            });
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const [rating, setRating] = useState(0);
  const textRef = useRef()
  const handleReview = (e) =>{
    e.preventDefault()
    if (user && user.email) {
      const reviewItem = {
        menuId: phones._id,
        email: user.email,
        userName: user?.displayName,
        userPhoto: user?.photoURL,
        name: phones.name,
        image: phones.photo,
        brand: phones.brand,
        info: phones.info,
        rating: rating,
        comment :textRef.current.value,
      };
      console.log(reviewItem)
      axiosLink
        .post("/review", reviewItem)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: `${phones.name} Added your review`,
              icon: "success",
            });
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

 

  return (

    
    <div>
      <div className="  my-5 bg-base-100 shadow-xl">
        <figure>
          <div className="card-title px-4 md:text-2xl text-xl font-bold">
            <h2>
              Mobiles / {phones.brand}/ {phones.name}
            </h2>
          </div>
          <div className="divider divider-secondary"></div>

          <div className="md:flex justify-around">
            <div className="md:w-1/2 w-full" data-aos="fade-right" data-aos-duration="2000">
              <img
                className="md:w-1/3 my-4 w-1/2"
                src={phones.photo}
                data-aos="fade-down"
                data-aos-duration="2000"
              />
              <div className=" mb-4 md:w-1/3 px-8 text-left">
                <h2
                  className="card-title mb-2 text-2xl font-bold"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  {phones.name}
                </h2>
                <h2
                  className="card-title mb-2 font-semibold text-xl"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  Price :{phones.price}$
                </h2>
                <h2
                  className="card-title mb-2 font-semibold text-xl"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  Details :{phones.info}
                </h2>
                <div
                  className="flex text-left items-center justify-start mb-2"
                  data-aos="fade-right"
                  data-aos-duration="2500"
                >
                  <label className="text-xl font-semibold" htmlFor="quantity">
                    Quantity:
                  </label>
                  <input
                    className="border-2 border-orange-500 rounded-xl w-12"
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={handleChange}
                    min="0"
                    step="1"
                  />
                </div>
                <h2
                  className="card-title mb-2 font-semibold text-xl"
                  data-aos="fade-right"
                  data-aos-duration="2500"
                >
                  Processor :{phones.processor}
                </h2>
              </div>
            </div>
            <div
              className="text-left p-8"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h2 className="md:text-3xl text-2xl mb-6 font-bold">Ordered Price</h2>
              <div className="divider divider-secondary"></div>
              <h2 className="text-xl mb-6 font-bold">
                Price : {totalCostBeforeDiscount} $
              </h2>
              <h2 className="text-xl mb-6 font-bold">
                5% Discount : {discountAmount} $
              </h2>
              <div className="divider divider-secondary"></div>
              <h2 className="text-xl mb-6 font-bold">
                Total : {totalCostAfterDiscount} $
              </h2>

              <Link to={"/cart"}>
                <button
                  onClick={handleSubmit}
                  disabled={quantity <= 0}
                  className="btn w-full bg-orange-500 text-white"
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </figure>
      </div>

      <div className="text-left p-8">
        <h2 className="text-xl mb-4 text-orange-500">Review This Phone</h2>
        <Rating
          emptySymbol={
            <CiStar className="text-2xl text-orange-500"/>
          }
          fullSymbol={
            <IoIosStar className="text-2xl text-orange-600"/>
          }
            onChange={(value) => setRating(value)}
        />
        <p className="text-xl flex items-center text-orange-500">Your Rating: {rating} <IoIosStar/></p>

        <div>
          <h2 className="mb-2 text-xl font-semibold mt-2">Write your comment here :</h2>
          <textarea className="border-2 border-orange-500 h-20 w-full" ref={textRef} placeholder="Write...." name="textarea" id=""></textarea>
          <button onClick={handleReview} className="btn p-1 px-4 mb-5 btn-outline hover:bg-orange-600">Submit</button>
        </div>
      </div>

      
    </div>
  );
};

export default Cart;

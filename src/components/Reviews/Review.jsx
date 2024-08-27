import useAxios, { AxiosSource } from "../Axios/useAxios";

const Review = () => {
  const axiosLink = useAxios(AxiosSource);
  axiosLink
    .get("/phones")
    .then((res) => {
      const phone = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">
          <span className="text-orange-500">Our Best Sell</span> in This Week
        </h2>
        <h1></h1>
        <p>
          These phones are celebrated for their innovation, performance, and
          user satisfaction, making them popular choices in the market.
        </p>
      </div>
      
    </div>
  );
};

export default Review;

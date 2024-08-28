import image from "../../../public/iphone15-removebg-preview.png";

const Banner = () => {
  return (
    <div className="md:flex gap-5 -mt-6  py-16 mb-16 items-center  justify-between">
      <div className=" md:w-1/2">
        <h1 className="text-5xl font-bold" data-aos="fade-right" data-aos-duration="1000">
          Choose{" "}
          <span className=" bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
            Your
          </span>
          <br />
          <span className="text-orange-700">Best </span> Smartphones
        </h1>
        <p className="mt-5" data-aos="fade-right" data-aos-duration="2000">
          A device that uses either a system of wires along which electrical
          signals are sent or a system of radio signals to make it possible for
          you to speak to someone in another place who has a similar device:
          Just then, his phone rang.
        </p>
      </div>
      <div className="md:w-1/2" data-aos="fade-left">
        <img
          className="lg:w-96 md:w-72 w-72 mx-auto"
          src={image}
          alt=""
          data-aos="fade-left"
          data-aos-duration="2000"
        />
      </div>
    </div>
  );
};

export default Banner;

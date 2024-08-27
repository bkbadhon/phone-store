const Reviewer = () => {
  return (
    <div className="carousel lg:ml-32 md:ml-8 sm:-ml-24 mb-8">
      <div className="carousel-item  flex justify-center flex-col items-center">
        <img
          src="https://i.ibb.co/zQM6zrW/s1.jpg"
          className="w-24 h-24 rounded-full p-4 object-cover"
          alt="Tailwind CSS Carousel component"
        />
        <br />
        <div className="w-1/2 mx-auto">
        <h2 className="text-xl text-orange-500 font-semibold mb-4">John Smith</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur et recusandae incidunt. Architecto est, velit corporis quae ut placeat libero!</p>

        </div>
      </div>
      <div className="carousel-item flex justify-center flex-col items-center">
        <img
          src="https://i.ibb.co/4myvj5s/c87c740c-24d1-4e15-b2c6-bad29b53b6d0.jpg"
          className="w-24 h-24 rounded-full p-4 object-cover"
          alt="Tailwind CSS Carousel component"
        />
        <div className="w-1/2 mx-auto">
        <h2 className="text-xl text-orange-500 font-semibold mb-4">Rayhanul islam </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur et recusandae incidunt. Architecto est, velit corporis quae ut placeat libero!</p>

        </div>
      </div>
      <div className="carousel-item flex justify-center flex-col items-center">
        <img
          src="https://i.ibb.co/sbX6f00/software.jpg"
          className="w-24 h-24 rounded-full p-4 object-cover"
          alt="Tailwind CSS Carousel component"
        />
        <div className="w-1/2 mx-auto">
        <h2 className="text-xl text-orange-500 font-semibold mb-4">Michael Brown</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur et recusandae incidunt. Architecto est, velit corporis quae ut placeat libero!</p>

        </div>
      </div>
      <div className="carousel-item md:mr-24 flex justify-center flex-col items-center">
        <img
          src="https://i.ibb.co/hR413tC/s.jpg"
          className="w-24 h-24 rounded-full p-4 object-cover"
          alt="Tailwind CSS Carousel component"
        />
        <div className="w-1/2 mx-auto">
        <h2 className="text-xl text-orange-500 font-semibold mb-4">Emily Davis</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur et recusandae incidunt. Architecto est, velit corporis quae ut placeat libero!</p>

        </div>
      </div>
      

    </div>
  );
};

export default Reviewer;

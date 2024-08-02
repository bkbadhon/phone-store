import image from '../../../public/iphone15.jpg'

const Banner = () => {
    return (

  

        <div className="md:flex gap-5 mt-4 mb-16 items-center justify-between">
        <div className="md:w-1/2">
       <h1 className="text-5xl font-bold">Choose <span className='text-orange-500'>Your</span><br/><span className="text-orange-500">Best </span> Smartphones</h1>
       <p className="mt-5">A device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang.</p>
        </div>
       <div className="md:w-1/2">
       <img className="lg:w-96 md:w-72 w-72 mx-auto" src={image} alt="" />
       </div>

        </div>
    );
};

export default Banner;
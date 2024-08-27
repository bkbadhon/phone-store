import img from '../../../public/contact.jpg'

const Contact = () => {
  return (
    <div>
      <div data-aos="fade-down" data-aos-duration="2000">
        <h2 className="text-3xl mb-3 font-bold">
          {" "}
          <span className="text-orange-600">Subscribe For</span> Get New Update
        </h2>
        <p>
          These phones are celebrated for their innovation, performance, <br />{" "}
          and user satisfaction, making them popular choices in the market.
        </p>
      </div>
      <div className="my-5 md:flex justify-center items-center gap-12">
        <div className='w-1/2 items-center justify-center' data-aos="fade-right" data-aos-duration="2000">
          <img className='object-cover w-96' src={img} alt="" />
        </div>
        <div className='w-1/2' data-aos="fade-left" data-aos-duration="2000">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Name:</span>
            </div>
            <input
              type="text"
              placeholder="Type Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Email:</span>
            </div>
            <input
              type="email"
              placeholder="Type Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Message:</span>
            </div>
            <textarea className="textarea textarea-warning" placeholder="Type Your Message"></textarea>
            
          </label>
          <button className="btn flex justify-start mt-2 btn-outline hover:bg-orange-500">Send</button>


        </div>
      </div>
    </div>
  );
};

export default Contact;

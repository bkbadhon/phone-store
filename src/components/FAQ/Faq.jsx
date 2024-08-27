import img from "../../../public/faq.jpg";
const Faq = () => {
  return (
    <div className="my-12">
    <div className="text-center">
        <h2 className="text-3xl font-bold">Why We <span className="text-orange-500">Are Best ?</span></h2>
        <p>These phones are celebrated for their innovation, performance, <br /> and user satisfaction, making them popular choices in the market.</p>
    </div>
      <div className="md:flex my-5 justify-center items-center gap-12">
        <div className="w-1/2">
          <img className="" src={img} alt="" />
        </div>

        <div className="w-1/2 join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Have Our Delivery Support ?
            </div>
            <div className="collapse-content">
              <p>Yes, we have.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can I take Phone by Cash on Delivery ?
            </div>
            <div className="collapse-content">
              <p>Yes.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Have We Any Discount ?
            </div>
            <div className="collapse-content">
              <p>Yes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

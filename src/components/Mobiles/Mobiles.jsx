// import phones from '../../../public/phone.json'
import { useEffect, useRef, useState } from "react";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import { Link} from "react-router-dom";
const Mobiles = () => {
    const axiosLink = useAxios(AxiosSource)
  const [phones, setPhones] = useState([]);


  useEffect(() => {
    axiosLink.get('/phones')
    .then(res=>{
      console.log(res)
      setPhones(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [axiosLink]);
  console.log(phones)
  const searchRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();

    const search = phones.filter((e) =>
      e.brand.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setPhones([...search]);
    if (searchRef.current.value.length < 1) {
      setPhones([...phones]);
    }
  };

  const handleSort = (e) => {

    
      axiosLink.get(`/sort/${e.target.value}`)
      .then((res) => {
        console.log(res);
        setPhones(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="flex flex-wrap my-10">
        <div className=" w-full">
          <div className="flex justify-center my-5">
            <div>
              <select
                onClick={handleSort}
                className="border-2 border-orange-600 rounded-full p-1"
                name=""
                id=""
              >
                <option value="Default">Default</option>
                <option value="highToLow">High to Low</option>
                <option value="LowToHigh">Low to High</option>
              </select>
            </div>
            <div id="Input Section" className="w-fit mx-auto">
              <input
                ref={searchRef}
                type="text"
                className="border-2 md:w-[400px] mr-3 rounded-xl border-orange-400 p-1 "
              />
              <button
                onClick={handleSearch}
                className="btn btn-sm bg-red-500 text-white hover:bg-red-500"
              >
                Search{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-error"></div>

      <div className="flex flex-wrap gap-5 my-5 justify-center">
        {phones.map((phone, _id) => (
          <div
            key={_id}
            className="card w-96 border-2 border-orange-600 my-5 bg-base-100 shadow-xl"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <figure>
              <img className="w-[200px] h-[200px]" src={phone.photo} data-aos="fade-down" data-aos-duration="2000"/>
            </figure>
            <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
              <h2 className="card-title text-xl">
                {phone.name}
                <div className="badge badge-secondary">{phone.brand}</div>
              </h2>
              <p className="font-semibold text-xs">Details :{phone.info}</p>
              <p className="font-semibold text-xl">Price :{phone.price}$</p>
              <p className="font-semibold text-xl">Rating :{phone.rating}</p>

              <div className="flex justify-center gap-2 items-center">
              {/* <Link to={`/phones/${phone._id}`}>
                  <button className="mx-auto bg-orange-500 p-2  rounded-lg text-white">
                    Add To Cart
                  </button>
              </Link> */}
                <Link to={`/phones/${phone._id}`}>
                <button className="mx-auto bg-orange-500 p-2 rounded-lg text-white" data-aos="zoom-in" data-aos-duration="2000">
                  View Details
                </button>

                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;

import Banner from "../Banner/Banner";
import phones from '../../../public/phone.json'
import { useRef, useState } from "react";
const Mobiles = () => {

    const [array, setArray] = useState(phones)


    const searchRef = useRef()

    const handleSearch =(e)=>{
        e.preventDefault()
     
        const search = phones.filter((e)=> e.brand.toLowerCase().includes(searchRef.current.value.toLowerCase()) )
        setArray([...search])
        if(searchRef.current.value.length <1){
          setArray([...phones])
        }
      
       }


    
    


    return (
        <div>
            <Banner></Banner>
     
            <div className="flex flex-wrap my-10">
                <div  className="lg:w-2/3 w-full">
                    <div className="flex justify-center my-5">
                        <div id="Input Section" className="w-fit mx-auto">
                            <input ref={searchRef} type="text" className="border-2 mr-3 rounded-xl border-black p-1 " />
                            <button onClick={handleSearch} className="btn btn-sm bg-red-500 text-white hover:bg-red-500">Search </button>
                        </div>
                    </div>
                </div>
            </div>
        

        <div className="flex flex-wrap gap-5 justify-center">
            
            {

                array.map((phone,id)=>(
                    <div key={id} className="card w-96 bg-base-100 shadow-xl" 
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                    <figure><img className="w-[200px] h-[200px]" src={phone.photo} /></figure>
                        <div className="card-body">
                        <h2 className="card-title">
                            {phone.name}
                            <div className="badge badge-secondary">{phone.brand}</div>
                        </h2>
                        <p>Details:{phone.info}</p>
                        <p>Price:{phone.price}$</p>
                        <p>Rating:{phone.rating}</p>

                        <button className="mx-auto bg-orange-500 p-2 rounded-lg text-white">Buy Now</button>
                        </div>
                    </div>

                ))
            }
            
        </div>
        </div>
    );
};

export default Mobiles;
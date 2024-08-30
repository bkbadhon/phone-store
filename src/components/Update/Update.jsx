import Swal from "sweetalert2";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useParams } from "react-router-dom";

const Update = () => {

    const {user} = useContext(AuthContext)
    const [phones, setPhones] = useState([])
    const {id} =useParams()
    const axiosLink = useAxios(AxiosSource)

    axiosLink.get(`/cart?email=${user.email}`)
    .then(res=>{
        const findPhone = res.data.find(phone =>phone._id == id)
        setPhones(findPhone)
    })
    .catch(err=>{
        console.log(err)
    })


    const handleUpdate = e =>{
        e.preventDefault()
        const form = event.target;
    
        const name = form.name.value;
        const brand = form.brand.value;
        const processor = form.processor.value;
        const realPrice = form.price.value;
        const price = parseInt(realPrice);
        const info = form.info.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
    
        const newProduct = {name,brand,processor,price,info,rating,photo}

        axiosLink.put(`/cart/${phones?._id}`, newProduct)       
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${name} Updated Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(err =>{
                console.log(err)
            })
    }



    return (
        
                <div>
            <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update Product</h2>
            <form onSubmit={handleUpdate}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={phones.name} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={phones.brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processor</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={phones.processor} name="processor" placeholder="Processor" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={phones.price} name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Info</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="info" defaultValue={phones.info} placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={phones.rating} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={phones.image} name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn bg-orange-600 text-white btn-block" />

            </form>
        </div>
        </div>
         
    );
};

export default Update;
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const data = useLoaderData()
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
        fetch(`http://localhost:3000/cart/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${name} Updated Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
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
                            <input type="text" name="name" defaultValue={data.name} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={data.brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processor</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={data.processor} name="processor" placeholder="Processor" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={data.price} name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Info</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="info" defaultValue={data.info} placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={data.rating} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={data.image} name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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
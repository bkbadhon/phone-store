import useAxios, { AxiosSource } from "../Axios/useAxios";

const AddProduct = () => {

    const axiosLink = useAxios(AxiosSource)


    const handleAdd = event =>{
        event.preventDefault();    
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
        console.log(newProduct)
        axiosLink.post('/phones', newProduct)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-orange-500">Add Product</h2>
            <form onSubmit={handleAdd}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processor</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processor" placeholder="Processor" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Info</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="info" placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn bg-orange-600 text-white btn-block" />

            </form>
        </div>
    );
};

export default AddProduct;
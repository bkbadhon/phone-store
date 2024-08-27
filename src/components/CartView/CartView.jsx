import useCart from "../Hook/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import { Link } from "react-router-dom";

const CartView = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total,item)=> total + item.price, 0)

  const axiosLink = useAxios(AxiosSource)

  const hanDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            axiosLink.delete(`/cart/${id}`)
            .then(res=>{

                if(res.data.deletedCount > 0){
                    refetch()
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                }
            }
            )
        }
      });

  }

  const handleUpdate = id =>{

  }
  return (
    <div className="my-4">
      <div className="flex justify-around">
        <div>
          <h2 className="text-center text-3xl font-bold ">
            Total Items : {cart.length}
          </h2>
        </div>
        <div>
          <h2 className="text-center text-3xl font-bold ">
            Total Price : ${totalPrice}
          </h2>
        </div>
        <div>
          <button className="text-xl btn px-4 bg-orange-600 text-white">
            Pay
          </button>
        </div>
      </div>
      <div className="divider divider-warning"></div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="text-xl">#</th>
              <th className="text-xl">Image</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Product Price</th>
              <th className="text-xl"></th>
              <th></th>
            </tr>
          </thead>

          {cart.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.image} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
              </td>
              <td>{item.email}</td>
              <td>${item.price}</td>
              <th>
                <Link to={`/update/${item._id}`}>

                <button onClick={()=>handleUpdate(item._id)} className="btn text-orange-600 text-xl"><FaEdit /></button>
                </Link>
              </th>
              <th>
                <button onClick={()=>hanDelete(item._id)} className="btn text-orange-600 text-xl"><RiDeleteBin6Line /></button>
              </th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default CartView;

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const [registerError, setRegisterError]= useState('')
    const [success, setSuccess]= useState('')
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const location = useLocation()
    const navigate = useNavigate()

    const {createUser}= useContext(AuthContext)

    const handleGoogle = ()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
            console.log(result)
            Swal.fire('Good job!','You logged in!','success')
            navigate(location?. state? location.state : "/" )
            
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleRegister = e =>{
        e.preventDefault();
        const data = e.target
        const email = data.email.value
        const name = data.name.value
        const photo = data.photo.value
        const password = data.password.value
        console.log(email,password,name,photo);

        setRegisterError('')
        setSuccess('')

        if(password.length < 6){
            setRegisterError('Password must be 6 character')
            return;
        }
        createUser(email, password, name, photo)
        .then(result =>{
            console.log(result.user)
            setSuccess('Register Successfull')   
        })

        .catch(error =>{
            console.log(error)
            setRegisterError(error.message)
        })

       

        console.log(createUser)
    }
    return (
        <div>
        <h2 className="text-2xl text-center mt-6">Register Your Account</h2>
        <div className="hero bg-base-200">
      <div className="hero-content">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Your Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {
                registerError && <p className="text-red-500">{registerError}</p>
            }
            {
                success && <p className="text-red-500">{success}</p>
            }
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
            <div className="">
                <button onClick={handleGoogle}className="btn bg-orange-600 text-white w-full">Sign in with Google</button>
            </div>
          <p className="text-center mt-2 mb-2">Already have an account <Link className="text-blue-500" to={"/login"}>Login</Link></p>
        </div>
      </div>
    </div>
    </div>
    );
};

export default Register;
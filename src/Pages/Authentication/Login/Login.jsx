import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import './Login.css'

import Navbar from "../../LandingPage/Shared/Navbar/Navbar";
import { useContext } from "react";
import {  AuthContext } from "../../Provider/AuthProvider";



const Login = () => {

  const {loaginUser} =useContext(AuthContext)
  const navigate = useNavigate();
  const loction =useLocation();
  console.log((loction));
  const from =loction?.state?.from?.pathname || '/chooseplan'



  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);
    loaginUser(email,password)
    .then(result => {
      const logUser = result.user
      console.log(logUser)
      navigate(from,{replace: true})
    })
    .catch(error=>{
      alert(error.message)
  })
  }


  return (
    <div>
    
  <div>

      <div className="banner">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-90">
              <div className="card-body">
                <form onSubmit={handelLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Your Password" name="password" className="input input-bordered" />
                    <label className="label">



                      <p> <span>You don,t have an account </span> <Link className="link-hover ml-10 text-xl text-purple-600" to='/register' > Register </Link></p>
                    </label>

                  </div>
                  <div className="form-control mt-6">

                    <button className="btn w-full text-white bg-purple-800 ">Login</button><br />
                   

                  </div>
                </form>
                <button className="btn text-white bg-purple-800 "> <FaGoogle></FaGoogle>Login With Google</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Login;
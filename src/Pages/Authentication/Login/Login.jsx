import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password,email);
    }
    

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse w-full">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
           


           <p> <span>You don,t have an account </span> <Link className="link-hover ml-10 text-xl text-purple-600" to='/register' > Regster </Link></p> 
          </label>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-purple-800 ">Login</button><br/>
          <button  className="btn text-white bg-purple-800 "> <FaGoogle></FaGoogle>Login With Google</button>
          
        </div>
        </form>
      </div>
    </div>
  </div>
</div>


        </div>
    );
};

export default Login;
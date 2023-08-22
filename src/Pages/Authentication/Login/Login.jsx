import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import './Login.css'
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {
  const { loaginUser, restpassword } = useContext(AuthContext)
  const [show, setShow] = useState(false)
  const emailref = useRef();
  const navigate = useNavigate();
  const loction = useLocation();
  const from = loction?.state?.from?.pathname || '/chooseplan'

  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);
    loaginUser(email, password)
      .then(result => {
        const logUser = result.user
        console.log(logUser)
        navigate(from, { replace: true })
      })
      .catch(error => {
        alert(error.message)
      })
  }

  const handelForget = () => {
    const passwordReset = emailref.current.value
    if (!passwordReset) {
      alert('please add your email to the input field')
      return;
    }
    restpassword(passwordReset)
      .then(() => {
        alert('please check your email and reset your password')
      })
      .catch(error => {
        alert(error.message)
      })

  }


  return (

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
                    <input type="email" ref={emailref} placeholder="Enter Your Email" name="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">

                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="flex">
                      <input type={show ? "text" : "Password"} placeholder="Enter Your Password" name="password" className="input input-bordered w-full" />

                      <div className=" my-auto btn border-l-0" onClick={() => setShow(!show)}>
                        {
                          show ? <p className="flex "><span className="w-[30px]">Hide</span></p> : <p className="flex "> <span className="w-[30px]">Show</span></p>
                        }
                      </div>
                    </div>

                  </div>

                  <button className="btn w-full mt-5 text-white bg-purple-800 ">Login</button><br />
                </form>
                <label className="label">
                  <button onClick={handelForget} className="link-hover mx-auto text-purple-600 " >Forgotten password?</button>
                </label>
                <div className="divider text-xs my-0">OR</div>

                <button className="btn text-white bg-purple-800  mt-2"> <FaGoogle></FaGoogle>Login With Google</button>
                <p> <span className="text-sm">You don,t have an account? </span> <Link className="link-hover ml-10 text-sm text-purple-600" to='/register' > Register Now </Link></p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
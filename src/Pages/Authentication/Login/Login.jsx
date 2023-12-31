import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import './Login.css'
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useSetUserMutation, useUpdateUserMutation } from "../../../Redux/Features/API/baseApi";
import Loading from "../../Shared/Loading";

const Login = () => {
  const { user, loginUser, resetPassword, googleLogin } = useContext(AuthContext)
  const [setUser, { data: getUserUpData, isLoading, }] = useSetUserMutation()
  const [updateUser, { data: UserUpdateData }] = useUpdateUserMutation()
  const [show, setShow] = useState(false)
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/home'

  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        if (loginUser.emailVerified === false) {
          toast('Please verify your email address fast', {
            icon: '🔐',
          });
        }
        navigate(from, { replace: true })
      })
      .catch(error => {
        toast.error(error.message)

      })

  }

  // Atik -> Sign in with google
  const handleGoogleLogin = () => {
    googleLogin().then(res => {
      console.log(res)
      const userData = { name: res?.user?.displayName, email: res?.user?.email, photoURL: res?.user?.photoURL, }
      setUser(userData)
    }
    ).catch(err => {
      console.log(err)
      console.log(err.message);
    }
    )
  }

  // handle user about inserted data 
  if (!isLoading && getUserUpData) {
    console.log(getUserUpData);
    if (getUserUpData?.message === "user already exists") {
      toast.success(`Login Successful`,)
      setTimeout(() => {
        navigate(from, { replace: true })
      }, 1000);
    }
    if (getUserUpData?.insertedId) {
      window.my_modal_3.showModal()
    }
  }


  const [enable, setEnable] = useState(false)
  const handleAge = async (event) => {
    event.preventDefault()
    const age = event.target.age.value
    const upData = {
      age, email: user?.email,
    }

    if (age > 2) {
      updateUser(upData)

    }

  }

  useEffect(() => {
    if (UserUpdateData?.modifiedCount > 0 && UserUpdateData?.matchedCount > 0) {
      toast.success("Your Age Successfully updated")
      setEnable(true)
    } else if (getUserUpData?.insertedId) {
      toast("User Successfully Created", {
        icon: `${user?.photoURL}`
      })
      setEnable(true)
    }

    if (enable) {
      toast.success(`close button has Enabled`,)
    }
  }, [UserUpdateData])
  const handleClose = () => {
    navigate(from, { replace: true })
  }

  const handelForget = () => {
    const passwordReset = emailRef.current.value
    if (!passwordReset) {
      alert('please add your email to the input field')
      return;
    }
    resetPassword(passwordReset)
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
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  bg-opacity-80 rounded-xl">
              <div className="card-body">
                <form onSubmit={handelLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" ref={emailRef} placeholder="Enter Your Email" name="email" className="input input-bordered rounded-md" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="flex">
                      <input type={show ? "text" : "Password"} placeholder="Enter Your Password" name="password" className="input input-bordered w-full rounded-l-md" required />
                      <div className=" my-auto btn border-l-0 rounded-r-md" onClick={() => setShow(!show)}>
                        {
                          show ? <p className="flex "><span className="w-[30px]">Hide</span></p> : <p className="flex "> <span className="w-[30px]">Show</span></p>
                        }
                      </div>
                    </div>
                  </div>
                  <button className="btn w-full mt-5 text-white bg-purple-800 rounded-md ">Login</button><br />
                </form>
                <label className="label">
                  <button onClick={handelForget} className="link-hover mx-auto text-purple-600 rounded-md " >Forgotten password?</button>
                </label>
                <div className="divider text-xs my-0">OR</div>
                <button onClick={handleGoogleLogin} className="btn text-white bg-purple-800  mt-2 rounded-md"> {isLoading ? <Loading /> : <>
                  <FaGoogle></FaGoogle>Login With Google</>}
                </button>
                <p> <span className="text-sm">You don,t have an account? </span> <Link className="link-hover ml-10 text-sm text-purple-600" to='/register' > Register Now </Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {enable &&
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>}

          <h3 className="font-bold text-lg">Hello! {user?.displayName}</h3>
          {enable && <p className="py-4">Press ESC key or click on ✕ to close</p>}
          <form onSubmit={handleAge} className="text-center">

            <p className="py-4 text-center font-bold text-[#a846f8]">Please Enter Your Age !</p>
            <input type="number" placeholder="Enter Your Age" name="age" className="input input-bordered w-full rounded-full border-[#8700f5] border-2" required />

            <input type="submit" className="className='btn  border-2 border-[#8700f5] text-[#a846f8] mt-3 rounded-lg text-lg px-10 hover:bg-[#8700f5] shadow-inherit hover:text-white '" />
          </form>

        </div>

      </dialog>

    </div>
  );
};

export default Login;
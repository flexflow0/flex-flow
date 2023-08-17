import { Link } from "react-router-dom";
import './Registration.css'
import Navbar from "../../LandingPage/Shared/Navbar/Navbar";

const Registration = () => {
    const handelRegster = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, password, email);

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="banner">
                <div className="hero min-h-screen  ">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-90">
                            <div className="card-body">
                                <form onSubmit={handelRegster}>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered" />

                                    </div>

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

                                    </div>
                                    <div className="form-control mt-5">
                                        <input type="file" name="photo" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />


                                    </div>


                                    <label className="label">

                                        <p> <span>if you have an account please  </span> <Link className="link-hover ml-10 text-xl text-purple-600" to='/login'>Login</Link></p>
                                    </label>


                                    <div className="form-control mt-6">
                                        <button className="btn text-white bg-purple-800 ">Regster</button><br />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registration;
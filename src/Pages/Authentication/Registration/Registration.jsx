import { Link, useLocation, useNavigate } from "react-router-dom";
import './Registration.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {

    const { creatUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)
    const from = location?.state?.from?.pathname || '/choosePlan'

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const birthDate = form.birthDate.value;
        const photo = form.photo.value;
        console.log(name, photo, password, email, birthDate);
        creatUser(email, password)
            .then(result => {
                console.log(result);
                navigate(from, { replace: true })
                updateUser(name, photo)
                    .then(() => {
                        navigate(from, { replace: true })

                    })
                    .catch(error => {
                        alert(error.message)
                    })

            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div>
            <div className="banner">
                <div className="hero min-h-screen  ">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-90">
                            <div className="card-body">
                                <form onSubmit={handelRegister}>
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
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Birth Date</span>
                                        </label>
                                        <input type="date" placeholder="Enter Your Birth Date" name="birthDate" className="input input-bordered" />
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Registration.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
    const { createUser, updateUser, verificationEmail } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const [dob, setDob] = useState('');
    const [error, setError] = useState();
    const [show, setShow] = useState();
    const from = location?.state?.from?.pathname || '/chooseplan'


    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const birthDate = form.birthDate.value;
        const photo = form.photo.value;
        // console.log(name, photo, password, email, birthDate);

        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError(' Please add some characters')
            return
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError(' Please add some numbers')
            return
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError(' Please add some capital letters')
            return
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError(' please add some small letters')
            return
        }
        else if (password.length < 8) {
            setError('munimum 8 leter add plese')
            return
        }
        else if (password.length > 20) {
            setError(' Maximum letter 20')
            return
        }


        createUser(email, password)
            .then(result => {
                const loguser = result.user
                console.log(loguser);
                // console.log(loguser);
                navigate(from, { replace: true })
                updateUser(name, photo, birthDate)

                    .then(() => {
                        const userData = { name: name, email: email, photoURL: photo, birthDate: age }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userData)

                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    // Swal.fire({
                                    //     position: 'top-end',
                                    //     icon: 'success',
                                    //     title: 'Your Acount  has been Creatd',
                                    //     showConfirmButton: false,
                                    //     timer: 1500
                                    // })
                                    navigate(from, { replace: true });
                                }
                            })


                    })
                    .catch(error => {
                        console.log(error.message);
                        // Swal.fire({
                        //     icon: 'error',
                        //     title: 'Oops...',
                        //     text: `${error.message}`,
                        // })
                    })
                emailVeri(result.user)
            })
            .catch(error => {
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: `${error.message}`,
                // })
                alert(error.message)
            })

    }
    const emailVeri = () => {
        verificationEmail()
            .then(() => {
                alert(' Please check your email')
            })
    }
    const handleDateChange = (event) => {
        setDob(event.target.value);
    };

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1;
        }

        return age;
    };

    // Inside your component:
    const age = dob ? calculateAge(dob) : null;



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
                                        <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="flex">
                                            <input type={show ? "text" : "Password"} placeholder="Enter Your Password" name="password" className="input input-bordered w-full" required />

                                            <div className=" my-auto btn border-l-0" onClick={() => setShow(!show)}>
                                                {
                                                    show ? <p className="flex "><span className="w-[30px]">Hide</span></p> : <p className="flex "> <span className="w-[30px]">Show</span></p>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Birth Date</span>
                                        </label>
                                        <input type="date" placeholder="Enter Your Birth Date" name="birthDate" value={dob} onChange={handleDateChange} className="input input-bordered" required />


                                    </div>
                                    <div className="form-control mt-5">
                                        <input type="file" name="photo" className="file-input file-input-bordered file-input-primary w-full max-w-xs"  required/>
                                    </div>
                                    <p className="text-red-600">{error}</p>

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
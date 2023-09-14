import DashboardTop from "../../../../components/dashboardTop";

const UploadMovies = () => {

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        console.log(name);
    }

    return (
        <div className="MyContainer">
            <DashboardTop />
            <div className="p-10">
                <form onSubmit={handelRegister}>
                    {/* ********** */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered  rounded-lg " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered  rounded-lg " required />
                        </div>
                    </div>
                    {/* ********* */}
                    {/* ********** */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered rounded-lg " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered rounded-lg " required />
                        </div>
                    </div>
                    {/* ********* */}
                    {/* ********** */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered rounded-lg " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered rounded-lg " required />
                        </div>
                    </div>
                    {/* ********* */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered rounded-lg " required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered rounded-lg h-40 " required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input bg-purple-600 w-full max-w-xs rounded-lg" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-purple-800 rounded-lg ">Upload Now</button><br />
                    </div>
                </form>
            </div>
        </div>





    );
};

export default UploadMovies;
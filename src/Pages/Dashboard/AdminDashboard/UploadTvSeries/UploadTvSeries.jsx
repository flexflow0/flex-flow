import DashboardTop from "../../../../components/dashboardTop";

const UploadTvSeries = () => {

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
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Tv Series Title</span>
                            </label>
                            <input type="text" placeholder="Tv Series Title" name="name" className="input input-bordered  rounded-lg " required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Release Year</span>
                            </label>
                            <input type="date" placeholder="Enter Your " name="name" className="input input-bordered  rounded-lg " required />
                        </div>

                    </div>
                    {/* ********** */}
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" placeholder="Type" name="name" className="input input-bordered rounded-lg " required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Trailer Url</span>
                            </label>
                            <input type="text" placeholder="Trailer Url" name="name" className="input input-bordered rounded-lg " required />
                        </div>

                    </div>
                    {/* ********* */}
                    {/* ********** */}
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Production Company</span>
                            </label>
                            <input type="text" placeholder="Production Company" name="name" className="input input-bordered rounded-lg " required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Genres</span>
                            </label>
                            <input type="text" placeholder="Genres" name="name" className="input input-bordered rounded-lg " required />
                        </div>

                    </div>
                    {/* ********* */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">region</span>
                        </label>
                        <input type="text" placeholder="region" name="name" className="input input-bordered rounded-lg " required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description
                            </span>
                        </label>
                        <input type="text" placeholder="Description
" name="name" className="input input-bordered rounded-lg h-40 " required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Poster</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input bg-purple-600 w-full max-w-xs rounded-lg" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Thumbnail
                            </span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input bg-purple-600 w-full max-w-xs rounded-lg" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Movie</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input  bg-purple-600 w-full max-w-xs rounded-lg" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn text-white bg-purple-800 rounded-lg ">Upload Now</button><br />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadTvSeries;
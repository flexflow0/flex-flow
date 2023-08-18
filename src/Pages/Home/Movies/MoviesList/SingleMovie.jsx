

const SingleMovie = ({ movie }) => {
    console.log(movie);
    // const { _id, name, release_date, year,thumbnail} = movie;
    return (
        <div>
            <div className="card card-compact w-96  ">
                <figure><img className="w-48 border-solid border-2 border-gray-600 rounded-lg shadow-xl hover" src={movie.movie.thumbnail} alt="Movie" /></figure>
                <div className="card-body ">
                    <div className="flex mx-auto gap-3">
                    <h2 className=" font-bold mx-auto">{movie.movie.name}</h2>
                    <h2 className=" font-bold mx-auto">{movie.movie.year}</h2>
                    </div>
                   
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;
import { Link } from "react-router-dom";

const SectionMovieCard = ({ movie }) => {
    return (
        <div className="container_card relative">
            <div className="rounded-lg overflow-hidden">
                <img className="w-full h-full" src={movie?.thumbnail} alt="" />
            </div>
            <p className="text-sm md:text-sm lg:text-xs font-light mt-2 flex justify-between px-3">
                <span>
                    <i className="fa-solid fa-film mr-1"></i>
                    Movie
                </span>
                <span>{movie?.release_year}</span>
            </p>
            <div className="flex justify-between px-3">
                <Link to={`/movie_details/${movie?._id}`}>
                    <pre
                        className="text-xl md:text-md lg:text-sm font-semibold overflow-hidden text-ellipsis w-[80%] hover:underline hover:cursor-pointer"
                    >{movie?.title}</pre>
                </Link>
                <p className="flex items-center">
                    <i className="fa-solid fa-star text-xl md:text-md lg:text-sm mb-1 mr-1"></i>
                    <span className="text-xl md:text-md lg:text-sm">{movie?.IMDb_rating}</span>
                </p>
            </div>
            <Link to={`/movie_details/${movie?._id}`}
                className='hidden card_details absolute top-[25%] left-[40%]'>
                <i
                    className="fa-regular fa-circle-play text-5xl mb-20 hover:text-[#e7bb68] hover:cursor-pointer"
                ></i>
            </Link>
        </div>
    );
};

export default SectionMovieCard;
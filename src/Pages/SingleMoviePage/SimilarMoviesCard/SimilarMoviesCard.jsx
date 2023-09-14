import { Link } from "react-router-dom";

const SimilarMoviesCard = ({movie}) => {
    // console.log(movie);
    return (
        <div
            className="rounded-md overflow-hidden relative container_card w-50 bg-[#111111]"
        >
            <div
            >
                <div
                    className="w-full h-[250px] md:h-[300px] lg:h-[350px]"
                >
                    <img className="w-full h-full object-fill" src={movie?.poster} alt="" />
                </div>
                <div className="py-1 px-1 font-bold flex justify-between border-b border-[#5a2323] rounded-b-lg">
                    <Link to={`/movie_details/${movie?._id}`} className='w-[75%] '>
                        <pre className="overflow-hidden text-ellipsis hover:underline text-bas text-left">{movie?.title}</pre>
                    </Link>
                    <p className='flex items-center text-base'><i className="fa-solid fa-star text-xs mr-1"></i>{movie?.IMDb_rating}</p>
                </div>
            </div>
            <div>
                <div
                    className='p-3 space-y-1 hidden absolute bottom-20 z-50 card_details w-full'
                >
                    <Link to={`/movie_details/${movie?._id}`}
                        className='flex justify-center'>
                        <i
                            className="fa-regular fa-circle-play text-5xl mb-20 hover:text-[#e7bb68] hover:cursor-pointer"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SimilarMoviesCard;
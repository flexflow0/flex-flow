
const SectionMovieCard = ({ movie }) => {
    return (
        <div className="">
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
                <pre className="text-xl md:text-md lg:text-sm font-semibold overflow-hidden text-ellipsis w-[80%]">{movie?.title}</pre>
                <p className="flex items-center">
                    <i className="fa-solid fa-star text-xl md:text-md lg:text-sm mb-1 mr-1"></i>
                    <span className="text-xl md:text-md lg:text-sm">{movie?.IMDb_rating}</span>
                </p>
            </div>
        </div>
    );
};

export default SectionMovieCard;
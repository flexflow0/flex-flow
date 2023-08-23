
const SectionMovieCard = ({ movie }) => {
    return (
        <div>
            <div className="rounded-lg overflow-hidden">
                <img className="h-[150px]" src={movie?.thumbnail} alt="" />
            </div>
            <p className="text-xs font-light mt-2 flex justify-between px-3">
                <span>
                    <i className="fa-solid fa-film mr-1"></i>
                    Movie
                </span>
                <span>{movie?.release_year}</span>
            </p>
            <div className="flex justify-between px-3">
                <pre className="text-md font-semibold overflow-hidden text-ellipsis w-[80%]">{movie?.title}</pre>
                <p className="flex items-center">
                    <i className="fa-solid fa-star text-sm mb-1 mr-1"></i>
                    <span className="">{movie?.IMDb_rating}</span>
                </p>
            </div>
        </div>
    );
};

export default SectionMovieCard;
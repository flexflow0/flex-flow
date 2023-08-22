
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
            <pre className="text-md font-semibold overflow-hidden text-ellipsis px-3">{movie?.title}</pre>
        </div>
    );
};

export default SectionMovieCard;
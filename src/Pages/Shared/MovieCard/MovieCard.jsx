import './MovieCard.css'

const MovieCard = ({ movie }) => {
    // console.log(movie);
    return (
        <div
            className="rounded-md overflow-hidden relative container_card"
        >
            <div
            >
                <div className="w-full h-[300px]">
                    <img className="w-full h-full object-fill " src={movie?.poster} alt="" />
                </div>
                <div className="py-1 px-2 font-bold text-l flex justify-between border-b border-[#5a2323] rounded-b-lg">
                    <pre className="w-[80%] overflow-hidden text-ellipsis">{movie?.title}</pre>
                    <p>{movie?.IMDb_rating}</p>
                </div>
            </div>
            <div
                className='p-3 space-y-1 hidden absolute bottom-6 z-50 card_details '
            >
                <table className='mx-auto'>
                    <tr>
                        <th colSpan={3}></th>
                    </tr>
                    
                    <tr>
                        <th className='text-sm '>Length</th>
                        <th className='text-sm '>Rating</th>
                        <th className='text-sm '>Released</th>
                    </tr>
                    <tr>
                        <td className='text-xs text-center'>{parseInt(movie?.length / 60)}h {movie?.length % 60}m</td>
                        <td className='text-xs text-center'>{movie?.rating}</td>
                        <td className='text-xs text-center'>{movie?.release_year}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <button className="btn btn-xs rounded-md btn-outline btn-white btn-block uppercase mt-2">Details</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default MovieCard;
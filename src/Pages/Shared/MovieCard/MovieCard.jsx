import { Link } from 'react-router-dom';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <div
            className="rounded-md overflow-hidden relative container_card w-50"
        >
            <div
            >
                <div className="w-full h-[300px]">
                    <Link>
                        <img className="w-full h-full object-fill" src={movie?.poster} alt="" />
                    </Link>
                </div>
                <div className="py-2 px-2 font-bold text-l flex justify-between border-b border-[#5a2323] rounded-b-lg">
                    <Link className='w-[75%] '>
                        <pre className="overflow-hidden text-ellipsis hover:underline">{movie?.title}</pre>
                    </Link>
                    <p className='flex items-center'><i className="fa-solid fa-star text-sm mb-1 mr-1"></i>{movie?.IMDb_rating}</p>
                </div>
            </div>
            <Link>
                <div
                    className='p-3 space-y-1 hidden absolute bottom-10 z-50 card_details w-full'
                >
                    <div className='text-center'>
                        <i className="fa-regular fa-circle-play text-5xl mb-20 hover:text-[#e7bb68]"></i>
                    </div>
                    <table className='w-full mb-3'>
                        <tr>
                            <th className='text-sm'>Length</th>
                            <th className='text-sm'>Rating</th>
                            <th className='text-sm'>Released</th>
                        </tr>
                        <tr>
                            <td className='text-xs text-center'>{parseInt(movie?.length / 60)}h {movie?.length % 60}m</td>
                            <td className='text-xs text-center'>{movie?.rating}</td>
                            <td className='text-xs text-center'>{movie?.release_year}</td>
                        </tr>
                    </table>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
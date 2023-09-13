import { Link } from 'react-router-dom';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <div
            className="rounded-md overflow-hidden relative container_card w-50 bg-[#111111]"
        >
            <div
            >
                <div
                    className="w-full h-[650px] md:h-[400px] lg:h-[360px]"
                >
                    <img className="w-full h-full object-fill" src={movie?.poster} alt="" />
                </div>
                <div className="py-2 px-2 font-bold text-l flex justify-between border-b border-[#5a2323] rounded-b-lg">
                    <Link to={`/movie_details/${movie?._id}`} className='w-[75%] '>
                        <pre className="overflow-hidden text-ellipsis hover:underline">{movie?.title}</pre>
                    </Link>
                    <p className='flex items-center'><i className="fa-solid fa-star text-sm mb-1 mr-1"></i>{movie?.IMDb_rating}</p>
                </div>
            </div>
            <div>
                <div
                    className='p-3 space-y-1 hidden absolute bottom-10 z-50 card_details w-full'
                >
                    <Link to={`/movie_details/${movie?._id}`}
                        className='flex justify-center'>
                        {/* TODO: visualize the modal */}
                        <i
                            // onClick={() => window.my_modal_3.showModal()}
                            className="fa-regular fa-circle-play text-5xl mb-20 hover:text-[#e7bb68] hover:cursor-pointer"></i>
                    </Link>
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
            </div>
            {/* Modal */}
            {/* <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form>
            </dialog> */}
            {/* <dialog id="my_modal_3" className="modal w-3/4 mx-auto">
                <form method="dialog" className='modal-box   w-11/12 max-w-5xl'>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    {
                        console.log('yes')
                    }
                    <iframe width="100%" height="450" src={movie?.trailer_url} title={movie?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='true'></iframe>
                </form>
            </dialog> */}
        </div>
    );
};

export default MovieCard;
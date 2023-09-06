import { useEffect, useState } from 'react';
import './SingleMoviePage.css'
import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    // console.log(id, movie);
    useEffect(() => {
        fetch(`http://localhost:5000/singleMovie/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
                setLoading(false)
            })
    }, [id, setMovie])
    console.log(movie?.movie_url);

    const showCast = (names) => names.map((name, index, array) => <span
        key={index}
        className='text-[#4c82c8]'
    >
        <span className='hover:underline'>
            {name}
        </span>
        {index === array.length - 1 ? "" : <> &#10242; </>}
    </span>);

    return (
        <div>
            {
                loading ?
                    <div>

                    </div> :
                    <div>
                        <div
                            className="relative bg-cover bg-no-repeat bg-center h-[calc(100vh)]"
                            style={{ backgroundImage: `url(${movie?.thumbnail})` }}
                        >
                            <div
                                className="flex absolute inset-0 w-full h-[calc(100vh)] px-60 py-20 bannerThumbnail"
                            >
                                <div className="w-1/3 h-full py-5">
                                    <img className="h-full rounded-xl shadow-md shadow-[#e27777] object-cover" src={movie?.poster} alt="The Enigma Chronicles Poster" />
                                </div>
                                <div className="w-2/3 pl-8 flex flex-col justify-center ps-16">
                                    <h1 className="text-5xl font-semibold mb-4">{movie?.title}</h1>
                                    <div className="mb-4 flex items-center">
                                        <div className='mx-4 flex items-center'>
                                            <i className="fa-solid fa-star mb-1 mr-1 text-2xl text-[#ecf842]"></i>
                                            <p className=' text-4xl'>{movie?.IMDb_rating}</p>
                                        </div>
                                        <div>
                                            <p className="text-[#c4b8b8]">
                                                <span>
                                                    <i className="fa-regular fa-calendar-days text-[#c4b8b8] mr-1"></i>
                                                    {movie?.release_month} {movie?.release_year}
                                                </span>
                                                <span className='text-[#c4b8b8] mb-5'>
                                                    <i className="fa-solid fa-clock-rotate-left text-[#c4b8b8] ml-3 mr-1"></i>
                                                    {parseInt(movie?.length / 60)}h {movie?.length % 60}m
                                                </span>
                                            </p>
                                            <p className='flex items-center justify-around'>
                                                <span className='text-sm'>{movie?.rating}</span>
                                                <span className='text-sm flex gap-1 items-center'>
                                                    <i className="fa-solid fa-eye text-xs"></i>
                                                    25
                                                </span>
                                                <span className='text-sm flex gap-1 items-center'>
                                                    <i className="fa-solid fa-thumbs-up text-xs"></i>
                                                    {movie?.likes}
                                                </span>
                                            </p>
                                        </div>
                                        <div className='ms-5 flex items-start align-top'>

                                        </div>
                                    </div>
                                    <p>{movie?.description}</p>
                                    <div className='my-4'>
                                        {
                                            movie?.Genres.map((genre, index) => <button
                                                key={index}
                                                className="btn btn-outline btn-sm btn-[white] hover:bg-transparent hover:text-white no-animation rounded-full capitalize mr-3 border-[]"
                                            >{genre}</button>)
                                        }
                                    </div>
                                    <p className='my-4 ms-2'>
                                        <i className="fa-regular fa-heart mr-5 text-xl"></i>
                                        <i className="fa-solid fa-heart mr-5 text-xl"></i>
                                        <i className="fa-solid fa-share-nodes mr-5 text-xl"></i>
                                        <i className="fa-regular fa-bookmark mr-5 text-xl"></i>
                                        <i className="fa-solid fa-bookmark mr-5 text-xl"></i>
                                        <i className="fa-regular fa-thumbs-up mr-5 text-xl"></i>
                                        <i className="fa-solid fa-thumbs-up mr-5 text-xl"></i>
                                    </p>
                                    <div className="flex space-x-4 mb-4">
                                        <a
                                            className="bg-[#39134b] text-white px-4 py-2 rounded hover:bg-transparent border-2 border-[#39134b] "
                                            href='#full_movie'
                                        >
                                            <i className="fa-solid fa-play mr-1 text-xl"></i>
                                            Watch Now
                                        </a>
                                        <a
                                            className="border border-white text-[white] px-4 py-2 rounded hover:text-[#ff0000] hover:border-[#ff0000] flex items-center"
                                            onClick={() => window.my_modal_3.showModal()}
                                        >
                                            {/* <i className="fa-brands fa-youtube mr-1 hover:text-[#ff0000] text-xl"></i> */}
                                            {/* <img className='w-5 h-4 mr-1 mb-1' src={'https://i.ibb.co/L50vmPR/youtube-256x180.png'} alt="" /> */}
                                            Watch Trailer
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal */}
                        <dialog id="my_modal_3" className="modal w-3/4 mx-auto">
                            <form method="dialog" className='modal-box   w-11/12 max-w-5xl'>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <iframe width="100%" height="450" src={movie?.trailer_url} title={movie?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='true'></iframe>
                            </form>
                        </dialog>
                        {/* video */}
                        <div className='px-60 mx-auto mb-10 pt-5' id='full_movie'>
                            <iframe width="100%" height="450" src={movie?.movie_url} title={movie?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='true'></iframe>
                        </div>

                        {/* Casts */}
                        <div className='px-60 mx-auto'>
                            <div className='grid grid-cols-6  gap-10 mb-5'>
                                <h2 className='text-xl flex justify-between col-span-1'><span>Directors</span>:</h2>
                                <div className='col-span-5 text-lg'>
                                    {
                                        showCast(movie?.cast[0]?.director)
                                    }
                                </div>
                            </div>
                            <div className='grid grid-cols-6 gap-10 mb-5'>
                                <h2 className='text-xl flex justify-between col-span-1'><span>Writers</span>:</h2>
                                <div className='col-span-5 text-lg'>
                                    {
                                        showCast(movie?.cast[0]?.writers)
                                    }
                                </div>
                            </div>
                            <div className='grid grid-cols-6  gap-10 mb-5'>
                                <h2 className='text-xl flex justify-between col-span-1'><span>Stars</span>:</h2>
                                <div className='col-span-5 text-lg'>
                                    {
                                        showCast(movie?.cast[0]?.stars)
                                    }
                                </div>
                            </div>
                            <div className='grid grid-cols-6  gap-10 mb-5'>
                                <h2 className='text-xl flex justify-between col-span-1'><span>Languages</span>:</h2>
                                <div className='col-span-5 text-lg'>
                                    {
                                        showCast(movie?.language)
                                    }
                                </div>
                            </div>
                            <div className='mb-5'>
                                <h2 className='text-lg'><span>Production Company</span> : <span className='text-[#4c82c8] hover:underline ms-7'>{movie?.production_company}</span></h2>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SingleMoviePage;

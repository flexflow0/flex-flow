import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const ListCard = ({ movie, refetch, to }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return;
    }

    const handleFavorite = () => {
        const data = {
            id: movie._id,
            email: user?.email,
            to: to,
            action: false
        }
        fetch('http://localhost:5000users/lists', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);
            })
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 mb-3 bg-[#2b3440] rounded-lg'>
            <Link className='col-span-4' to={`/movie_details/${movie?._id}`}>
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    <div>
                        <img className='rounded-lg h-full' src={movie.thumbnail} alt="" />
                    </div>
                    <div className='col-span-3 py-2 ps-4 text-xl font-semibold'>
                        <div className='flex justify-between flex-col md:flex-row mr-3'>
                            <p className='flex items-end gap-1 overflow-hidden '>
                                <pre className='overflow-hidden text-ellipsis w-[80%] md:w-full'>{movie.title}</pre>
                                <span className='text-xs pb-1 flex w-full'>({parseInt(movie.length / 60)}h {parseInt(movie.length % 60)}m)</span>
                            </p>
                            <p className='flex items-center mt-1'><i className="fa-solid fa-star text-sm mb-0 lg:mb-1 mr-1"></i>{movie?.IMDb_rating}</p>
                        </div>
                        <p className='space-x-5 text-xs px-2'>
                            <span>{movie.views} views</span>
                            <span>{movie.likes} likes</span>
                        </p>
                        <p className='text-sm mt-2'>
                            {movie?.rating}
                            <span className='mx-3'>|</span>
                            {
                                movie?.Genres.map((genre, index, array) => <span
                                    key={index}
                                    className=""
                                >
                                    {genre}
                                    {index === array.length - 1 ? "" : <> , </>}
                                </span>)
                            }
                        </p>
                    </div>
                </div>
            </Link>
            <div className='flex justify-around items-center'>
                <button
                    onClick={handleFavorite}
                    className="btn btn-sm btn-error rounded-lg mb-5 lg:mb-0"
                >Remove</button>
            </div>
        </div>
    );
};

export default ListCard;
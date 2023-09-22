import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useMovies from '../../../../Hooks/useMovies/useMovies';

const Movi = ({ movie }) => {
    const [refetch] = useMovies();


    const handleDelete = movie => {
        console.log(movie)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/watchLaterMovies/${movie._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
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
            <div className='text-center'>
                <button onClick={() => handleDelete(movie)} className='lg:-right-5 right-5 drop-shadow-md transition-all duration-200 border-2 border-[#830FEA] px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-[#830FEA] hover:bg-purple-950'>Deleted</button>
            </div>
        </div>
    );
};

export default Movi;
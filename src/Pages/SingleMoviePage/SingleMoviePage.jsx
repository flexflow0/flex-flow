import { useContext, useEffect, useState } from 'react';
import './SingleMoviePage.css'
import { useParams } from 'react-router-dom';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import Swal from 'sweetalert2';

import PlayVideo from './PlayVideo/PlayVideo';
import ShowDetails from './ShowDetails/ShowDetails';
import useUser from '../../Hooks/useUser/useUser';
import { AuthContext } from '../Provider/AuthProvider';

const SingleMoviePage = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { user } = useContext(AuthContext)
    const [userData, refetch] = useUser(user?.email);
    // console.log(user, userData);
    useEffect(() => {
        fetch(`http://localhost:5000/singleMovie/${id}`)
            .then(res => res.json())
            .then(movie => {
                setMovie(movie)
                // console.log(movie);
                setLoading(false)
            })
    }, [id, setMovie, setLoading])

    if (loading) {
        return (
            <div className='h-screen flex align-middle justify-center'>
                <span className="loading loading-ring loading-lg mb-16"></span>
            </div>
        )
    }


    // if (userData?.likes.includes(movie?._id)) {
    //     isLike = true;
    // }

    // }, [id, setMovie])

     [id, setMovie]

    // --------------------------------
    const {title,thumbnail,movie_url} = movie;

    const handleWatchLater = movie => {
        console.log('Movie', movie)
        
        const watchLater = {
            title,
            thumbnail,
            movie_url
        }
    
        // console.log('new class', classes)
    
        fetch('http://localhost:5000/watchLaterMovies/', {
          method: 'POST',
          headers: {
           
         'content-type': 'application/json'
          },
          body: JSON.stringify(watchLater)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: 'success!',
              text: 'Watch later movie Added Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
           }
      
        })
    
      }

    return (
        <div>
            {
                loading ?
                    <div className='h-screen flex align-middle justify-center'>
                        <span className="loading loading-ring loading-lg mb-16"></span>
                    </div> :
                    <div></div>
                    // <div>
                    //     {/* Modal */}
                    //     <dialog id="my_modal_3" className="modal w-3/4 mx-auto">
                    //         <form method="dialog" className='modal-box   w-11/12 max-w-5xl'>
                    //             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    //             <iframe width="100%" height="450" src={movie?.trailer_url} title={movie?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='true'></iframe>
                    //         </form>
                    //     </dialog>
                    //     {/* video */}
                    //     <div className='px-20 my-10 grid grid-cols-4 gap-5'>
                    //         <div className='col-span-3 rounded-lg overflow-hidden' id='full_movie'>
                    //             <iframe
                    //                 width="100%"
                    //                 height="100%"
                    //                 src={movie?.movie_url}
                    //                 title={movie?.title}
                    //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    //                 allowfullscreen='true'
                    //             ></iframe>
                    //         </div>
                    //         {/* details */}
                    //         <div className='bg-[#1f1f1f] rounded-md p-4'>
                    //             <div className='relative'>
                    //                 <div>
                    //                     <div className='rounded border-2 border-[#3d1164] h-20 grid grid-cols-3 overflow-hidden'>
                    //                         <div
                    //                             className='bannerThumbnail bg-cover bg-center bg-no-repeat '
                    //                             style={{ backgroundImage: `url(${movie?.thumbnail})` }}
                    //                         >
                    //                         </div>
                    //                         <div className='col-span-2 ps-2'>
                    //                             <h2 className='text-lg font-semibold'>{movie?.title}</h2>
                    //                             <p className='text-[10px]'>
                    //                                 {movie?.rating}
                    //                                 <span className='mx-1'>|</span>
                    //                                 {
                    //                                     movie?.Genres.map((genre, index, array) => <span
                    //                                         key={index}
                    //                                         className=""
                    //                                     >
                    //                                         {genre}
                    //                                         {index === array.length - 1 ? "" : <> , </>}
                    //                                     </span>)
                    //                                 }
                    //                             </p>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //                 <button className='absolute bottom-[5%] right-[5%]'>
                    //                     <i className="fa-regular fa-thumbs-up"></i>
                    //                     {/* <i className="fa-solid fa-thumbs-up"></i> */}
                    //                 </button>
                    //             </div>
                    //             <div className='my-2'>
                    //                 <h2>Trailer</h2>
                    //                 <p className='text-xs'>With not one, not two, but THREE Spider-Mans!</p>
                    //             </div>
                    //             <div className='my-2'>
                    //                 <h2>IMDB Rating</h2>
                    //                 <p className='text-xs'>The IMDB rating is weighted to help keep it reliable.</p>
                    //                 <div className='flex mt-2'>
                    //                     <div className='grow flex gap-2'>
                    //                         <div>
                    //                             <i className="fa-solid fa-star mb-1 mr-1 text-2xl text-[#ecf842]"></i>
                    //                         </div>
                    //                         <div>
                    //                             <p className='text-xs'>{movie?.IMDb_rating} / 10</p>
                    //                             <p className='text-xs'>821K</p>
                    //                         </div>
                    //                     </div>
                    //                     <div className='grow flex gap-2'>
                    //                         <div>
                    //                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    //                                 <path d="M16.2856 6H23.1428V12.8571" stroke="#F24E1E" strokeLinecap="round" strokeLinejoin="round" />
                    //                                 <path d="M23.1426 6L13.4569 15.6857C13.2967 15.8428 13.0813 15.9307 12.8569 15.9307C12.6326 15.9307 12.4172 15.8428 12.2569 15.6857L8.31408 11.7429C8.15385 11.5858 7.93844 11.4978 7.71408 11.4978C7.48972 11.4978 7.2743 11.5858 7.11408 11.7429L0.856934 18" stroke="#F24E1E" strokeLinecap="round" strokeLinejoin="round" />
                    //                             </svg>
                    //                         </div>
                    //                         <div>
                    //                             <p className='text-xs'>POPULARITY</p>
                    //                             <p className='text-xs'>125/3</p>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //             <div className='mb-2'>
                    //                 <h2>Short Info</h2>
                    //                 <p className='text-xs'>{movie?.description}</p>
                    //             </div>
                    //             <div className='mb-1 flex gap-2'>
                    //                 <h2 className='text-sm'><span>Directors</span> : <span className='text-[#4c82c8] hover:underline'>{movie?.cast[0]?.directors.map((director, index, array) => <span
                    //                     key={index}
                    //                     className="hover:underline"
                    //                 >
                    //                     {director}
                    //                     {index === array.length - 1 ? "" : <> , </>}
                    //                 </span>)
                    //                 }</span></h2>
                    //             </div>
                    //             <div className='mb-1 flex gap-2'>
                    //                 <h2 className='text-sm'><span>Writers</span> : <span className='text-[#4c82c8] hover:underline'>{movie?.cast[0]?.writers.map((director, index, array) => <span
                    //                     key={index}
                    //                     className='hover:underline'
                    //                 >
                    //                     {director}
                    //                     {index === array.length - 1 ? "" : <> , </>}
                    //                 </span>)
                    //                 }</span></h2>
                    //             </div>
                    //             <div className='mb-2 flex gap-2'>
                    //                 <h2 className='text-sm'><span>Stars</span> : <span className='text-[#4c82c8] '>{movie?.cast[0]?.stars.map((director, index, array) => <span
                    //                     key={index}
                    //                     className="hover:underline"
                    //                 >
                    //                     {director}
                    //                     {index === array.length - 1 ? "" : <> , </>}
                    //                 </span>)
                    //                 }</span></h2>
                    //             </div>

                    //             {/* ----------------------------------------- */}

                    //             <button button onClick={() => handleWatchLater(movie)}
                    //                     className="btn btn-sm rounded-lg grow btn-outline btn-primary text-white bg-[#5668cf] flex gap-1 align-middle"
                    //                 >
                    //                     <svg
                    //                         xmlns="http://www.w3.org/2000/svg"
                    //                         className="h-6 w-6 text-white"
                    //                         fill="none"
                    //                         viewBox="0 0 24 24"
                    //                         stroke="currentColor"
                    //                     ><path
                    //                             strokeLinecap="round"
                    //                             strokeLinejoin="round"
                    //                             strokeWidth="2"
                    //                             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    //                         />
                    //                     </svg>
                    //                     <span className='text-white capitalize'>Watch later</span>
                    //                 </button>
                    //             <div className='flex gap-2'>
                    //                 <button
                    //                     className="btn btn-sm rounded-lg grow btn-outline btn-primary text-white bg-[#5668cf] flex gap-1 align-middle"
                    //                 >
                    //                     <svg
                    //                         xmlns="http://www.w3.org/2000/svg"
                    //                         className="h-6 w-6 text-white"
                    //                         fill="none"
                    //                         viewBox="0 0 24 24"
                    //                         stroke="currentColor"
                    //                     ><path
                    //                             strokeLinecap="round"
                    //                             strokeLinejoin="round"
                    //                             strokeWidth="2"
                    //                             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    //                         />
                    //                     </svg>
                    //                     <span className='text-white capitalize'>Add favorite</span>
                    //                 </button>
                    //                 {/* <button
                    //                     className="btn btn-sm rounded-lg grow btn-outline btn-primary text-white bg-[#5668cf] flex gap-1 align-middle"
                    //                 >
                    //                     <i className="fa-solid fa-plus text-white"></i>
                    //                     <span className='text-white capitalize'>
                    //                         Watch later
                    //                         </span>
                    //                 </button> */}
                    //                 <button
                    //                     className="btn btn-sm rounded-lg grow btn-outline btn-primary text-white bg-[#5668cf] flex gap-1 align-middle"
                    //                 >
                    //                     <i className="fa-solid fa-minus text-white"></i>
                    //                     <span className='text-white capitalize'>
                    //                         Remove
                    //                     </span>
                    //                 </button>
                    //             </div>
                    //         </div>
                    //     </div>
                    //     {/* Similar Movies */}
                    //     <div className='mx-20'>
                    //         <h1 className='text-3xl mb-4'>Similar Movies</h1>
                    //         <SimilarMovies
                    //             genres={movie?.Genres}
                    //         ></SimilarMovies>
                    //     </div>
                    // </div>
            }
            {/* Modal */}
            <dialog id="my_modal_3" className="modal w-3/4 mx-auto">
                <form method="dialog" className='modal-box   w-11/12 max-w-5xl'>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <iframe width="100%" height="450" src={movie?.trailer_url} title={movie?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='true'></iframe>
                </form>
            </dialog>
            <div className='px-5 lg:px-20 my-10 grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4'>
                <div className='col-span-3 flex flex-col border-b rounded-lg shadow-md border-[#222224]'>
                    <PlayVideo
                    
                        movie={movie}
                        refetch={refetch}
                        userData={userData}
                    ></PlayVideo>
                </div >

                {/* details */}
                <div className=' mt-5 lg:mt-0'>
                <ShowDetails
                    movie={movie}
                ></ShowDetails>
        </div>
            </div>
            {/* Similar Movies */}
            <div className='mx-5 lg:mx-20'>
                <h1 className='text-3xl mb-4'>Similar Movies</h1>
                <SimilarMovies
                    genres={movie?.Genres}
                ></SimilarMovies>
            </div>
        </div>

    );
};

export default SingleMoviePage;

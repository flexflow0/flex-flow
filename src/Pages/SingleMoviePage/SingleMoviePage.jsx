import { useContext, useEffect, useState } from 'react';
import './SingleMoviePage.css'
import { useParams } from 'react-router-dom';
import SimilarMovies from './SimilarMovies/SimilarMovies';
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

     [id, setMovie]

    return (
        <div>
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

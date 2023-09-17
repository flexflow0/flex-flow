import './SingleMoviePage.css'
import { useParams } from 'react-router-dom';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import PlayVideo from './PlayVideo/PlayVideo';
import ShowDetails from './ShowDetails/ShowDetails';
import useSingleMovie from '../../Hooks/useSingleMovie/useSingleMovie';
import Loading from '../Shared/Loading';
import { useEffect, useState } from 'react';
const SingleMoviePage = () => {
    const { id } = useParams();
    const [movie, isLoading] = useSingleMovie(id);
    if (isLoading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
            </div>
        )
    }

    return (
        <div>
            <div className='px-5 lg:px-20 my-10 grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4'>
                <div className='col-span-3 flex flex-col border-b rounded-lg shadow-md border-[#222224]'>
                    <PlayVideo
                        movie={movie}
                        isLoading={isLoading}
                    ></PlayVideo>
                </div >
                {/* details */}
                <div className=' mt-5 lg:mt-0'>
                    <ShowDetails
                        movie={movie}
                        isLoading={isLoading}
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

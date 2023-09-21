import './SingleMoviePage.css'
import { useNavigate, useParams } from 'react-router-dom';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import PlayVideo from './PlayVideo/PlayVideo';
import ShowDetails from './ShowDetails/ShowDetails';
import Loading from '../Shared/Loading';
import { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth/useAuth';
import { useGetPaymentHistoryQuery, useGetSingleMovieQuery, useSetWatchHistoryMutation } from '../../Redux/Features/API/baseApi';
import toast, { Toaster } from 'react-hot-toast';
const SingleMoviePage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { user, loading } = useAuth();
    const { data: movie, isLoading } = useGetSingleMovieQuery(id);
    const [setWatchHistory, { data: WatchHistory, isLoading: watchLoading }] = useSetWatchHistoryMutation();
<<<<<<< HEAD
    console.log(movie);

=======
    const { data: paymentData, isLoading: paymentLoading } = useGetPaymentHistoryQuery(user?.email)
>>>>>>> cb341b8038bca2f75948a0b88918e776d6efe2d2
    useEffect(() => {
        if (!loading && !isLoading) {
            const watchData = {
                movieID: id,
                email: user?.email
            };

            setWatchHistory(watchData);
        }
    }, [loading, isLoading, id,]);
    console.log(paymentData);
    useEffect(() => {
        setTimeout(() => {
            if (!paymentLoading) {
                if (paymentData) {
                    const result = paymentData.map(paid => paid.status === "proceed" || paid.paidStatus === true)
                    console.log(result);
                    const [paid] = result

                    if (paid) {
                        console.log("eligible");
                    } else {
                        toast.error("Please Payment First")
                        setTimeout(() => {
                            navigate("/choosetheplan")
                        }, 1200);
                    }
                }
            }
        }, 1000);
    }, [paymentData])

    if (loading || isLoading || paymentLoading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
            </div>
        );
    }

    return (
        <div>
            <Toaster />
            <div className='px-5 lg:px-20 lg:h-[500px] md:h-[400px] my-10 grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4'>
                <div className='col-span-3  flex flex-col border-b rounded-lg shadow-md border-[#222224]'>
                    <PlayVideo
                        movie={movie}
                        isLoading={isLoading}
                    ></PlayVideo>
                </div >
                {/* details */}
                <div className=' mt-5  lg:mt-0'>
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

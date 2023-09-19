import { Swiper, SwiperSlide } from 'swiper/react';
import useMovies from "../../../../Hooks/useMovies/useMovies";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import SectionMovieCard from '../../../Shared/SectionMovieCard/SectionMovieCard';
import './NewReleasedMovies.css'
import { Link } from 'react-router-dom';

const NewReleasedMovies = ({age}) => {

    const [movies, refetch] = useMovies({}, age);
    console.log(movies);    
    const reversedMovies = movies.slice(0);
    const newMovies = reversedMovies.reverse().slice(0, 10);

    return (
        <div className='mx-10 mt-20'>
            <h2 className='text-2xl font-semibold mb-5'>Recently Released : </h2>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                breakpoints={{
                    550: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1424: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper "
            >
                {
                    newMovies.map(movie => <SwiperSlide
                        key={movie?._id}
                    >
                        <SectionMovieCard
                            movie={movie}
                        ></SectionMovieCard>
                    </SwiperSlide>)
                }
                <SwiperSlide className=''>
                    <Link to='/show_all_movies/all'>
                        <div
                            className="rounded-lg border border-[#918282] hover:bg-[#3b0764] hover:text-white aspect-ratio-container flex justify-center"
                        >
                            <p
                                className='flex justify-center items-center text-xl text-[#dfd1d1d7]'
                            >
                                See more
                                <i className="fa-solid fa-circle-right ml-2 mt-1"></i>
                            </p>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default NewReleasedMovies;
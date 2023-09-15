import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import SectionMovieCard from '../../../Shared/SectionMovieCard/SectionMovieCard';
// import './NewReleasedMovies.css'
import useMovies from '../../../../Hooks/useMovies/useMovies';
import { Link } from 'react-router-dom';
import './TopRatedMovies.css'

const TopRatedMovies = () => {

    const movies = useMovies();
    const sortedByRating = movies[0].slice(0);
    sortedByRating.sort(function (a, b) {
        return b.IMDb_rating - a.IMDb_rating;
    });
    const topRatedMovies = sortedByRating.slice(0, 10);

    // console.log('by name:');
    console.log(topRatedMovies);

    return (
        <div className='my-20 mx-10'>
            <h2 className='text-2xl font-semibold mb-5'>Top rated : </h2>
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
                    topRatedMovies.map(movie => <SwiperSlide
                        key={movie?._id}
                    >
                        <SectionMovieCard
                            movie={movie}
                        ></SectionMovieCard>
                    </SwiperSlide>)
                }
                <SwiperSlide>
                    <Link to='/show_all_movies/top_rated'>
                        <div
                            className="rounded-lg overflow-hidden border border-[#918282] hover:bg-[#3b0764] hover:text-white aspect-ratio-container flex justify-center"
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

export default TopRatedMovies;
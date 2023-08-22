import { Swiper, SwiperSlide } from 'swiper/react';
import useMovies from "../../../../Hooks/useMovies/useMovies";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import SectionMovieCard from '../../../Shared/SectionMovieCard/SectionMovieCard';
import './NewReleasedMovies.css'

const NewReleasedMovies = () => {

    const movies = useMovies();
    const newMovies = movies.slice(0, 10);
    console.log(newMovies);

    return (
       <div className='mx-24 mt-20'>
            <h2 className='text-2xl font-semibold mb-5'>Recently Released: </h2>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
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
                <SwiperSlide>
                    <div>
                        <div className="rounded-lg overflow-hidden border border-[#918282] hover:bg-[#3b0764] hover:text-white">
                            <p className='h-[150px] flex justify-center items-center text-xl text-[#dfd1d1d7]'>See more
                                <i className="fa-solid fa-circle-right ml-2 mt-1"></i>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
       </div>
    );
};

export default NewReleasedMovies;
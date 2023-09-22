import Loading from "../../../Shared/Loading";
import TvSeriesEpisodes from "../TvSeriesEpisodes/TvSeriesEpisodes";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


const PlayTvSeries = ({ relatedEpisode, isLoading, img, id }) => {
    console.log(relatedEpisode);


    if (isLoading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
            </div>
        )
    }

    return (
        <div className="lg:mx-20 mx-4 lg:mt-20 md:mt-10 mt-10">
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
                className="mySwiper  "
                 >
                    {
                        relatedEpisode?.map(singleEpisodes => <SwiperSlide className="mySwiper">
                            <TvSeriesEpisodes
                                key={singleEpisodes.episode_number}
                                img={img}
                                id={id}
                                singleEpisodes={singleEpisodes}
                            ></TvSeriesEpisodes>
                    </SwiperSlide>)

                    }
                </Swiper>


        </div >
    );
};

export default PlayTvSeries;
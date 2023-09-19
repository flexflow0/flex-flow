import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SimilarMoviesCard from '../SimilarMoviesCard/SimilarMoviesCard';
import { Autoplay } from 'swiper/modules';
import useSimilarMovies from '../../../Hooks/useSimilarMovies/useSimilarMovies';

const SimilarMovies = ({genres}) => {

    const [similarMovies] = useSimilarMovies(genres)
    // console.log(similarMovies);
    let randomMovies = []
    for(let i = 0; i < 10; i++){
        const randomIndex = Math.floor(Math.random() * similarMovies.length);
        const randomValue = similarMovies[randomIndex];
        randomMovies.push(randomValue)
    }
    // console.log(randomMovies);

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                grabCursor={true}
                breakpoints={{
                    330: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    randomMovies.map((movie, index) => <SwiperSlide
                        key={index}
                    >
                        <SimilarMoviesCard
                            movie={movie}
                        ></SimilarMoviesCard>
                    </SwiperSlide>)
                }
                
            </Swiper>
        </>
    );
};

export default SimilarMovies;
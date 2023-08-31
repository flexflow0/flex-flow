import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import './MainBanner.css'
function MainBanner() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://localhost:5000/upcomingmovies')
      .then(response => {
        setUpcomingMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {upcomingMovies.map(movie => (
          <div key={movie._id} className="sliderImgHeight flex items-center justify-center h-300px">
            <img
              src={movie.movie_thum}
              alt={movie.movie_name}
              className="max-h-00px w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainBanner;

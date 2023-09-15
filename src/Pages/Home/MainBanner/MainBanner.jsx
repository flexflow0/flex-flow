import React, { useEffect, useState } from "react";
import "./MainBanner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"; 
import Modal from "react-modal"; // Import react-modal

const MainBanner = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieTrailerLink, setSelectedMovieTrailerLink] = useState(""); // State variable for trailer link

  
  if (!popularMovies) {
    return <div className="h-full w-full flex items-center justify-center">
    <div className="h-[200px]">
        <Loading />
    </div>

</div>
  }
  useEffect(() => {
    fetch("http://localhost:5000/upcomingmovies")
      .then((res) => res.json())
      .then((data) => setPopularMovies(data));
  }, []);



  const openModal = (trailerLink) => {
    setSelectedMovieTrailerLink(trailerLink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <div key={movie._id} className="posterImage">
              <img src={movie.movie_thum} alt={movie.movie_name} />
              <div className="posterImage__overlay">
                <div className="posterImage__title">{movie.movie_name}</div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.movie_details : ""}
                </div>
                <button
                  onClick={() => openModal(movie.trailer_link)}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

   
      
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Trailer Modal"
  style={{
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Background color of the modal overlay
    },
    content: {
      width: "500px",  // Set the width of the modal content
      height: "400px", // Set the height of the modal content
      margin: "auto",  // Center the modal horizontally
      overflow: "hidden",// Hide the overflow
      zIndex: 999, // Set the z-index for the modal content
    },
  }}>

  <button onClick={closeModal} className="text-black">Close Modal</button>
  <iframe
    width="100%"
    height="100%"
    src={selectedMovieTrailerLink}
    title="Movie Trailer"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</Modal>
    </>
  );
};

export default MainBanner;
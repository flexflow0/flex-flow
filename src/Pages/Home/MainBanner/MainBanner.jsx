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
      <div className="poster ">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <div key={movie._id} className="posterImage  ">
              <img src={movie.thumbnail} alt={movie.movie_name} />
              <div className="posterImage__overlay bg-black bg-opacity-30 relative">

              <button className="btn absolute top-14  bg-white text-[20px] hover:bg-white px-5  border-2    rounded-full border-[#830FEA] right-3 text-[#830FEA] font-semibold ">
                 UpComming 
              </button>
                
              <div className="flex flex-col justify-center items-start gap-12">
              <h1 className="md:text-5xl lg:text-5xl sm:text-3xl font-bold">{movie.title}</h1>
               
               <p  >
                 {movie ? movie.release_date : ""}
                 
               </p>
               
               <p  >
                 {movie ? movie.description : ""}
               </p>
               


               <p  > Production Company:<span>{movie.production_company}</span></p>

               <button className="btn   "
                 onClick={() => openModal(`${movie.trailer_url}`)}
                  
               >
                 Watch Trailer
               </button>

                           
              </div>

                

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
          zIndex:999,
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Background color of the modal overlay
             zIndex:999,
          },
          content: {
            width: "700px",  // Set the width of the modal content
            height: "400px", // Set the height of the modal content
            margin: "auto",  // Center the modal horizontally
            overflow: "hidden",// Hide the overflow
            zIndex: 999, // Set the z-index for the modal content
          },
        }}>

        
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


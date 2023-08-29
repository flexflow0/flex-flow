import './SingleMoviePage.css'

const SingleMoviePage = () => {
    return (
        <div
            className="relative bg-auto bg-no-repeat bg-center h-[calc(100vh)]"
            style={{ backgroundImage: 'url(https://i.ibb.co/N7cNWfh/wallpaperflare-com-wallpaper.jpg)' }}
        >
            <div
                className="flex absolute inset-0 w-full h-[calc(100vh)] px-60 pt-24 pb-16 bannerThumbnail"
            >
                <div className="w-1/3 h-full py-5">
                    <img className="h-full rounded-xl shadow-md shadow-[#e27777] object-cover" src="https://i.ibb.co/X83d3CW/xl-oppenheimer-movie-poster-a83f1cbb.jpg" alt="The Enigma Chronicles Poster" />
                </div>
                <div className="w-2/3 pl-8 flex flex-col justify-center ps-16">
                    <h1 className="text-5xl font-semibold mb-4">The Enigma Chronicles</h1>
                    <div className="mb-4 flex items-center">
                        <div className='mx-4 flex items-center'>
                            <i className="fa-solid fa-star mb-1 mr-1 text-2xl text-[#ecf842]"></i>
                            <p className=' text-4xl'>7.8</p>
                        </div>
                        <div>
                            <p className="text-[#057fb2]"><span>Released: </span>July 2023</p>
                            <p className='flex items-center justify-between'>
                                <span className='text-sm'>PG-13</span>
                                <span className='text-sm flex gap-1 items-center'>
                                    <i className="fa-solid fa-eye text-xs"></i>
                                    25
                                </span>
                                <span className='text-sm flex gap-1 items-center'>
                                    <i className="fa-solid fa-thumbs-up text-xs"></i>
                                    12
                                </span>
                            </p>
                            <p></p>
                        </div>
                    </div>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos maxime voluptates vero non exercitationem libero at ipsa, quam aut explicabo. Pariatur suscipit impedit debitis eos officiis commodi assumenda
                    </p>
                    <div className="flex space-x-4 mb-4">
                        <a
                            className="bg-[#39134b] text-white px-4 py-2 rounded hover:bg-transparent border-2 border-[#39134b] "
                            href="[YourMovieStreamPlatform]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Watch Now
                        </a>
                        <a
                            className="border-2 border-[#39134b] text-[white] px-4 py-2 rounded hover:bg-[#39134b] hover:text-white"
                            href="[Link to Official Trailer]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Watch Trailer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMoviePage;

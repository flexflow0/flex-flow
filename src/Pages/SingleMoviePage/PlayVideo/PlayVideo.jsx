
const PlayVideo = ({ movie, refetch, user }) => {
    let isLike = false;

    const handleLike = (like) => {
        const data = {
            id: movie?._id,
            email: user?.email,
            to: "likes",
            action: like
        }
        fetch('http://localhost:5000/users/lists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            })
    }

    return (
        < div className='col-span-3 flex flex-col' >
            <div className="grow rounded-lg overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    src={movie?.movie_url}
                    title={movie?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen='true'
                ></iframe>
            </div>
            <p className='my-1 mx-2 flex justify-between'>
                <div>

                </div>
                <div className="flex">
                    {/* <button >
                        <i className="fa-solid fa-thumbs-up"></i>
                    </button> */}
                    <button
                        onClick={() => handleLike(!isLike)}
                    >
                        <i className="fa-regular fa-thumbs-up"></i>
                    </button>
                    <button
                        className="btn btn-sm rounded-lg btn-outline btn-primary text-white bg-[#5668cf] flex gap-1 align-middle ms-5"
                    >
                        <i className="fa-solid fa-plus text-white"></i>
                        <span className='text-white capitalize'>
                            Watch later
                        </span>
                    </button>
                    {/* <button
                            className="btn btn-sm rounded-lg btn-outline btn-primary text-white bg-[#5668cf] flex gap-1 align-middle"
                        >
                            <i className="fa-solid fa-minus text-white"></i>
                            <span className='text-white capitalize'>
                                Remove
                            </span>
                        </button> */}
                </div>
            </p>
        </div >
    );
};

export default PlayVideo;
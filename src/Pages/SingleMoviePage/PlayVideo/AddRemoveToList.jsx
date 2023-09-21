import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useUser from "../../../Hooks/useUser/useUser";
import { FaDownload } from 'react-icons/fa';

const AddRemoveToList = ({ movie }) => {
    const { user, loading } = useContext(AuthContext);
    const playerRef = useRef(null);

    let isLike = false;
    let isFavorite = false;
    let isWatchList = false;
    if (loading) {
        return (
            <div className='flex justify-center my-auto'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    const [userData, isLoading, refetch] = useUser(user?.email)
    if (isLoading) {
        return (
            <div className='flex justify-center my-auto'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    // console.log(userData?.likes.includes(id));
    isLike = userData?.likes?.includes(movie?._id);
    isFavorite = userData?.favorites?.includes(movie?._id);
    isWatchList = userData?.WatchList?.includes(movie?._id);
    // console.log(userData?.likes, userData?.favorites, userData?.WatchList);
    // console.log(isLike, isFavorite, isWatchList);

    const handleLike = (like) => {
        const data = {
            id: movie._id,
            email: userData?.email,
            to: "likes",
            action: like
        }
        fetch('https://flex-flow-server.vercel.app/users/lists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                refetch();
                isLike = like;
            })
    }
    
    const handleFavorite = (favorite) => {
        const data = {
            id: movie._id,
            email: userData?.email,
            to: "favorites",
            action: favorite
        }
        fetch('https://flex-flow-server.vercel.app/users/lists', {
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
                isFavorite = favorite;
            })
    }

    const handleWatchList = (watchList) => {
        const data = {
            id: movie._id,
            email: userData?.email,
            to: "WatchList",
            action: watchList
        }
        fetch('https://flex-flow-server.vercel.app/users/lists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                isWatchList = watchList;
            })
    }

    const handleClose = () => {
        if (playerRef.current) {
            playerRef.current.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
    }
    // ----------------------Arafat-----------------
    const videoURL = movie?.movie_url;
    const downloadVideo = () => {
        const a = document.createElement('a');
        a.href = videoURL;
        a.download = 'movie?.title';
        a.click();
    }

    return (
        <>
            {/* Modal */}
            <dialog id="my_modal_3" className="modal w-3/4 mx-auto">
                <form method="dialog" className='modal-box   w-11/12 max-w-5xl'>
                    <button
                        onClick={handleClose}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >✕</button>
                    <iframe width="100%" height="450"
                        src={movie?.trailer_url}
                        title={movie?.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen='true'
                        ref={playerRef}
                    ></iframe>
                </form>
            </dialog>
            <p className='my-1 mx-2 flex justify-between'>
                <div className="flex">
                    <button
                        onClick={() => document.getElementById('my_modal_3').showModal()}
                        className="mt-1 btn btn-sm rounded-full btn-outline hover:bg-[#39134b] hover:text-white"
                    >
                        <span className="capitalize">Trailer</span>
                        <i class="fa-solid fa-play text-white ms-0"></i>
                    </button>
                </div>
                <div className="flex mt-1">
                    {
                        isLike ?
                            <button
                                onClick={() => handleLike(!isLike)}
                            >
                                <i className="fa-solid fa-thumbs-up text-xl text-[#3534a1]"></i>
                            </button> :
                            <button
                                onClick={() => handleLike(!isLike)}
                            >
                                <i className="fa-solid fa-thumbs-up text-xl text-[white]"></i>
                            </button>
                    }
                    {
                        isFavorite ?
                            <button
                                onClick={() => handleFavorite(!isFavorite)}
                                className="rounded-lg text-white mt-[3px] flex gap-1 align-middle ms-2 md:ms-5"
                            >
                                <i class="fa-sharp fa-solid fa-heart text-xl text-[#d62525e8]"></i>
                            </button> :
                            <button
                                onClick={() => handleFavorite(!isFavorite)}
                                className="rounded-lg text-white mt-[3px] flex gap-1 align-middle ms-2 md:ms-5"
                            >
                                <i class="fa-sharp fa-regular fa-heart text-xl text-white"></i>
                            </button>
                    }
                    <button className="text-white pl-3" onClick={downloadVideo}>
                        <FaDownload></FaDownload>
                    </button>
                    {
                        isWatchList ?
                            <button
                                onClick={() => handleWatchList(!isWatchList)}
                                className="rounded-lg text-white flex gap-1 align-middle ms-0 md:ms-2 mx-0 mt-1"
                            >
                                <i className="fa-solid fa-minus text-white mt-1 ms-2"></i>
                                <span className='text-white capitalize'>
                                    Watch later
                                </span>
                            </button> :
                            <button
                                onClick={() => handleWatchList(!isWatchList)}
                                className="rounded-lg text-white flex gap-1 align-middle ms-0 md:ms-2 mx-0 mt-1"
                            >
                                <i className="fa-solid fa-plus text-white mt-1 ms-2"></i>
                                <span className='text-white capitalize'>
                                    Watch later
                                </span>
                            </button>

                    }
                </div>
            </p>
        </>
    );
};

export default AddRemoveToList;
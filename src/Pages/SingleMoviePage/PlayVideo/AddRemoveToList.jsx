import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useUser from "../../../Hooks/useUser/useUser";

const AddRemoveToList = ({ movie }) => {
    const { user, loading } = useContext(AuthContext);
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
    isLike = userData?.likes.includes(movie._id);
    isFavorite = userData?.favorites.includes(movie._id);
    isWatchList = userData?.WatchList.includes(movie._id);
    // console.log(userData?.likes, userData?.favorites, userData?.WatchList);
    // console.log(isLike, isFavorite, isWatchList);

    const handleLike = (like) => {
        const data = {
            id: movie._id,
            email: userData?.email,
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
        fetch('http://localhost:5000/users/lists', {
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
                isWatchList = watchList;
            })
    }

    return (
        <>
            {/* Modal */}
            <dialog id="my_modal_3" className="modal w-3/4 mx-auto">
                <form method="dialog" className='modal-box   w-11/12 max-w-5xl'>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <iframe width="100%" height="450" src={movie?.trailer_url} title={movie?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='true'></iframe>
                </form>
            </dialog>
            <p className='my-1 mx-2 flex justify-between'>
                <div>
                    <button className="mt-1 btn btn-sm rounded-full btn-outline">
                        <span className="capitalize">Trailer</span>
                        <i class="fa-solid fa-play text-white ms-2"></i>
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
                                className="btn btn-sm no-animation hover:bg-opacity-0 rounded-lg btn-outline border-0 bg-opacity-0 text-white bg-[#5668cf] flex gap-1 align-middle ms-5"
                            >
                                <i class="fa-sharp fa-solid fa-heart text-xl text-[#d62525e8]"></i>
                            </button> :
                            <button
                                onClick={() => handleFavorite(!isFavorite)}
                                className="btn btn-sm no-animation hover:bg-opacity-0 rounded-lg btn-outline border-0 bg-opacity-0 text-white bg-[#5668cf] flex gap-1 align-middle ms-5"
                            >
                                <i class="fa-sharp fa-regular fa-heart text-xl text-white"></i>
                            </button>
                    }
                    {
                        isWatchList ?
                            <button
                                onClick={() => handleWatchList(!isWatchList)}
                                className="btn btn-sm no-animation hover:bg-opacity-0 rounded-lg btn-outline border-0 bg-opacity-0 text-white bg-[#5668cf] flex gap-1 align-middle ms-2"
                            >
                                <i className="fa-solid fa-minus text-white"></i>
                                <span className='text-white capitalize'>
                                    Watch later
                                </span>
                            </button> :
                            <button
                                onClick={() => handleWatchList(!isWatchList)}
                                className="btn btn-sm no-animation hover:bg-opacity-0 rounded-lg btn-outline border-0 bg-opacity-0 text-white bg-[#5668cf] flex gap-1 align-middle ms-2"
                            >
                                <i className="fa-solid fa-plus text-white"></i>
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
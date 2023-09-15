import { useEffect, useState } from "react";
import Movi from "./Movi";
import useAuth from "../../../../Hooks/useAuth/useAuth";

const WatchLater = () => {
    const [movies, setMovies] = useState([]);
    const {user} = useAuth();
    console.log(user)

    useEffect(() => {
        fetch(`http://localhost:5000/watchLaterMovies/?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);
    console.log(movies);
    return (
        <div className="grid grid-cols-4 gap-5 p-5   ">  
            {
                movies.map(movie => <div className="gap-5 border-2 border-purple-600 p-5 rounded">
                        <Movi movie={movie}></Movi>
                    </div>)
                // movies.map(movie => <div className="gap-5 border-2 border-purple-600 p-5 rounded">
                //     <div>
                //     <iframe
                //                     width="100%"
                //                     height="100%"
                //                     src={movie?.movie_url}
                //                     title={movie?.title}
                //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                //                     allowfullscreen='true'
                //                 ></iframe>
                //     </div>
                //     <div><img className="w-60 h-40 mt-10" src={movie.thumbnail} alt="" />
                // <p className="mt-2">{movie.title}</p>
                // <p>{movie.IMDb_rating}</p></div>
                // </div>)
            }


        </div>
    );
};

export default WatchLater;
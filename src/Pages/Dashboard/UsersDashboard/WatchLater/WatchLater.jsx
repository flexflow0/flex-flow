import { useEffect, useState } from "react";

const WatchLater = () => {
    const [da, setda] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/movies")
            .then((res) => res.json())
            .then((data) => setda(data));
    }, []);
    console.log(da);
    return (
        <div className="grid grid-cols-4 gap-5 p-5   ">  
            {
                da.map(sala => <div className="gap-5 border-2 border-purple-600 p-5 rounded">
                    <div><img className="w-60 h-40 mt-10" src={sala.thumbnail} alt="" />
                <p className="mt-2">{sala.title}</p>
                <p>{sala.IMDb_rating}</p></div>
                </div>)
            }


        </div>
    );
};

export default WatchLater;
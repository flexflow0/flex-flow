

const PopularFlicksDetails = ({popular}) => {
    return (
        <div>
            <div className="px-8 w-60">
                <img className=" border-solid border-2 border-gray-600 rounded-lg shadow-xl hover" src={popular.movie.thumbnail} alt="Movie" />
                <div className="flex ml-1 ">
                    <h2 className=" font-bold mx-auto">{popular.movie.name}</h2>
                    <h2 className=" font-bold mx-auto">{popular.movie.rating}</h2>
                </div>
            </div>
        </div>
    );
};

export default PopularFlicksDetails;
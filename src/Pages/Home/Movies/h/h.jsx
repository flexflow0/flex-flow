
const Movie = ({mr}) => {
    console.log(mr);
    console.log(mr.movie.thumbnail);
    return (
        <div>
            <img src={mr.movie.thumbnail} alt="" />
            
        </div>
    );
};

export default Movie;
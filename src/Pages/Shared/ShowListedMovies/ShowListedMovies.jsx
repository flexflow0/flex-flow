import React from 'react';
import useLists from '../../../Hooks/useLists/useLists';
import Loading from '../Loading';

const ShowListedMovies = (list) => {
    console.log(list);
    if(list.list.length === 0){
        return (
            <div>
                <p>Nothing to show</p>
            </div>
        )
    }
    const [movies, isLoading, refetch] = useLists(list);
    if (isLoading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
                <p>ijhhid</p>
            </div>
        )
    }
    // console.log(movies);
    return (
        <div>
            {
                movies.map(movie => <p>{movie.title}</p>)
            }
        </div>
    );
};

export default ShowListedMovies;
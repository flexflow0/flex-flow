import React from 'react';
import useLists from '../../../Hooks/useLists/useLists';
import Loading from '../Loading';
import ListCard from '../ListCard/ListCard';

const ShowListedMovies = ({list, to}) => {
console.log(list);
    const [movies, isLoading, refetch] = useLists(list);
    if (isLoading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
            </div>
        )
    }

    return (
        <div className='mx-10 my-10'>
            <p className='text-center'><h2 className='text-3xl mb-5'>Showing result: {movies.length}</h2></p>
            {
                movies.map(movie => <ListCard
                    movie={movie}
                    refetch={refetch}
                    to={to}
                ></ListCard>)
            }
        </div>
    );
};

export default ShowListedMovies;
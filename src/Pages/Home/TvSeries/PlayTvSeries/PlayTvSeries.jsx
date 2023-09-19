import Loading from "../../../Shared/Loading";
import TvSeriesEpisodes from "../TvSeriesEpisodes/TvSeriesEpisodes";

const PlayTvSeries = ({relatedEpisode,isLoading,img,id}) => {
    console.log(relatedEpisode);


    if (isLoading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
            </div>
        )
    }

    return (
        <div>
            <div className="mt-20 grid grid-cols-6 gap-5">
                {
                  relatedEpisode?.map(singleEpisodes =>
                    <TvSeriesEpisodes
                    key={singleEpisodes.episode_number}
                    img={img}
                    id={id}
                    singleEpisodes={singleEpisodes}
                    ></TvSeriesEpisodes>)
  
                }

            </div>

        </div>
    );
};

export default PlayTvSeries;
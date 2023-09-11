import { useParams } from "react-router-dom";
import TvSeriesCard from "../TvSeriesCard/TvSeriesCard";
import useTvSeries from "../useTvSeries/useTvSeries";

const ShowAllTvSeries = () => {

    const region =useParams()
    const  tvSeries =  useTvSeries(region)
    return (
        <div className="grid grid-cols-5 gap-5 my-5 mx-5">
            {
                tvSeries[0].map(series => <TvSeriesCard
                     key={series._id}
                     series={series}
                     ></TvSeriesCard> )
            }
        </div>
    );
};

export default ShowAllTvSeries;
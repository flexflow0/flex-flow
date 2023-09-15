import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useGetWatchHistoryQuery } from "../../../../Redux/Features/API/baseApi";
import DashboardTop from "../../../../components/dashboardTop";
import Loading from "../../../Shared/Loading";
import WatchHistoryCard from "./WatchHistoryCard";

const WatchHistory = () => {
    const { user, loading } = useAuth()
    if (loading) {
        return <div className="h-screen w-full flex items-center justify-center">
            <div className="h-[200px]">
                <Loading />
            </div>
        </div>
    }
    const { data: WatchHistory, isLoading } = useGetWatchHistoryQuery(user?.email)
    if (isLoading) {
        return <div className="h-screen w-full flex items-center justify-center">
            <div className="h-[200px]">
                <Loading />
            </div>
        </div>
    }

    console.log(WatchHistory);
    return (
        <div className="MyContainer">
            <DashboardTop />
            <div className="flex MyContainer  my-3">
                <h1 className="w-full text-2xl font5">Total Contents: {WatchHistory?.length || 0}</h1>

                <input type="text" placeholder="Search By Name or Email..." name="search" className="input input-bordered w-full max-w-[500px] rounded-full border-[#8700f5] border-2" required />
            </div>
            {WatchHistory?.map((data) => <WatchHistoryCard
                key={data._id}
                data={data}
            ></WatchHistoryCard>)}
        </div>
    );
};

export default WatchHistory;
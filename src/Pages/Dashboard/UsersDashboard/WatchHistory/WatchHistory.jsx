import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useDeleteAllHistoryMutation, useGetWatchHistoryQuery } from "../../../../Redux/Features/API/baseApi";
import DashboardTop from "../../../../components/dashboardTop";
import Loading from "../../../Shared/Loading";
import WatchHistoryCard from "./WatchHistoryCard";
import { FcEmptyTrash, FcFullTrash } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

const WatchHistory = () => {
    const { user, loading } = useAuth();
    const [deleteAllHistory, { data: deleteResponse, isLoading: deletingLoading }] = useDeleteAllHistoryMutation();
    const { data: WatchHistory, isLoading, refetch } = useGetWatchHistoryQuery(user?.email);

    useEffect(() => {
        if (!loading) {
            refetch();
        }
    }, [loading]);

    // Declare sortedWatchHistory using useState
    const [sortedWatchHistory, setSortedWatchHistory] = useState([]);

    // Move the sorting logic outside of the useEffect
    useEffect(() => {
        if (WatchHistory) {
            // Create a copy of the array and sort it
            const sortedHistory = [...WatchHistory].sort((a, b) => b.index - a.index);
            setSortedWatchHistory(sortedHistory);
        } else {
            setSortedWatchHistory([]);
        }
    }, [WatchHistory]);

    const handleDeleteAll = () => {
        // Check if there is watch history to delete
        if (sortedWatchHistory.length > 0) {
            // Call the deleteAllHistory mutation
            deleteAllHistory(user?.email);
        } else {
            // Show a message or toast indicating that there's nothing to delete
            toast.error("Nothing to be deleted.");
        }
    }

    useEffect(() => {
        // Check if deleteResponse contains data indicating successful deletion
        if (!deletingLoading && deleteResponse && deleteResponse?.modifiedCount > 0) {
            toast.success("All Contents Successfully Deleted")
            // Clear the sorted watch history
            setSortedWatchHistory([]);
        }
    }, [deleteResponse]);

    return (
        <div className="MyContainer">
            <DashboardTop />
            <Toaster />
            <div className="flex MyContainer my-3">
                <h1 className="w-full text-2xl font5">Total Contents: {sortedWatchHistory?.length || 0}</h1>
                <button
                    onClick={handleDeleteAll}
                    className="flex gap-2 w-40 font-semibold text-red-600 rounded-full px-4 py-1 bg-[#f2d6ff]  border-2 border-[#9747ff]">
                    {sortedWatchHistory.length > 0 ? (
                        <>
                            <FcFullTrash size={27} /> Delete All
                        </>
                    ) : (
                        <span className=" text-gray-500 flex gap-2">
                            <FcEmptyTrash size={27} /> Empty
                        </span>
                    )}
                </button>
            </div>
            {sortedWatchHistory?.map((data) => (
                <WatchHistoryCard
                    key={data._id}
                    data={data}
                    user={user}
                    refetch={refetch}
                />
            ))}

        </div>
    );
};

export default WatchHistory;

import { useState } from "react";
import useUser from "../../../Hooks/useUser/useUser";
import OnlyVideo from "./OnlyVideo";
import AddRemoveToList from "./AddRemoveToList";
import Loading from "../../Shared/Loading";

const PlayVideo = ({ movie, isLoading }) => {

    if (isLoading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
            </div>
        )
    }

    return (
        <>
            <OnlyVideo
                movie={movie}
                isLoading={isLoading}
            ></OnlyVideo>
            <AddRemoveToList
                movie={movie}
            ></AddRemoveToList>

        </>
    );
};

export default PlayVideo;
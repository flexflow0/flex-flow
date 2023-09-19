import { useState } from "react";

const SingelShort = ({ shortvideo }) => {
    // console.log(shortvideo);
    const { title, like, videolink, hashtags, comments } = shortvideo
   
    return (
        <div  className=" content-center">
            <div className="  flex justify-center mt-10">
                <div> <iframe className=""
                    width="100%"
                    height="500px"
                    src={videolink}
                    // title={movie?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen='true'
                ></iframe>
                </div>
                <div className="mt-52">
                    <div>
                        <img className=" mt-5 w-[50px] h-[50px] p-2 bg-purple-900 rounded-full" src="https://i.ibb.co/647J5mx/like.png" />
                    </div>
                    <div>
                        <img className=" mt-5 w-[50px]  h-[50px] p-2  bg-purple-900 rounded-full" src="https://i.ibb.co/LkgLrZ3/354966-200.png" />
                    </div>
                    <div>
                        <img className=" mt-5 w-[50px]  h-[50px] p-2 bg-purple-900 rounded-full" src="https://i.ibb.co/6yfd8kM/more-icon.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelShort;
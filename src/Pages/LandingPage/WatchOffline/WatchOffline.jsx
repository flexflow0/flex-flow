import Lottie from "lottie-react-web";
import downloadAni from '../../../../public/downloadVideo.json';
const WatchOffline = () => {
    return (
        <div className="border-y-2 border-purple-800">
            <div className="flex justify-between my-28 h-[450px] px-20 text-white">
                <div className=" ml-20  mt-20">
                    <Lottie
                        options={{
                            animationData: downloadAni
                        }}
                    />
                </div>
                <div className=" my-auto ">
                    <h1 className="text-6xl font-bold">Download your<br /> shows  to  watch<br /> offline</h1>
                    <p className="text-2xl mt-5">Save your favorites easily and always have
                        something to watch.</p>
                </div>


            </div>

        </div>
    );
};

export default WatchOffline;
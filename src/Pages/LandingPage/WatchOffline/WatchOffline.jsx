import Lottie from "lottie-react-web";
import downloadAni from '../../../../public/downloadVideo.json';
const WatchOffline = () => {
    return (
        <div className="border-y-2 border-purple-800">
            <div className="flex MyContainer justify-between my-28 h-[450px] text-white">
                <div className="w-full mt-20">
                    <Lottie className="mr-auto"
                        options={{
                            animationData: downloadAni
                        }}
                    />
                </div>
                <div className=" my-auto w-full">
                    <h1 className="text-6xl font-bold">Download your<br /> shows  to  watch<br /> offline</h1>
                    <p className="text-2xl mt-5">Save your favorites easily and always have
                        something to watch.</p>
                </div>


            </div>

        </div>
    );
};

export default WatchOffline;
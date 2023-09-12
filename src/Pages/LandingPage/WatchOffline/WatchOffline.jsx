import Lottie from "lottie-react-web";
import downloadAni from '../../../../public/downloadVideo.json';
const WatchOffline = () => {
    return (
        <div className="border-y-2 border-purple-800">
            <div className="lg:flex MyContainer justify-between mx-auto lg:my-28 lg:h-[450px] text-white">
                <div className="w-full lg:mt-20">
                    <Lottie className="mr-auto"
                        options={{
                            animationData: downloadAni
                        }}
                    />
                </div>
                <div className=" lg:my-auto mx-auto mb-4 ml-5  w-full">
                    <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold">Download your<br /> shows  to  watch<br /> offline</h1>
                    <p className="lg:text-4xl md:text-4xl text-2xl mt-5">Save your favorites easily and always have
                        something to watch.</p>
                </div>


            </div>

        </div>
    );
};

export default WatchOffline;
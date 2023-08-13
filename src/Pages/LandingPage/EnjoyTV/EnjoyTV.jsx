import Lottie from "lottie-react-web";
import watchTvANi from '../../../../public/watchingTv.json';
const EnjoyTV = () => {
    return (
        <div className="border-y-2  border-purple-800">
            <div className="flex MyContainer my-28 h-[450px]  text-white">
                <div className="w-full my-auto ">
                    <h1 className="text-6xl font-bold">Enjoy on your TV</h1>
                    <p className="text-2xl mt-5">Watch on Smart TVs, Playstation, Xbox, <br />
                        Chromecast, Apple TV, Blu-ray players, and more.</p>

                </div>
                <div className="w-full mt-20">
                    <Lottie
                        options={{
                            animationData: watchTvANi
                        }}
                    />

                </div>

            </div>

        </div>
    );
};

export default EnjoyTV;
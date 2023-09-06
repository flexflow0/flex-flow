import Lottie from "lottie-react-web";
import watchTvANi from '../../../../public/watchingTv.json';
const EnjoyTV = () => {
    return (
        <div className="border-y-2 py-4 border-purple-800 ">
            <div className="lg:flex lg:h-[450px] lg:px-20 px-12 text-white items-center">
                <div className="w-full  ">
                    <h1 className="lg:text-6xl text-4xl font-bold">Enjoy on your TV</h1>
                    <p className="text-2xl  mt-5">Watch on Smart TVs, Playstation, Xbox, <br />
                        Chromecast, Apple TV, Blu-ray players, and more.</p>

                </div>
                <div className="w-full mt-20 h-[500px]">
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
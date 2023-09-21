import Lottie from "lottie-react-web";
import kidsAni from '../../../../public/kids.json';
const ProfilesKids = () => {
    return (
        <div className=" MyContainer border-y-2 py-16 border-purple-800">
            <div className="flex flex-col-reverse md:flex-row lg:h-[450px] lg:px-20  text-white items-center">
                <div className=" w-full  ">
                    <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold">Create profiles<br /> for kids</h1>
                    <p className="text-2xl mt-5">Send kids on adventures with their favorite<br />
                        characters in a space made just for them—free <br />
                        with your membership.</p>

                </div>
                <div className="w-full mt-10 lg:h-[450px] h-[400px] ">
                    <Lottie
                        options={{
                            animationData: kidsAni
                        }}
                    />

                </div>

            </div>

        </div>
    );
};

export default ProfilesKids;
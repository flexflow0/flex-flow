import Lottie from "lottie-react-web";
import kidsAni from '../../../../public/kids.json';
const ProfilesKids = () => {
    return (
        <div className="MyContainer border-y-2 py-16 border-purple-800">
            <div className="lg:flex lg:h-[450px] lg:px-20 px-12 text-white items-center">
                <div className=" w-full  ">
                    <h1 className="text-6xl font-bold">Create profiles<br /> for kids</h1>
                    <p className="text-2xl mt-5">Send kids on adventures with their favorite<br />
                        characters in a space made just for them—free <br />
                        with your membership.</p>

                </div>
                <div className="w-full mt-20 h-[500px]">
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
import Lottie from "lottie-react-web";
import kidsAni from '../../../../public/kids.json';
const ProfilesKids = () => {
    return (
        <div className="border-y-2 py-16 border-purple-800">
            <div className="flex MyContainer justify-between my-20 h-[450px] px-20 text-white">
                <div className=" ml-40 my-auto ">
                    <h1 className="text-6xl font-bold">Create profiles<br /> for kids</h1>
                    <p className="text-2xl mt-5">Send kids on adventures with their favorite<br />
                        characters in a space made just for them—free <br />
                        with your membership.</p>

                </div>
                <div className="  mt-20">
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
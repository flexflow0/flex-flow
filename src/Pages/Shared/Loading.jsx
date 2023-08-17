import Lottie from 'lottie-react-web';
import animation from '../../../public/pLayButton.json';
const Loading = () => {
    return (
        <div className='h-[100vh]'>
            <Lottie options={{
                animationData: animation
            }}
            />
        </div>
    );
};

export default Loading;
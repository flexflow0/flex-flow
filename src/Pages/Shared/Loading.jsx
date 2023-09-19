import Lottie from 'lottie-react-web';
import animation from '../../../public/pLayButton.json';
const Loading = () => {
    return (
        <Lottie options={{
            animationData: animation
        }}
        />
    );
};

export default Loading;
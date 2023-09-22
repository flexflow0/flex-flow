import { useEffect, useState } from 'react';
import SingelShort from './singelShort';
import './ShortVideos.css'


const ShortVideos = () => {
    const [short, setShort] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/shortVideos')
            .then(data => data.json())
            .then(data => setShort(data))
    }, [])

    const handleScroll = (e) => {
        setScrollPosition(e.target.scrollTop);
    };

    return (
        <div className=''>
            <div onScroll={handleScroll} className='  video-feed h-[600px]'>
                {
                    short.map(shortvideo => <SingelShort key={shortvideo._id} shortvideo={shortvideo} ></SingelShort>)
                }

            </div>

        </div>
    );
};

export default ShortVideos;
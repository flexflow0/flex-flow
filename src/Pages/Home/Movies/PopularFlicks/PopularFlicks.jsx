import { useEffect, useState } from "react";
import PopularFlicksDetails from "./PopularFlicksDetails";



const PopularFlicks = () => {

  const [Populars, setPopulars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://flex-flow-server-gold.vercel.app/movies');
        const jsonData = await response.json();
        const sortedData = jsonData.sort((a, b) => a.rating - b.rating);
        const topSixData = sortedData.slice(0, 6);
        console.log(topSixData);
        setPopulars(topSixData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-10">
        <h1 className="uppercase text-center text-[#830FEA] font-bold text-4xl">popular flicks</h1>
        <hr className="w-[500px] mx-auto border-[#830FEA] border-1 mb-2" />
        <h4 className="text-white text-center mb-2">Captivating Tales on the Big Screen</h4>
        <hr className="w-[500px] mx-auto border-[#830FEA] border-1" />
      </div>

      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:mx-auto gap-2 px-5 mb-20">
        {
          Populars.map(popular => <PopularFlicksDetails
            key={popular._id}
            popular={popular}
          ></PopularFlicksDetails>)
        }
      </div>
      <hr className="border-[#830FEA] mb-20" />


    </div>
  );
};

export default PopularFlicks;
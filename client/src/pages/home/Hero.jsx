import { Button } from "../../components/ui/button";
// import mobile8 from "../../assets/iphone/uniqueDesign.png";
import mobile7 from "../../assets/iphone/14Pro.png";
import mobile1 from "../../assets/mobile1.png";
import mobile2 from "../../assets/iphone/two.png";
import mobile3 from "../../assets/iphone/three.png";
import mobile4 from "../../assets/iphone/four.png";
import mobile5 from "../../assets/iphone/five.png";
import mobile6 from "../../assets/iphone/six.png";
import mobile8 from "../../assets/iphone/seven.png";
import mobile9 from "../../assets/iphone/nine.png";
import mobile10 from "../../assets/iphone/ten.png";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [images, setImages] = useState([
    mobile1,
    mobile2,
    // mobile8,
    mobile3,
    mobile6,
    mobile4,
    mobile8,
    mobile7,
    mobile5,
    mobile9,
    mobile10,
  ]);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setImages((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center bg-gray-900 px-5 sm:px-15 mt-5 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:pt-35 gap-5">
        <div className="flex flex-col max-sm:items-center max-sm:text-center space-y-5 max-sm:pt-20">
          {/* <p className="text-white">Pro.Beyond.</p> */}
          <h2 className="text-white text-7xl font-light">Iphone 17 pro</h2>
          <p className="text-white text-xl text-pretty">
            Create a change everything for better. For every one
          </p>
          <div className="flex mt-10 gap-5">
            <Button
              variant="outline"
              className="bg-transparent text-white font-bold w-30 py-5 hover:scale-105 cursor-pointer"
              onClick={() => {
                navigate("/products");
              }}
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black font-bold w-30 py-5 hover:bg-transparent hover:text-white hover:scale-105 cursor-pointer"
              onClick={()=>navigate('/sell')}
            >
              Sell Item
            </Button>
          </div>
        </div>
        <div className="relative w-full h-105 flex justify-center items-center">
          <img
            src={images[0]}
            alt="Phone"
            className={`
              absolute bottom-0 w-full h-full object-contain
              transition-all duration-500 ease-in-out
              ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          />
        </div>
      </div>
      {/* <svg
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-20 absolute -bottom-5 left-0"
      >
        <path
          d="M 0,400 L 0,225 C 127.02392344497608,251.23923444976077 254.04784688995215,277.47846889952154 337,260 C 419.95215311004785,242.52153110047848 458.83253588516743,181.32535885167462 532,157 C 605.1674641148326,132.67464114832538 712.6220095693781,145.2200956937799 811,131 C 909.3779904306219,116.77990430622009 998.6794258373204,75.79425837320574 1102,37 C 1205.3205741626796,-1.794258373205738 1322.66028708134,-38.39712918660287 1440,-75 L 1440,400 L 0,400 Z"
          fill="#FAFAFA"
          className="transition-all duration-300 ease-in-out"
        />
      </svg> */}
    </section>
  );
}

export default Hero;

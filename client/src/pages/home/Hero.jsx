import { Button } from "../../components/ui/button";
import mobile1 from "../../assets/mobile1.png";
import mobile2 from "../../assets/iphone/two.png";
import mobile3 from "../../assets/iphone/three.png";
import mobile4 from "../../assets/iphone/four.png";
import mobile5 from "../../assets/iphone/uniqueDesign.png";
import mobile6 from "../../assets/iphone/14Pro.png";
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [images, setImages] = useState([
    mobile1,
    mobile2,
    mobile3,
    mobile4,
    mobile5,
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
    <section className="w-full flex items-center bg-gray-900 px-15 overflow-hidden mt-15">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 pt-20">
        <div className="flex flex-col justify-center max-sm:items-center max-sm:text-center space-y-5 max-sm:pt-20">
          {/* <p className="text-white">Pro.Beyond.</p> */}
          <h2 className="text-white text-7xl font-light">Iphone 17 pro</h2>
          <p className="text-white text-xl text-pretty">
            Create a change everything for better. For every one
          </p>
          <div className="flex mt-10 gap-5">
            <Button
              variant="outline"
              className="bg-transparent text-white font-bold w-30 py-5 hover:scale-105 cursor-pointer"
              onClick={() => {navigate("/products")}}
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black font-bold w-30 py-5 hover:bg-transparent hover:text-white hover:scale-105 cursor-pointer"
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
              absolute bottom-0 w-full max-w-90 object-fill
              transition-all duration-500 ease-in-out
              ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

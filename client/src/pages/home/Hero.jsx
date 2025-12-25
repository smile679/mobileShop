import { Button } from "../../components/ui/button";
import mobile1 from "../../assets/mobile1.png"
import mobile2 from "../../assets/iphone/uniqueDesign.png"

function Hero() {
  return ( 
    <section className="w-full min-h-screen bg-[#211C24] px-15 overflow-hidden">
      <div className="max-w-6xl mx-auto h-full grid grid-cols-1 sm:grid-cols-2 pt-20">
        <div className="flex flex-col justify-center max-sm:items-center max-sm:text-center space-y-5 max-sm:pt-20">
          {/* <p className="text-white">Pro.Beyond.</p> */}
          <h2 className="text-white text-7xl font-light">Iphone 17 pro</h2>
          <p className="text-white text-xl text-pretty">Create a change everything for better. For every one</p>
          <div className="flex mt-10 gap-5">
            <Button variant="outline" className="bg-transparent text-white font-bold w-30 py-5 hover:scale-105 cursor-pointer">Shop Now</Button>
            <Button variant="outline" className="bg-white text-black font-bold w-30 py-5 hover:bg-transparent hover:text-white hover:scale-105 cursor-pointer">Sell Item</Button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={mobile1} alt="" className="w-85 object-contain" />
        </div>
      </div>
    </section>
   );
}

export default Hero;
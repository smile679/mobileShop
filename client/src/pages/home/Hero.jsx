import { Button } from "../../components/ui/button";
import mobile1 from "../../assets/mobile1.png"

function Hero() {
  return ( 
    <section className="w-full bg-[#211C24] px-15 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col justify-center max-sm:items-center max-sm:text-center space-y-5  max-sm:pt-20">
          {/* <p className="text-white">Pro.Beyond.</p> */}
          <h2 className="text-white text-7xl font-light">Iphone 17 pro</h2>
          <p className="text-white text-xl text-pretty">Create a change everything for better. For every one</p>
          <Button variant="outline" className="bg-transparent text-white max-w-30 py-5">Shop Now</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={mobile1} alt="" className="w-85 object-contain" />
        </div>
      </div>
    </section>
   );
}

export default Hero;
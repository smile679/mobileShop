import iphone from "../../assets/New-arrivals/iphone_14_pro.png"
import headSet from "../../assets/New-arrivals/headSet.png"
import smartWatch from "../../assets/New-arrivals/smartWatch.png"
import tablet from "../../assets/New-arrivals/tablet.png"
import { Button } from "../../components/ui/button"

function Discounts() {
   const discountProducts = [{
      image : iphone,
      title : "Iphone 14 pro max 128Gb Deep Purple",
      price : "100 birr",
    },
    {
      image : smartWatch,
      title : "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
      price : "1200 birr",
    },
    {
      image : headSet,
      title : "AirPods Max Silver Starlight Aluminium",
      price : "6200 birr",
    },
    {
      image : tablet,
      title : `Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`,
      price : "4200 birr",
    },]


  return ( 
    <section className="w-full my-15 md:my-30 px-5">
      <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-xl mb-5 font-semibold">Discounts up to -50%</h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
            {
              discountProducts && discountProducts ?
              discountProducts.map((item, index)=>(
                <div key={index} className="flex flex-col justify-between items-center text-center bg-[#F6F6F6] py-5 rounded-md shadow-md">
                  <div className="h-40 sm:h-48 md:h-45 ">
                    <img src={item?.image} alt={item?.image} className="object-contain"/>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-semibold">{item?.title}</h3>
                    <h3  className="text-lg text-start font-bold">{item?.price}</h3>
                    <Button className="w-1/2">Buy Now</Button>
                  </div>
                </div>
              )) : null
            }
          </div>
      </div>
    </section>
   );
}

export default Discounts;
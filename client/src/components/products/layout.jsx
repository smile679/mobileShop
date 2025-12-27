import iphone from "../../assets/New-arrivals/iphone_14_pro.png";
import earPhone from "../../assets/New-arrivals/earPhone.png";
import headSet from "../../assets/New-arrivals/headSet.png";
import mobile from "../../assets/New-arrivals/mobile.png";
import smartWatch from "../../assets/New-arrivals/smartWatch.png";
import tablet from "../../assets/New-arrivals/tablet.png";
import watch from "../../assets/New-arrivals/watch.png";
import { Button } from "../../components/ui/button"

function Products() {
  const products = [{
    image : iphone,
    title : "Iphone 14 pro max 128Gb Deep Purple",
    price : "10,000 birr",
  },
  {
    image : smartWatch,
    title : "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
    price : "12,000 birr",
  },
  {
    image : headSet,
    title : "AirPods Max Silver Starlight Aluminium",
    price : "62,000 birr",
  },
  {
    image : tablet,
    title : `Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`,
    price : "42,000 birr",
  },
  {
    image : watch,
    title : `Samsung Galaxy Watch6 Classic 47mm Black`,
    price : "32,000 birr",
  },
  {
    image : mobile,
    title : `Galaxy Z Fold5 Unlocked | 256GB | Phantom Black`,
    price : "32,000 birr",
  },
  {
    image : earPhone,
    title : `Galaxy Buds FE Graphite`,
    price : "42,000 birr",
  }]
  return ( 
    <section className="mt-5">
      <div className="w-full max-w-6xl mx-auto flex flex-col my-15">
        <h2 className="text-2xl font-semibold py-10">Used cell phones</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {
            products && products.map((item, index)=>(
              <div key={index} className="flex flex-col justify-between items-center text-center bg-[#F6F6F6] py-5 rounded-md shadow-md">
                <div className="h-40 sm:h-48 md:h-45 ">
                  <img src={item?.image} alt={item?.image} className=""/>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-semibold">{item?.title}</h3>
                  <h3  className="text-lg font-bold">{item?.price}</h3>
                  <Button className="w-1/2">Buy Now</Button>
                </div>
              </div>
            ))
          }
        </div>
        <h2 className="text-2xl font-semibold py-10">New cell phones</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {
            products && products.map((item, index)=>(
              <div key={index} className="flex flex-col justify-between items-center text-center bg-[#F6F6F6] py-5 rounded-md shadow-md">
                <div className="h-40 sm:h-48 md:h-45 ">
                  <img src={item?.image} alt={item?.image} className=""/>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-semibold">{item?.title}</h3>
                  <h3  className="text-lg font-bold">{item?.price}</h3>
                  <Button className="w-1/2">Buy Now</Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
   );
}

export default Products;
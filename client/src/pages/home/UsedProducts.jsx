import iphone from "../../assets/New-arrivals/iphone_14_pro.png"
import earPhone from "../../assets/New-arrivals/earPhone.png"
import headSet from "../../assets/New-arrivals/headSet.png"
import mobile from "../../assets/New-arrivals/mobile.png"
import smartWatch from "../../assets/New-arrivals/smartWatch.png"
import tablet from "../../assets/New-arrivals/tablet.png"
import watch from "../../assets/New-arrivals/watch.png"

function UsedProducts() {
  const products = [{
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
  },
  {
    image : watch,
    title : `Samsung Galaxy Watch6 Classic 47mm Black`,
    price : "3200 birr",
  },
  {
    image : mobile,
    title : `Galaxy Z Fold5 Unlocked | 256GB | Phantom Black`,
    price : "3200 birr",
  },
  {
    image : earPhone,
    title : `Galaxy Buds FE Graphite`,
    price : "3200 birr",
  }]
  return ( 
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
      {
        products && products.map((item, index)=>(
          <div key={index} className="flex flex-col justify-between items-center text-center h-70 bg-[#F6F6F6] py-5 rounded-xl">
            <img src={item?.image} alt={item?.image} className="w-40"/>
            <h3 className="font-semibold">{item?.title}</h3>
            <h3  className="text-lg font-semibold">{item?.price}</h3>
          </div>
        ))
      }
    </div>
   );
}

export default UsedProducts;
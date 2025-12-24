import Category from "../../pages/home/Category";
import Hero from "../../pages/home/Hero";
import HomeProducts from "../../pages/home/HomeProducts";
import { Button } from "../../components/ui/button";
import earpod from "../../assets/wireless_earphone.png";
import tab from "../../assets/tab01.png";
import samsung from "../../assets/samsung.png";
import macbook from "../../assets/Macbook.png";
import watch01 from "../../assets/watch01.png";
import Discounts from "../../pages/home/Discounts";
import About from "../../pages/home/About";
import Contact from "../../pages/home/Contact";

function Home() {
  const pro = [
    {
      image: earpod,
      imageTwo: watch01,
      title: "Popular Products",
      discription:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      color: "#FFFFFF",
    },
    {
      image: tab,
      title: "Ipad Pro",
      discription:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      color: "#F9F9F9",
    },
    {
      image: samsung,
      title: "Samsung Galaxy",
      discription:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      color: "#EAEAEA",
    },
    {
      image: macbook,
      title: "Macbook Pro",
      discription:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      color: "#2C2C2C",
    },
  ];

  return (
    <section className="flex flex-col pt-18">
      <Hero />
      <Category />
      <HomeProducts />
      <div className="w-full grid grid-cols-2 md:grid-cols-4 pb-15 md:pb-30">
        {pro &&
          pro.map((item, index) => (
            <div
              className="flex flex-col justify-between items-center p-5"
              style={{ backgroundColor: item?.color }}
              key={index}
            >
              <div className="relative w-full h-40 sm:h-48 md:h-60 flex items-center justify-center">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="max-h-full max-w-full object-contain"
                />
                {
                  item?.imageTwo ? 
                    <img src={item?.imageTwo} className="absolute bottom-0 sm:bottom-5 right-0 sm:right-5 w-30 sm:w-40"/>
                  : null
                }
              </div>
              <div className="flex flex-col gap-3">
                <h2
                  className={`text-lg font-stretch-50% ${
                    item?.color === "#2C2C2C" ? "text-white" : "text-black"
                  }`}
                >
                  {item?.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {item?.discription}
                </p>
                <Button
                  variant="outline"
                  className={`w-fit border-black border bg-transparent rounded-sm cursor-pointer
                ${
                  item?.color === "#2C2C2C"
                    ? "border-white text-white"
                    : "border-black text-black"
                }`}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
      </div>
      <Contact />
      <Discounts />
    </section>
  );
}

export default Home;

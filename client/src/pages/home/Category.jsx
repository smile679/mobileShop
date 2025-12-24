function Category() {

  const category = [{
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone-icon lucide-smartphone">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    name: "Phone",
  }, {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-watch-icon lucide-watch">
        <path d="M12 10v2.2l1.6 1" />
        <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
        <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
    name: "SmartWatch",
  }, {
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera-icon lucide-camera">
  //       <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
  //       <circle cx="12" cy="13" r="3" />
  //     </svg>
  //   ),
  //   name: "Camera",
  // }, {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones-icon lucide-headphones">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    ),
    name: "HeadPhones",
  }, {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop-icon lucide-laptop">
        <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
        <path d="M20.054 15.987H3.946" />
      </svg>
    ),
    name: "Computer",
  }]

  return ( 
    <div className="bg-[#FAFAFA] px-5 sm:px-10 py-15 md:py-25">
      <div className="flex flex-col max-w-6xl mx-auto">
        <h2 className="text-xl mb-5 font-semibold">Browse By Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {
            category && category.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center bg-[#EDEDED] w-full py-8 rounded-lg shadow-md">
                {item?.icon}
                <h3 className="text-xl pt-2">{item.name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </div>
   );
}

export default Category;
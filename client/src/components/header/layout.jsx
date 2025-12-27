import { Link, useLocation } from "react-router-dom";
// import { Link as linkScroll } from "react-scroll";

function Header() {
  const navBar = [
    {
      name : "Home",
      id: "home"
    },{
      name : "About",
      id : "about"
    },{
        name : "Contact Us",
        id : "contact"
    }]
  const location = useLocation()
  return ( 
    <header className="w-full py-4 px-10 fixed top-0 left-0 bg-gray-900 z-100 shadow-gray-800 shadow-sm">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/">
          <h2 className="text-lg md:text-2xl font-bold text-white">Jimi Mobile</h2>
        </Link>
        <nav className="hidden sm:flex gap-x-5">
          { location.pathname.includes('/products') ? null : <Link to="/products" className="font-semibold text-white cursor-pointer">
            products
          </Link> }
          {
           location.pathname.includes('/products') ? null : navBar && navBar.map((item, index)=>(
              <linkScroll to={item.id} key={index} className="font-semibold text-white cursor-pointer">
                {item?.name}
              </linkScroll>
            ))
          }
        </nav>
      </div>
    </header>
   );
}

export default Header;
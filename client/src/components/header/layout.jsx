import { Link } from "react-scroll";

function Header() {
  const navBar = [
    {
    name : "Products",
    id : "products"
    },
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
  return ( 
    <header className="w-full py-5 px-10 fixed top-0 left-0 bg-white shadow-md shadow-gray-400">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Jimi Mobile</h2>
        <nav className="flex gap-x-5">
          {
            navBar && navBar.map((item, index)=>(
              <Link to={item.id} key={index} className="font-semibold">
                {item?.name}
              </Link>
            ))
          }
        </nav>
      </div>
    </header>
   );
}

export default Header;
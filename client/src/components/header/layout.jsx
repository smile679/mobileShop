import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const handleContactClick = () => {
    if (!isHome) {
      navigate("/", { state: { scrollTo: "contact" } });
    }
  };

  return (
    <header className="w-full py-4 px-10 fixed top-0 left-0 bg-gray-900 z-50 shadow">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h2 className="text-lg md:text-2xl font-bold text-white">
            Jimi Mobile
          </h2>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex gap-x-6 items-center">
          {/* Home */}
          <Link to="/" className="font-semibold text-white">
            Home
          </Link>

          {/* Products (Router) */}
          <Link to="/products" className="font-semibold text-white">
            Products
          </Link>

          {/* About (Router) */}
          <Link to="/about" className="font-semibold text-white">
            About
          </Link>

          {/* Contact Us (Scroll only on Home) */}
          {isHome ? (
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="font-semibold text-white cursor-pointer"
            >
              Contact Us
            </ScrollLink>
          ) : (
            <button
              onClick={handleContactClick}
              className="font-semibold text-white"
            >
              Contact Us
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
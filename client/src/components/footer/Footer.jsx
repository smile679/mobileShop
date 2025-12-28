// src/components/Footer/Footer.jsx
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300">
      <svg
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-15 absolute -top-10 left-0 rotate-180"
      >
        <path
          d="M 0,400 L 0,225 C 127.02392344497608,251.23923444976077 254.04784688995215,277.47846889952154 337,260 C 419.95215311004785,242.52153110047848 458.83253588516743,181.32535885167462 532,157 C 605.1674641148326,132.67464114832538 712.6220095693781,145.2200956937799 811,131 C 909.3779904306219,116.77990430622009 998.6794258373204,75.79425837320574 1102,37 C 1205.3205741626796,-1.794258373205738 1322.66028708134,-38.39712918660287 1440,-75 L 1440,400 L 0,400 Z"
          fill="#ffffff"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 py-20">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Mobile Shop
          </h2>
          <p className="text-sm leading-relaxed">
            Discover new and used mobile phones and accessories available in our store.
            Visit us to check availability and prices.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Smartphones</li>
            <li>Accessories</li>
            <li>Used Devices</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +251 9XX XXX XXX
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> mobileshop@email.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>

        {/* Admin */}
        <div>
          <h3 className="text-white font-semibold mb-3">Admin</h3>
          <p className="text-sm mb-3">
            Authorized personnel only.
          </p>
          <Link
            to="/admin/login"
            className="inline-block text-sm text-blue-400 hover:underline"
          >
            Admin Login
          </Link>
        </div>

      </div>
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Mobile Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
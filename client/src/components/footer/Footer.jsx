// src/components/Footer/Footer.jsx
import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

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

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Mobile Shop. All rights reserved.
      </div>
    </footer>
  );
}

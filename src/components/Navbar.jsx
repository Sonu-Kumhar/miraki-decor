import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get current route

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-[999] w-full flex justify-center">
      <div className="w-[90%] mt-4 rounded-2xl transition-all duration-300 bg-black/40 backdrop-blur-sm border border-white/50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Miraki Decor" className="h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 relative text-xl">
            {links.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.name} className="relative z-10">
                  {/* Moving white box for active link */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white rounded-lg"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <Link
                    to={link.href}
                    className={`relative z-10 px-4 py-1 rounded-lg transition-all
    ${isActive
                        ? "text-black font-semibold" // text inside active white box
                        : "text-white hover:text-[#ffcc66] hover:font-bold" // hover color different from white
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 rounded-b-2xl">
            <ul className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`transition-all px-3 py-1 rounded-lg ${isActive
                          ? "bg-white text-black font-semibold"
                          : "text-white hover:bg-white hover:text-black"
                        }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

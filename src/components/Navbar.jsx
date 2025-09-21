import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
      <div
        className="w-[90%] mt-4 rounded-2xl transition-all duration-300
        bg-gradient-to-r from-black/90 via-black/80 to-black/90
        backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Miraki Decor" className="h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-xl">
            {links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`transition-colors relative px-2 py-1 ${
                      isActive
                        ? "text-[#b68a59] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#b68a59] after:rounded-full"
                        : "text-white hover:text-[#b68a59]"
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
                      className={`transition-colors px-2 py-1 ${
                        isActive
                          ? "text-[#b68a59] font-semibold"
                          : "text-white hover:text-[#b68a59]"
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

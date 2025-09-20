import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ Logo imported

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-center">
      <div
        className="w-[90%] mt-4 rounded-2xl transition-all duration-300 
        bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* ✅ Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Miraki Decor" className="h-20 w-auto" />
          </Link>

          {/* ✅ Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-xl">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-white hover:text-[#b68a59] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ✅ Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ✅ Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20 px-6 py-4 rounded-b-2xl">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-[#b68a59] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

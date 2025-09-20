import footerLogo from "../assets/footer-logo.png"; // your logo path

const Footer = () => {
  return (
    <footer className="relative py-10 mt-10 bg-gradient-to-t from-black/80 to-[#b68a59] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        {/* Logo */}
        <img
          src={footerLogo}
          alt="Miraki Decor Logo"
          className="w-32 md:w-140 object-contain mb-4"
        />

        {/* Optional text */}
        <p className="text-sm">
          ©2025 All rights reserved. Miraki Decor | Designed by Workstate
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-black transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-black transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

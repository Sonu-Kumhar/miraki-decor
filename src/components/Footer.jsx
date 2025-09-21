import footerLogo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-10 mt-10 text-white" style={{
      background: `linear-gradient(
        180deg,
        #2C1B0F 0%,
        #5A2E17 35%,
        #A35B2A 70%,
        #E3B77A 100%
      )`,
      backgroundSize: "300% 300%",
      animation: "gradientMove 12s ease infinite"
    }}>
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        {/* Logo */}
        <img
          src={footerLogo}
          alt="Miraki Decor Logo"
          className="w-32 md:w-120 object-contain mb-4"
        />

        {/* Optional text */}
        <p className="text-sm">
          ©2025 All rights reserved. Miraki Decor | Designed by Workstate
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-black transition-colors">Facebook</a>
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Add keyframes directly for footer */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

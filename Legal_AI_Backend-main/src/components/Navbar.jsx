import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Upload", path: "/upload" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Simulator", path: "/simulator" },
  ];

  return (
    <nav className="h-20 bg-white border-b border-slate-200 flex justify-between items-center px-6 sm:px-12 lg:px-20 sticky top-0 z-[1000] font-sans selection:bg-blue-100 selection:text-[#2563EB]">
      {/* Brand Logo Identity */}
      <Link to="/" className="no-underline transition-transform hover:scale-[1.02] active:scale-[0.98]">
        <div className="text-2xl font-extrabold text-[#111827] flex items-center gap-2 tracking-tight">
          <span className="text-xl"></span> Clarivox
        </div>
      </Link>

      {/* Center Navigational Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 text-sm font-semibold transition-colors duration-200 no-underline ${
                isActive ? "text-[#2563EB]" : "text-slate-600 hover:text-[#111827]"
              }`}
            >
              {link.name}
              
              {/* Dynamic Sliding Border Underline for Active State */}
              {isActive && (
                <motion.div
                  layoutId="activeNavBorder"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Authentication CTA Module */}
      <div>
        <Link to="/login" className="no-underline">
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "#1E3A8A" }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#2563EB] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-xs transition-colors tracking-wide"
          >
            Login
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
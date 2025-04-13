import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(prevScroll > currentScroll || currentScroll < 10);
      setPrevScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%] 
      bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-full px-6 py-1 transition-all duration-500 ease-in-out 
      z-50 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
      }`}
    >
      <nav className="flex items-center justify-between">
        {/* Left: Logo */}
        <div
          className="text-xl font-bold text-black cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="INU CHOOSE EDUCATION" className="h-[70px]" />
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          {["/", "/about", "/dashboard", "/contact"].map((path, index) => (
            <li key={index} className="relative">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition-all duration-500 ease-in-out ${
                    isActive
                      ? "bg-[#333333] text-white font-semibold"
                      : "text-black hover:text-white hover:bg-[#333333] transition-colors"
                  } hover:-translate-y-1`
                }
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: CTA Button */}
        <button
          onClick={() => navigate("/elgibility-test")}
          className="hidden md:block bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
        >
          Take Test now
        </button>

        {/* Mobile: Burger Menu */}
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color="#000000"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md py-4 rounded-lg transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-black">
          {["/", "/about", "/dashboard", "/contact"].map((path, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-[#333333] text-white font-semibold"
                      : "text-black hover:text-white hover:bg-[#333333] transition-colors"
                  } hover:-translate-y-1`
                }
                onClick={() => setIsOpen(false)}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

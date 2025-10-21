// import React from "react";
// import icon from "../assets/logo.png";
// const Header = ({ currentPage, navigateTo, toggleMobileMenu }) => {
//   return (
//     <>
//       <nav className="hidden md:flex items-center justify-between bg-white px-6 py-4 shadow-md">
//         <div
//           className="font-bold cursor-pointer transform hover:scale-105 transition-all duration-300"
//           onClick={() => navigateTo("home")}
//         >
//           <h1 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
//             <img src={icon} alt="" width={100} />
//           </h1>
//         </div>
//         <div className="flex space-x-8">
//           {[
//             "Home",
//             "About us",
//             "Franchise",
//             "Our Flavours",
//             "Startup Kit",
//             "Brand",
//             "FAQ's",
//           ].map((page) => (
//             <button
//               key={page}
//               onClick={() => navigateTo(page)}
//               className={`relative ${
//                 currentPage === page
//                   ? "text-amber-600 font-medium"
//                   : "text-gray-700 hover:text-amber-600"
//               } transition-colors duration-300`}
//             >
//               <span className="capitalize">{page}</span>
//               <span
//                 className={`absolute left-0 bottom-0 h-0.5 bg-amber-500 transition-all duration-300 ${
//                   currentPage === page ? "w-full" : "w-0"
//                 } group-hover:w-full`}
//               ></span>
//             </button>
//           ))}
//           <button
//             onClick={() => navigateTo("contact")}
//             className="border border-amber-600 px-6 py-2 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             CONTACT
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import icon from "../assets/logo.png";

const Header = ({ currentPage, navigateTo, toggleMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About us",
    "Franchise",
    "Our Flavours",
    "Startup Kit",
    "Brand",
    "FAQ's",
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 py-4
          ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/80 backdrop-blur-sm'} 
          transition-all duration-500 ease-in-out`}
      >
        <div
          className="cursor-pointer transform hover:scale-105 transition-all duration-300"
          onClick={() => navigateTo("home")}
        >
          <div className="flex items-center space-x-2">
            <img src={icon} alt="Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              BrandName
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <div className="relative">
            <div className="flex space-x-6">
              {navItems.map((page) => (
                <button
                  key={page}
                  onClick={() => navigateTo(page)}
                  onMouseEnter={() => setHoveredItem(page)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-2 py-1 overflow-hidden group`}
                >
                  <span className={`relative z-10 capitalize ${
                    currentPage === page 
                      ? "text-amber-600 font-medium" 
                      : "text-gray-700 group-hover:text-amber-600"
                  } transition-colors duration-300`}>
                    {page}
                  </span>
                  
                  {/* Animated background effect */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    currentPage === page ? "bg-amber-500" : "bg-amber-400"
                  } transition-all duration-300 ${
                    currentPage === page || hoveredItem === page ? "h-full opacity-10" : "h-0 opacity-0"
                  }`}></span>
                  
                  {/* Underline effect */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                    currentPage === page || hoveredItem === page ? "w-full" : "w-0"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigateTo("contact")}
            className="relative overflow-hidden group px-6 py-2.5 rounded-md font-medium tracking-wide text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10">CONTACT</span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -top-1 -right-1 w-12 h-12 rounded-full bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white'
        } transition-all duration-300`}>
          <div className="flex items-center" onClick={() => navigateTo("home")}>
            <img src={icon} alt="Logo" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              BrandName
            </span>
          </div>
          
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-md focus:outline-none"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className="h-0.5 w-6 bg-amber-600 rounded-full block"></span>
              <span className="h-0.5 w-6 bg-amber-600 rounded-full block"></span>
              <span className="h-0.5 w-6 bg-amber-600 rounded-full block"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
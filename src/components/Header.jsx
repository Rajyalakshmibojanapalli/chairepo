// import React, { useState, useEffect } from "react";
// import icon from "../assets/logo.png";

// const Header = ({ currentPage, navigateTo, toggleMobileMenu }) => {
//   // Track scroll direction and position
//   const [isScrollingUp, setIsScrollingUp] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       if (currentScrollY < lastScrollY) {
//         setIsScrollingUp(true);
//       } else {
//         setIsScrollingUp(false);
//       }
      
//       setLastScrollY(currentScrollY);
//     };
    
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   // Split navigation items for balanced layout
//   const navItems = [
//     "Home",
//     "About us",
//     "Franchise",
//     "Our Flavours",
//     "Startup Kit",
//     "Brand",
//     "FAQ's",
//   ];
  
//   const leftNavItems = navItems.slice(0, Math.ceil(navItems.length / 2));
//   const rightNavItems = navItems.slice(Math.ceil(navItems.length / 2));

//   return (
//     <>
//       <nav 
//         className={`fixed w-full hidden md:flex items-center px-6 py-4 transition-all duration-300 z-50 ${
//           isScrollingUp ? 'bg-white shadow-md' : 'bg-transparent'
//         }`}
//       >
//         {/* Left navigation items */}
//         <div className="flex-1 flex justify-end space-x-8">
//           {leftNavItems.map((page) => (
//             <button
//               key={page}
//               onClick={() => navigateTo(page)}
//               className={`relative ${
//                 currentPage === page
//                   ? "text-amber-600 font-medium"
//                   : isScrollingUp 
//                     ? "text-gray-700 hover:text-amber-600" 
//                     : "text-white hover:text-amber-200"
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
//         </div>
        
//         {/* Center logo */}
//         <div className="mx-8">
//           <div
//             className="font-bold cursor-pointer transform hover:scale-105 transition-all duration-300"
//             onClick={() => navigateTo("home")}
//           >
//             <img src={icon} alt="Logo" width={100} />
//           </div>
//         </div>
        
//         {/* Right navigation items and contact button */}
//         <div className="flex-1 flex justify-start space-x-8">
//           {rightNavItems.map((page) => (
//             <button
//               key={page}
//               onClick={() => navigateTo(page)}
//               className={`relative ${
//                 currentPage === page
//                   ? "text-amber-600 font-medium"
//                   : isScrollingUp 
//                     ? "text-gray-700 hover:text-amber-600" 
//                     : "text-white hover:text-amber-200"
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
//             className={`border px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg ${
//               isScrollingUp
//                 ? "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white" 
//                 : "border-white text-white hover:bg-white hover:text-amber-600"
//             }`}
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

const Header = ({ currentPage, navigateTo }) => {
  // Track scroll position
  const [scrollY, setScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    if (isDropdownOpen === index) {
      setIsDropdownOpen(null);
    } else {
      setIsDropdownOpen(index);
    }
  };

  // Navigation items with possible submenus
  const navItems = [
    { title: "Home", link: "home" },
    { title: "Menu", link: "menu" },
    { title: "Booking", link: "booking" },
    // Logo will be positioned here
    { 
      title: "About", 
      link: "about",
      submenu: [
        { title: "About", link: "about" },
        { title: "Gallery", link: "gallery" }
      ]
    },
    { title: "Blog", link: "blog" },
    { title: "Contact", link: "contact" }
  ];

  const leftNavItems = navItems.slice(0, 3);
  const rightNavItems = navItems.slice(3);
  
  // Determine header state
  const isTop = scrollY < 50;
  const isSmaller = scrollY > 100;
  
  // Always keep the header visible, just change its style
  const headerClasses = `
    fixed w-full transition-all duration-500 z-50
    ${!isTop ? "header-bg bg-[#d16b02] bg-opacity-95 shadow-md" : "transparent"}
  `;

  // Background gradient for when at top
  const gradientStyle = isTop ? {
    background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)"
  } : {};

  return (
    <header 
      className={headerClasses} 
      style={gradientStyle}
    >
      <div className="w-full mx-auto">
        {/* Main Navigation */}
        <nav className="h-full">
          <ul 
            id="mainmenu" 
            className="flex justify-center items-center h-full text-white text-center mx-auto relative"
            style={{ padding: isSmaller ? '0' : '50px 0 0 0', transition: 'all 0.3s ease' }}
          >
            {/* Left side nav items */}
            {leftNavItems.map((item, index) => (
              <li key={`left-${index}`} className="relative inline-block text-center">
                <a 
                  href={`#${item.link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.link);
                  }}
                  className={`
                    inline-block font-medium transition-all
                    ${currentPage === item.link ? "text-[#8dcb3f]" : "text-white hover:text-[#8dcb3f]"}
                  `}
                  style={{ padding: isSmaller ? '18px 20px' : '18px 20px' }}
                >
                  {item.title}
                </a>
                {item.submenu && (
                  <>
                    <span 
                      className="ml-1 cursor-pointer" 
                      onClick={() => toggleDropdown(index)}
                    >
                      ▼
                    </span>
                    
                    {/* Dropdown menu */}
                    {isDropdownOpen === index && (
                      <ul className="absolute top-full left-0 bg-[#d16b02] min-w-[160px] shadow-md text-left z-10">
                        {item.submenu.map((subitem, subindex) => (
                          <li key={subindex} className="block w-full">
                            <a 
                              href={`#${subitem.link}`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateTo(subitem.link);
                              }}
                              className="block px-4 py-2 text-white hover:text-[#8dcb3f] border-b border-[#8dcb3f] border-opacity-20 w-full"
                            >
                              {subitem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
            
            {/* Center Logo */}
            <li className="logo_pos inline-block mx-10 transition-all duration-300 relative">
              <img 
                src={icon} 
                alt="Logo" 
                className={`
                  c_logo_light transition-all duration-300
                  ${isSmaller ? 'h-[50px]' : 'h-[105px]'}
                `} 
                onClick={() => navigateTo("home")}
                style={{ 
                  cursor: 'pointer',
                  marginTop: isSmaller ? '10px' : '-15px',
                  marginLeft: '40px',
                  marginRight: '40px'
                }}
              />
            </li>
            
            {/* Right side nav items */}
            {rightNavItems.map((item, index) => (
              <li key={`right-${index}`} className="relative inline-block text-center">
                <a 
                  href={`#${item.link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.link);
                  }}
                  className={`
                    inline-block font-medium transition-all
                    ${currentPage === item.link ? "text-[#8dcb3f]" : "text-white hover:text-[#8dcb3f]"}
                  `}
                  style={{ padding: isSmaller ? '18px 20px' : '18px 20px' }}
                >
                  {item.title}
                </a>
                {item.submenu && (
                  <>
                    <span 
                      className="ml-1 cursor-pointer" 
                      onClick={() => toggleDropdown(index + leftNavItems.length)}
                    >
                      ▼
                    </span>
                    
                    {/* Dropdown menu */}
                    {isDropdownOpen === (index + leftNavItems.length) && (
                      <ul className="absolute top-full left-0 bg-[#d16b02] min-w-[160px] shadow-md text-left z-10">
                        {item.submenu.map((subitem, subindex) => (
                          <li key={subindex} className="block w-full">
                            <a 
                              href={`#${subitem.link}`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateTo(subitem.link);
                              }}
                              className="block px-4 py-2 text-white hover:text-[#8dcb3f] border-b border-[#8dcb3f] border-opacity-20 w-full"
                            >
                              {subitem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Button (hidden on desktop) */}
        <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <button className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Logo (hidden on desktop) */}
        <div className="md:hidden absolute left-4 top-1/2 transform -translate-y-1/2">
          <img 
            src={icon} 
            alt="Logo" 
            className="h-12" 
            onClick={() => navigateTo("home")}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
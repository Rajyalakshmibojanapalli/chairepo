

// import React, { useState, useEffect } from "react";
// import icon from "../assets/logo.png";

// const Header = ({ currentPage, navigateTo }) => {
//   // Track scroll position
//   const [scrollY, setScrollY] = useState(0);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
//     };
    
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleDropdown = (index) => {
//     if (isDropdownOpen === index) {
//       setIsDropdownOpen(null);
//     } else {
//       setIsDropdownOpen(index);
//     }
//   };

//   // Navigation items with possible submenus
//   const navItems = [
//     { title: "Home", link: "home" },
//     { title: "Menu", link: "menu" },
//     { title: "Booking", link: "booking" },
//     // Logo will be positioned here
//     { 
//       title: "About", 
//       link: "about",
//       submenu: [
//         { title: "About", link: "about" },
//         { title: "Gallery", link: "gallery" }
//       ]
//     },
//     { title: "Blog", link: "blog" },
//     { title: "Contact", link: "contact" }
//   ];

//   const leftNavItems = navItems.slice(0, 3);
//   const rightNavItems = navItems.slice(3);
  
//   // Determine header state
//   const isTop = scrollY < 50;
//   const isSmaller = scrollY > 100;
  
//   // Always keep the header visible, just change its style
//   const headerClasses = `
//     fixed w-full transition-all duration-500 z-50
//     ${!isTop ? "header-bg bg-[#d16b02] bg-opacity-95 shadow-md" : "transparent"}
//   `;

//   // Background gradient for when at top
//   const gradientStyle = isTop ? {
//     background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)"
//   } : {};

//   return (
//     <header 
//       className={headerClasses} 
//       style={gradientStyle}
//     >
//       <div className="w-full mx-auto">
//         {/* Main Navigation */}
//         <nav className="h-full">
//           <ul 
//             id="mainmenu" 
//             className="flex justify-center items-center h-full text-white text-center mx-auto relative"
//             style={{ padding: isSmaller ? '0' : '50px 0 0 0', transition: 'all 0.3s ease' }}
//           >
//             {/* Left side nav items */}
//             {leftNavItems.map((item, index) => (
//               <li key={`left-${index}`} className="relative inline-block text-center">
//                 <a 
//                   href={`#${item.link}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     navigateTo(item.link);
//                   }}
//                   className={`
//                     inline-block font-medium transition-all
//                     ${currentPage === item.link ? "text-[#8dcb3f]" : "text-white hover:text-[#8dcb3f]"}
//                   `}
//                   style={{ padding: isSmaller ? '18px 20px' : '18px 20px' }}
//                 >
//                   {item.title}
//                 </a>
//                 {item.submenu && (
//                   <>
//                     <span 
//                       className="ml-1 cursor-pointer" 
//                       onClick={() => toggleDropdown(index)}
//                     >
//                       ▼
//                     </span>
                    
//                     {/* Dropdown menu */}
//                     {isDropdownOpen === index && (
//                       <ul className="absolute top-full left-0 bg-[#d16b02] min-w-[160px] shadow-md text-left z-10">
//                         {item.submenu.map((subitem, subindex) => (
//                           <li key={subindex} className="block w-full">
//                             <a 
//                               href={`#${subitem.link}`}
//                               onClick={(e) => {
//                                 e.preventDefault();
//                                 navigateTo(subitem.link);
//                               }}
//                               className="block px-4 py-2 text-white hover:text-[#8dcb3f] border-b border-[#8dcb3f] border-opacity-20 w-full"
//                             >
//                               {subitem.title}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 )}
//               </li>
//             ))}
            
//             {/* Center Logo */}
//             <li className="logo_pos inline-block mx-10 transition-all duration-300 relative">
//               <img 
//                 src={icon} 
//                 alt="Logo" 
//                 className={`
//                   c_logo_light transition-all duration-300
//                   ${isSmaller ? 'h-[50px]' : 'h-[105px]'}
//                 `} 
//                 onClick={() => navigateTo("home")}
//                 style={{ 
//                   cursor: 'pointer',
//                   marginTop: isSmaller ? '10px' : '-15px',
//                   marginLeft: '40px',
//                   marginRight: '40px'
//                 }}
//               />
//             </li>
            
//             {/* Right side nav items */}
//             {rightNavItems.map((item, index) => (
//               <li key={`right-${index}`} className="relative inline-block text-center">
//                 <a 
//                   href={`#${item.link}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     navigateTo(item.link);
//                   }}
//                   className={`
//                     inline-block font-medium transition-all
//                     ${currentPage === item.link ? "text-[#8dcb3f]" : "text-white hover:text-[#8dcb3f]"}
//                   `}
//                   style={{ padding: isSmaller ? '18px 20px' : '18px 20px' }}
//                 >
//                   {item.title}
//                 </a>
//                 {item.submenu && (
//                   <>
//                     <span 
//                       className="ml-1 cursor-pointer" 
//                       onClick={() => toggleDropdown(index + leftNavItems.length)}
//                     >
//                       ▼
//                     </span>
                    
//                     {/* Dropdown menu */}
//                     {isDropdownOpen === (index + leftNavItems.length) && (
//                       <ul className="absolute top-full left-0 bg-[#d16b02] min-w-[160px] shadow-md text-left z-10">
//                         {item.submenu.map((subitem, subindex) => (
//                           <li key={subindex} className="block w-full">
//                             <a 
//                               href={`#${subitem.link}`}
//                               onClick={(e) => {
//                                 e.preventDefault();
//                                 navigateTo(subitem.link);
//                               }}
//                               className="block px-4 py-2 text-white hover:text-[#8dcb3f] border-b border-[#8dcb3f] border-opacity-20 w-full"
//                             >
//                               {subitem.title}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
        
//         {/* Mobile Navigation Button (hidden on desktop) */}
//         <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
//           <button className="text-white focus:outline-none">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
        
//         {/* Mobile Logo (hidden on desktop) */}
//         <div className="md:hidden absolute left-4 top-1/2 transform -translate-y-1/2">
//           <img 
//             src={icon} 
//             alt="Logo" 
//             className="h-12" 
//             onClick={() => navigateTo("home")}
//             style={{ cursor: 'pointer' }}
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import icon from "../assets/logo.png";

const Header = ({ currentPage, navigateTo }) => {
  // Track scroll position
  const [scrollY, setScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  // New state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        {/* Main Navigation - Hidden on mobile unless menu is open */}
        <nav className="h-full">
          <ul 
            id="mainmenu" 
            className={`
              hidden md:flex justify-center items-center h-full text-white text-center mx-auto relative
              ${isMobileMenuOpen ? "flex flex-col absolute top-full left-0 w-full bg-[#d16b02] shadow-lg" : ""}
            `}
            style={{ padding: isSmaller ? '0' : '50px 0 0 0', transition: 'all 0.3s ease' }}
          >
            {/* Left side nav items */}
            {leftNavItems.map((item, index) => (
              <li key={`left-${index}`} className="relative md:inline-block text-center w-full md:w-auto">
                <a 
                  href={`#${item.link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.link);
                    setIsMobileMenuOpen(false); // Close menu after navigation
                  }}
                  className={`
                    block md:inline-block font-medium transition-all w-full
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
                      <ul className="absolute md:top-full md:left-0 static md:static bg-[#d16b02] min-w-[160px] shadow-md text-left z-10 w-full md:w-auto">
                        {item.submenu.map((subitem, subindex) => (
                          <li key={subindex} className="block w-full">
                            <a 
                              href={`#${subitem.link}`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateTo(subitem.link);
                                setIsMobileMenuOpen(false);
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
            
            {/* Center Logo - only shown on desktop */}
            <li className="logo_pos hidden md:inline-block mx-10 transition-all duration-300 relative">
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
              <li key={`right-${index}`} className="relative md:inline-block text-center w-full md:w-auto">
                <a 
                  href={`#${item.link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.link);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    block md:inline-block font-medium transition-all w-full
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
                      <ul className="absolute md:top-full md:left-0 static md:static bg-[#d16b02] min-w-[160px] shadow-md text-left z-10 w-full md:w-auto">
                        {item.submenu.map((subitem, subindex) => (
                          <li key={subindex} className="block w-full">
                            <a 
                              href={`#${subitem.link}`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateTo(subitem.link);
                                setIsMobileMenuOpen(false);
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

          {/* Mobile menu container - only visible when menu is open */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#d16b02] shadow-lg z-50">
              <ul className="flex flex-col w-full">
                {[...leftNavItems, ...rightNavItems].map((item, index) => (
                  <li key={`mobile-${index}`} className="w-full border-b border-[#8dcb3f] border-opacity-20">
                    <a 
                      href={`#${item.link}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(item.link);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`
                        block font-medium py-4 px-6 transition-all
                        ${currentPage === item.link ? "text-[#8dcb3f]" : "text-white hover:text-[#8dcb3f]"}
                      `}
                    >
                      {item.title}
                    </a>
                    {item.submenu && (
                      <ul className="bg-[#c36400] w-full">
                        {item.submenu.map((subitem, subindex) => (
                          <li key={subindex} className="w-full border-b border-[#8dcb3f] border-opacity-10 last:border-0">
                            <a 
                              href={`#${subitem.link}`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateTo(subitem.link);
                                setIsMobileMenuOpen(false);
                              }}
                              className="block py-3 px-10 text-white hover:text-[#8dcb3f]"
                            >
                              {subitem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <button 
            className="text-white focus:outline-none p-2"
            onClick={toggleMobileMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Logo */}
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
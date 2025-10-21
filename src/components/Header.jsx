// // src/components/Header.jsx
// import React from 'react';

// const Header = ({ currentPage, navigateTo, toggleMobileMenu }) => {
//   return (
//     <>
//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex items-center justify-between bg-white px-6 py-4 shadow-sm">
//         <div 
//           className="font-bold text-xl text-gray-900 cursor-pointer" 
//           onClick={() => navigateTo('home')}
//         >
//           NEXUS PUBLICATIONS
//         </div>
//         <div className="flex space-x-8">
//           <button 
//             onClick={() => navigateTo('home')} 
//             className={currentPage === 'home' ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition-colors"}
//           >
//             Home
//           </button>
//           <button 
//             onClick={() => navigateTo('about')} 
//             className={currentPage === 'about' ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition-colors"}
//           >
//             About
//           </button>
//           <button 
//             onClick={() => navigateTo('services')} 
//             className={currentPage === 'services' ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition-colors"}
//           >
//             Services
//           </button>
//           <button 
//             onClick={() => navigateTo('testimonials')} 
//             className={currentPage === 'testimonials' ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600 transition-colors"}
//           >
//             Testimonials
//           </button>
//           <button 
//             onClick={() => navigateTo('contact')} 
//             className="border border-gray-900 px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors"
//           >
//             CONTACT
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Header with Hamburger */}
//       <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-sm">
//         <div 
//           className="font-bold text-lg text-gray-900 cursor-pointer"
//           onClick={() => navigateTo('home')}
//         >
//           NEXUS PUBLICATIONS
//         </div>
//         <button onClick={toggleMobileMenu} className="focus:outline-none">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Header;


// src/components/Header.jsx - Enhanced with animations and gradients
import React from 'react';

const Header = ({ currentPage, navigateTo, toggleMobileMenu }) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between bg-white px-6 py-4 shadow-md">
        <div 
          className="font-bold cursor-pointer transform hover:scale-105 transition-all duration-300" 
          onClick={() => navigateTo('home')}
        >
          <h1 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">nexus</h1>
          <p className="text-xs lg:text-sm text-gray-700">PUBLICATIONS</p>
        </div>
        <div className="flex space-x-8">
          {['home', 'about', 'services', 'testimonials'].map((page) => (
            <button 
              key={page}
              onClick={() => navigateTo(page)} 
              className={`relative ${currentPage === page ? "text-amber-600 font-medium" : "text-gray-700 hover:text-amber-600"} transition-colors duration-300`}
            >
              <span className="capitalize">{page}</span>
              <span className={`absolute left-0 bottom-0 h-0.5 bg-amber-500 transition-all duration-300 ${currentPage === page ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
            </button>
          ))}
          <button 
            onClick={() => navigateTo('contact')} 
            className="border border-amber-600 px-6 py-2 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* Mobile Header with Hamburger */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-md">
        <div 
          className="cursor-pointer"
          onClick={() => navigateTo('home')}
        >
          <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">nexus</h1>
          <p className="text-xs text-gray-700">PUBLICATIONS</p>
        </div>
        <button onClick={toggleMobileMenu} className="focus:outline-none text-amber-600 p-2 rounded-full hover:bg-amber-100 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;
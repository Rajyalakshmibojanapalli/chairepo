// import React from 'react'
// import ComingSoonPage from './comingSoon/ComingSoon'

// function App() {
//   return (
//     <div>
//       <ComingSoonPage/>
//     </div>
//   )
// }

// export default App


// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans">
      <Header
        currentPage={currentPage}
        navigateTo={navigateTo}
        toggleMobileMenu={toggleMobileMenu}
      />

      {mobileMenuOpen && (
        <MobileMenu
          currentPage={currentPage}
          navigateTo={navigateTo}
          toggleMobileMenu={toggleMobileMenu}
        />
      )}

      <main>
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'gallery' && <Gallery />}

        {currentPage === 'testimonials' && <TestimonialsPage navigateTo={navigateTo} />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
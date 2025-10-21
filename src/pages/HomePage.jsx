// import React from 'react';
// import ServiceCard from '../components/ServiceCard';
// import FeatureItem from '../components/FeatureItem';
// import bgImg2 from "../assets/bg2.jpg";
// import bgImg1 from "../assets/bg1.jpg";
// import WhyChooseUs from '../components/WhyUs';

// const style = {
//   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url(${bgImg2})`,
//   backgroundAttachment: "fixed"
// };

// const HomePage = ({ navigateTo }) => {
//   const services = [
//     {
//       title: "Publication Services",
//       description: "Transform your research into published work with our expert guidance.",
//       image: bgImg2,
//       path: "services"
//     },
//     {
//       title: "Research Writing",
//       description: "Elevate your research with our expert writing assistance.",
//       image: bgImg1,
//       path: "services"
//     },
//     {
//       title: "Presentation Design",
//       description: "Craft impactful presentations that captivate your audience.",
//       image: bgImg2,
//       path: "services"
//     },  {
//         title: "Publication Services",
//         description: "Transform your research into published work with our expert guidance.",
//         image: bgImg2,
//         path: "services"
//       },
//       {
//         title: "Research Writing",
//         description: "Elevate your research with our expert writing assistance.",
//         image: bgImg1,
//         path: "services"
//       },
//       {
//         title: "Presentation Design",
//         description: "Craft impactful presentations that captivate your audience.",
//         image: bgImg2,
//         path: "services"
//       }
//   ];

//   const features = [
//     {
//       icon: (
//         <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: "Expert Team",
//       description: "Our team consists of experienced academics and professionals who understand the nuances of academic publishing."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: "Timely Delivery",
//       description: "We understand the importance of deadlines in academia and ensure your projects are completed on time."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       title: "Tailored Approach",
//       description: "Each project is unique, and we customize our services to meet your specific needs and requirements."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//         </svg>
//       ),
//       title: "Quality Assurance",
//       description: "Our rigorous quality control process ensures that all deliverables meet the highest academic standards."
//     }
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <div 
//         className="relative bg-cover bg-center"
//         style={style}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60"></div>
//         <div className="flex flex-col justify-center h-full px-6 md:px-16 text-white py-24 relative z-10" style={{ minHeight: '80vh' }}>
//           <div className="max-w-3xl animate-fadeIn">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Academic support <br/>
//               <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">redefined</span>
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-gray-200">Unlock your potential with expert guidance</p>
//             <button 
//               onClick={() => navigateTo('services')}
//               className="bg-amber-600 text-white font-medium py-3 px-8 rounded-md inline-block hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-600/20 transform hover:-translate-y-1"
//             >
//               VIEW SERVICES
//             </button>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
//       </div>

//       {/* Featured Services */}
//       <div className="py-16 bg-gradient-to-b from-gray-100 to-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
//           <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="transform transition-all duration-500 hover:scale-105">
//                 <ServiceCard
//                   title={service.title}
//                   description={service.description}
//                   image={service.image}
//                   onClick={() => navigateTo(service.path)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us */}
//       {/* <div className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
//           <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <FeatureItem 
//                 icon={features[0].icon}
//                 title={features[0].title}
//                 description={features[0].description}
//               />
//               <FeatureItem 
//                 icon={features[1].icon}
//                 title={features[1].title}
//                 description={features[1].description}
//               />
//             </div>
//             <div>
//               <FeatureItem 
//                 icon={features[2].icon}
//                 title={features[2].title}
//                 description={features[2].description}
//               />
//               <FeatureItem 
//                 icon={features[3].icon}
//                 title={features[3].title}
//                 description={features[3].description}
//               />
//             </div>
//           </div>
//         </div>
//       </div> */}
//        <WhyChooseUs />
// <br />
//       {/* Call to Action */}
//       <div className="py-16 bg-gradient-to-r from-amber-500 to-amber-700 text-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full">
//           <svg className="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 100V0l100 100H0z" fill="rgba(255,255,255,0.05)"></path>
//           </svg>
//         </div>
//         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
//           <h2 className="text-3xl font-bold mb-4">Ready to elevate your academic journey?</h2>
//           <p className="text-xl mb-8">Contact us today for a consultation and see how we can help you succeed.</p>
//           <button 
//             onClick={() => navigateTo('contact')}
//             className="bg-white text-amber-600 font-medium py-3 px-8 text-lg inline-block hover:bg-gray-100 transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Add these animations to your CSS
// // @keyframes fadeIn {
// //   from { opacity: 0; transform: translateY(20px); }
// //   to { opacity: 1; transform: translateY(0); }
// // }
// // .animate-fadeIn {
// //   animation: fadeIn 1s ease-out forwards;
// // }

// export default HomePage;



import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import FeatureItem from '../components/FeatureItem';
import bgImg2 from "../assets/bg2.jpg"; // Replace with cafe interior image
import bgImg1 from "../assets/bg1.jpg"; // Replace with coffee/food image
import WhyChooseUs from '../components/WhyUs';

// Hero section background with parallax effect
const style = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${bgImg2})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

const HomePage = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add scroll animation for menu items
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => {
        const position = el.getBoundingClientRect();
        if(position.top < window.innerHeight * 0.9) {
          el.classList.add('appear');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cafeMenu = [
    {
      title: "Specialty Coffee",
      description: "Expertly crafted coffees featuring our signature house-roasted beans.",
      image: bgImg1,
      path: "menu"
    },
    {
      title: "Artisan Pastries",
      description: "Freshly baked croissants, muffins, and pastries made daily in-house.",
      image: bgImg2, 
      path: "menu"
    },
    {
      title: "Breakfast Menu",
      description: "Delicious breakfast options from quick bites to hearty meals.",
      image: bgImg1,
      path: "menu"
    },
    {
      title: "Lunch Specials",
      description: "Seasonal sandwiches, salads, and soups made with locally-sourced ingredients.",
      image: bgImg2,
      path: "menu"
    },
    {
      title: "Decadent Desserts",
      description: "Indulge in our selection of handcrafted cakes and sweet treats.",
      image: bgImg1,
      path: "menu"
    },
    {
      title: "Signature Blends",
      description: "Take home our custom coffee blends, whole bean or freshly ground.",
      image: bgImg2,
      path: "menu"
    }
  ];

  const cafeFeatures = [
    {
      icon: (
        <svg className="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Ethically Sourced",
      description: "We partner directly with farmers to ensure our coffee is responsibly sourced and fairly traded."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Cozy Atmosphere",
      description: "Our cafe provides the perfect ambiance whether you're working, meeting friends, or enjoying some quiet time."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "House Roasted",
      description: "We roast our beans in small batches to ensure the freshest, most flavorful coffee experience possible."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-coffee-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      title: "Artisan Approach",
      description: "Our bakers and baristas are skilled artisans who take pride in crafting each item with care and precision."
    }
  ];

  return (
    <div className="cafe-homepage">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center"
        style={style}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
        <div className={`flex flex-col justify-center h-full px-6 md:px-16 text-white py-24 relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
             style={{ minHeight: '90vh' }}>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experience <br/>
              <span className="bg-gradient-to-r from-coffee-300 to-coffee-600 bg-clip-text text-transparent">artisan coffee</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Where every cup tells a story</p>
            <button 
              onClick={() => navigateTo('menu')}
              className="bg-coffee-600 text-white font-medium py-3 px-8 rounded-md inline-block hover:bg-coffee-700 transition-all duration-300 shadow-lg hover:shadow-coffee-600/20 transform hover:-translate-y-1"
            >
              EXPLORE MENU
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Featured Menu Items */}
      <div className="py-20 bg-gradient-to-b from-cream-100 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-coffee-900">Our Menu</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-coffee-400 to-coffee-600 rounded-full mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cafeMenu.map((item, index) => (
              <div 
                key={index} 
                className="scroll-animate opacity-0 translate-y-8 transition-all duration-700 ease-out" 
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  onClick={() => navigateTo(item.path)}
                  className="h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigateTo('menu')}
              className="border-2 border-coffee-600 text-coffee-800 hover:text-white hover:bg-coffee-600 font-medium py-2 px-8 rounded-md transition-all duration-300"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </div>

      {/* About Our Coffee */}
      <div className="py-16 bg-coffee-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0 translate-x-[-20px]">
              <h2 className="text-3xl font-bold mb-6">Our Coffee Journey</h2>
              <p className="text-lg mb-6 text-cream-100">
                From bean to cup, we're passionate about every step of the coffee-making process. Our master roasters select only the finest beans from sustainable farms around the world.
              </p>
              <p className="text-lg mb-8 text-cream-100">
                Each batch is carefully roasted to bring out unique flavor profiles, then brewed with precision to deliver the perfect cup every time.
              </p>
              <button 
                onClick={() => navigateTo('about')}
                className="bg-coffee-600 text-white font-medium py-2 px-8 rounded-md inline-block hover:bg-coffee-500 transition-all duration-300"
              >
                Our Story
              </button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden scroll-animate opacity-0 translate-x-20">
              <img 
                src={bgImg1} 
                alt="Coffee roasting process" 
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full text-cream-100 opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-coffee-900">Why Choose Us</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-coffee-400 to-coffee-600 rounded-full mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <FeatureItem 
                icon={cafeFeatures[0].icon}
                title={cafeFeatures[0].title}
                description={cafeFeatures[0].description}
                className="scroll-animate opacity-0"
              />
              <FeatureItem 
                icon={cafeFeatures[1].icon}
                title={cafeFeatures[1].title}
                description={cafeFeatures[1].description}
                className="scroll-animate opacity-0"
                style={{transitionDelay: '100ms'}}
              />
            </div>
            <div>
              <FeatureItem 
                icon={cafeFeatures[2].icon}
                title={cafeFeatures[2].title}
                description={cafeFeatures[2].description}
                className="scroll-animate opacity-0"
                style={{transitionDelay: '200ms'}}
              />
              <FeatureItem 
                icon={cafeFeatures[3].icon}
                title={cafeFeatures[3].title}
                description={cafeFeatures[3].description}
                className="scroll-animate opacity-0"
                style={{transitionDelay: '300ms'}}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Instagram Gallery */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-coffee-900">#CafeGram</h2>
          <p className="text-center text-gray-600 mb-8">Share your moments with us on Instagram</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1,2,3,4,5,6].map((item) => (
              <div 
                key={item} 
                className="aspect-square overflow-hidden rounded-lg scroll-animate opacity-0 scale-95"
                style={{transitionDelay: `${item * 50}ms`}}
              >
                <img 
                  src={item % 2 === 0 ? bgImg1 : bgImg2} 
                  alt={`Instagram post ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-coffee-500 to-coffee-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100V0l100 100H0z" fill="rgba(255,255,255,0.05)"></path>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to experience the perfect brew?</h2>
          <p className="text-xl mb-8">Visit us today or order online for a taste of our handcrafted coffee and delicious treats.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigateTo('locations')}
              className="bg-white text-coffee-700 font-medium py-3 px-8 text-lg inline-block hover:bg-cream-100 transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Find Us
            </button>
            <button 
              onClick={() => navigateTo('order')}
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 text-lg inline-block hover:bg-white hover:text-coffee-700 transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Order Online
            </button>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .scroll-animate.appear {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .cafe-homepage {
          --coffee-300: #c8a27c;
          --coffee-400: #b08968;
          --coffee-500: #9b7653;
          --coffee-600: #7d5f44;
          --coffee-700: #624a34;
          --coffee-800: #4a3726;
          --coffee-900: #33271b;
          --cream-50: #fdfaf5;
          --cream-100: #f8f1e7;
        }

        .text-coffee-600 {
          color: var(--coffee-600);
        }

        .bg-coffee-600 {
          background-color: var(--coffee-600);
        }
        
        .hover\\:bg-coffee-600:hover {
          background-color: var(--coffee-600);
        }
        
        .hover\\:bg-coffee-500:hover {
          background-color: var(--coffee-500);
        }
        
        .hover\\:bg-coffee-700:hover {
          background-color: var(--coffee-700);
        }
        
        .bg-coffee-900 {
          background-color: var(--coffee-900);
        }
        
        .bg-cream-50 {
          background-color: var(--cream-50);
        }
        
        .bg-cream-100 {
          background-color: var(--cream-100);
        }
        
        .text-coffee-900 {
          color: var(--coffee-900);
        }
        
        .text-coffee-800 {
          color: var(--coffee-800);
        }
        
        .text-cream-100 {
          color: var(--cream-100);
        }
        
        .border-coffee-600 {
          border-color: var(--coffee-600);
        }
        
        .from-coffee-300 {
          --tw-gradient-from: var(--coffee-300);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(200, 162, 124, 0));
        }
        
        .to-coffee-600 {
          --tw-gradient-to: var(--coffee-600);
        }
        
        .from-coffee-400 {
          --tw-gradient-from: var(--coffee-400);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(176, 137, 104, 0));
        }
        
        .from-coffee-500 {
          --tw-gradient-from: var(--coffee-500);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(155, 118, 83, 0));
        }
        
        .to-coffee-700 {
          --tw-gradient-to: var(--coffee-700);
        }
        
        .from-cream-100 {
          --tw-gradient-from: var(--cream-100);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(248, 241, 231, 0));
        }
      `}</style>
    </div>
  );
};

export default HomePage;
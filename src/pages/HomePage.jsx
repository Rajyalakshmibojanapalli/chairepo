// // src/pages/HomePage.jsx
// import React from 'react';
// import ServiceCard from '../components/ServiceCard';
// import FeatureItem from '../components/FeatureItem';
// import bgImg2 from "../assets/bg2.jpg"
// const style = {
//   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${bgImg2})`
// }

// const HomePage = ({ navigateTo }) => {
//   const services = [
//     {
//       title: "Publication Services",
//       description: "Transform your research into published work with our expert guidance.",
//       path: "services"
//     },
//     {
//       title: "Research Writing",
//       description: "Elevate your research with our expert writing assistance.",
//       path: "services"
//     },
//     {
//       title: "Presentation Design",
//       description: "Craft impactful presentations that captivate your audience.",
//       path: "services"
//     }
//   ];

//   const features = [
//     {
//       icon: (
//         <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: "Expert Team",
//       description: "Our team consists of experienced academics and professionals who understand the nuances of academic publishing."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: "Timely Delivery",
//       description: "We understand the importance of deadlines in academia and ensure your projects are completed on time."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       title: "Tailored Approach",
//       description: "Each project is unique, and we customize our services to meet your specific needs and requirements."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
//         <div className="flex flex-col justify-center h-full px-6 md:px-16 text-white py-24" style={{ minHeight: '80vh' }}>
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Academic support <br />redefined
//           </h1>
//           <p className="text-xl md:text-2xl mb-8">Unlock your potential with expert guidance</p>
//           <button 
//             onClick={() => navigateTo('services')}
//             className="bg-green-600 text-white font-medium py-3 px-6 inline-block w-max hover:bg-green-700 transition-colors"
//           >
//             VIEW SERVICES
//           </button>
//         </div>
//       </div>

//       {/* Featured Services */}
//       <div className="py-16 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <ServiceCard
//                 key={index}
//                 title={service.title}
//                 description={service.description}
//                 onClick={() => navigateTo(service.path)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us */}
//       <div className="py-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
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
//       </div>

//       {/* Call to Action */}
//       <div className="bg-green-600 py-12 text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to elevate your academic journey?</h2>
//           <p className="text-xl mb-8">Contact us today for a consultation and see how we can help you succeed.</p>
//           <button 
//             onClick={() => navigateTo('contact')}
//             className="bg-white text-green-600 font-medium py-3 px-8 text-lg inline-block hover:bg-gray-100 transition-colors"
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



// src/pages/HomePage.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import FeatureItem from '../components/FeatureItem';
import bgImg2 from "../assets/bg2.jpg";
import bgImg1 from "../assets/bg1.jpg";
import WhyChooseUs from '../components/WhyUs';

const style = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url(${bgImg2})`,
  backgroundAttachment: "fixed"
};

const HomePage = ({ navigateTo }) => {
  const services = [
    {
      title: "Publication Services",
      description: "Transform your research into published work with our expert guidance.",
      image: bgImg2,
      path: "services"
    },
    {
      title: "Research Writing",
      description: "Elevate your research with our expert writing assistance.",
      image: bgImg1,
      path: "services"
    },
    {
      title: "Presentation Design",
      description: "Craft impactful presentations that captivate your audience.",
      image: bgImg2,
      path: "services"
    },  {
        title: "Publication Services",
        description: "Transform your research into published work with our expert guidance.",
        image: bgImg2,
        path: "services"
      },
      {
        title: "Research Writing",
        description: "Elevate your research with our expert writing assistance.",
        image: bgImg1,
        path: "services"
      },
      {
        title: "Presentation Design",
        description: "Craft impactful presentations that captivate your audience.",
        image: bgImg2,
        path: "services"
      }
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Expert Team",
      description: "Our team consists of experienced academics and professionals who understand the nuances of academic publishing."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Timely Delivery",
      description: "We understand the importance of deadlines in academia and ensure your projects are completed on time."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Tailored Approach",
      description: "Each project is unique, and we customize our services to meet your specific needs and requirements."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Our rigorous quality control process ensures that all deliverables meet the highest academic standards."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center"
        style={style}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60"></div>
        <div className="flex flex-col justify-center h-full px-6 md:px-16 text-white py-24 relative z-10" style={{ minHeight: '80vh' }}>
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Academic support <br/>
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">redefined</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Unlock your potential with expert guidance</p>
            <button 
              onClick={() => navigateTo('services')}
              className="bg-amber-600 text-white font-medium py-3 px-8 rounded-md inline-block hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-600/20 transform hover:-translate-y-1"
            >
              VIEW SERVICES
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Featured Services */}
      <div className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="transform transition-all duration-500 hover:scale-105">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  onClick={() => navigateTo(service.path)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      {/* <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <FeatureItem 
                icon={features[0].icon}
                title={features[0].title}
                description={features[0].description}
              />
              <FeatureItem 
                icon={features[1].icon}
                title={features[1].title}
                description={features[1].description}
              />
            </div>
            <div>
              <FeatureItem 
                icon={features[2].icon}
                title={features[2].title}
                description={features[2].description}
              />
              <FeatureItem 
                icon={features[3].icon}
                title={features[3].title}
                description={features[3].description}
              />
            </div>
          </div>
        </div>
      </div> */}
       <WhyChooseUs />
<br />
      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-amber-500 to-amber-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100V0l100 100H0z" fill="rgba(255,255,255,0.05)"></path>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your academic journey?</h2>
          <p className="text-xl mb-8">Contact us today for a consultation and see how we can help you succeed.</p>
          <button 
            onClick={() => navigateTo('contact')}
            className="bg-white text-amber-600 font-medium py-3 px-8 text-lg inline-block hover:bg-gray-100 transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

// Add these animations to your CSS
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeIn {
//   animation: fadeIn 1s ease-out forwards;
// }

export default HomePage;
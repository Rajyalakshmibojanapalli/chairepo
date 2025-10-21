// // src/pages/AboutPage.jsx
// import React from 'react';

// const AboutPage = () => {
//   return (
//     <div className="py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-4xl font-bold mb-6 text-center">About Nexus Publications</h1>
        
//         <div className="bg-white shadow-md p-8 rounded-lg mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
//           <p className="text-gray-700 mb-4">
//             Nexus Publications is dedicated to supporting academics, researchers, and students in their
//             pursuit of scholarly excellence. Founded by a team of experienced researchers and publishing
//             professionals, we understand the challenges of academic publishing and communication.
//           </p>
//           <p className="text-gray-700 mb-4">
//             Our mission is to bridge the gap between research and publication, helping brilliant minds
//             share their work with the world. We believe that quality research deserves quality presentation,
//             and we're here to make that happen.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           <div className="bg-white shadow-md p-8 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
//             <p className="text-gray-700 mb-4">
//               Nexus Publications was founded in 2020 by a group of academics who saw a need for more
//               personalized support in academic publishing. Having navigated the complex world of research
//               publication themselves, they understood the unique challenges faced by researchers.
//             </p>
//             <p className="text-gray-700">
//               What began as a small consulting service has grown into a comprehensive academic support
//               company, helping hundreds of researchers successfully publish their work in prestigious journals.
//             </p>
//           </div>
          
//           <div className="bg-white shadow-md p-8 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <div>
//                   <span className="font-medium">Excellence</span>
//                   <p className="text-gray-700">We are committed to delivering the highest quality service in everything we do.</p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <div>
//                   <span className="font-medium">Integrity</span>
//                   <p className="text-gray-700">We maintain the highest ethical standards in all our professional relationships.</p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <div>
//                   <span className="font-medium">Innovation</span>
//                   <p className="text-gray-700">We continually seek new ways to improve our services and meet evolving academic needs.</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="bg-white shadow-md p-8 rounded-lg">
//           <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
//               <h3 className="font-semibold text-lg">Dr. Emily Rodriguez</h3>
//               <p className="text-gray-600">Founder & Director</p>
//               <p className="text-gray-700 mt-2">PhD in Linguistics with over 15 years of academic publishing experience.</p>
//             </div>
//             <div className="text-center">
//               <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
//               <h3 className="font-semibold text-lg">Prof. James Chen</h3>
//               <p className="text-gray-600">Research Advisor</p>
//               <p className="text-gray-700 mt-2">Published author with expertise in scientific writing and methodology.</p>
//             </div>
//             <div className="text-center">
//               <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
//               <h3 className="font-semibold text-lg">Sarah Williams</h3>
//               <p className="text-gray-600">Publication Specialist</p>
//               <p className="text-gray-700 mt-2">Former editor at a top academic journal with extensive peer review experience.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;




// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">About <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Nexus Publications</span></h1>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>
        
        <div className="bg-white shadow-lg p-8 rounded-lg mb-8 hover:shadow-xl transition-shadow duration-300 border-t-2 border-amber-500">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nexus Publications is dedicated to supporting academics, researchers, and students in their
            pursuit of scholarly excellence. Founded by a team of experienced researchers and publishing
            professionals, we understand the challenges of academic publishing and communication.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our mission is to bridge the gap between research and publication, helping brilliant minds
            share their work with the world. We believe that quality research deserves quality presentation,
            and we're here to make that happen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-2 border-amber-500">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Our Story
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nexus Publications was founded in 2020 by a group of academics who saw a need for more
              personalized support in academic publishing. Having navigated the complex world of research
              publication themselves, they understood the unique challenges faced by researchers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What began as a small consulting service has grown into a comprehensive academic support
              company, helping hundreds of researchers successfully publish their work in prestigious journals.
            </p>
          </div>
          
          <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-2 border-amber-500">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Our Values
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start transition-all duration-300 hover:bg-amber-50 p-2 rounded-md">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2">
                  <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-amber-700">Excellence</span>
                  <p className="text-gray-700">We are committed to delivering the highest quality service in everything we do.</p>
                </div>
              </li>
              <li className="flex items-start transition-all duration-300 hover:bg-amber-50 p-2 rounded-md">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2">
                  <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-amber-700">Integrity</span>
                  <p className="text-gray-700">We maintain the highest ethical standards in all our professional relationships.</p>
                </div>
              </li>
              <li className="flex items-start transition-all duration-300 hover:bg-amber-50 p-2 rounded-md">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2">
                  <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-amber-700">Innovation</span>
                  <p className="text-gray-700">We continually seek new ways to improve our services and meet evolving academic needs.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-2 border-amber-500">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
            <span className="border-b-2 border-amber-500 pb-2">Our Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg text-white text-2xl font-bold overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span>ER</span>
              </div>
              <h3 className="font-semibold text-lg group-hover:text-amber-600 transition-colors duration-300">Dr. Emily Rodriguez</h3>
              <p className="text-amber-600 font-medium">Founder & Director</p>
              <p className="text-gray-700 mt-2">PhD in Linguistics with over 15 years of academic publishing experience.</p>
            </div>
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg text-white text-2xl font-bold overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span>JC</span>
              </div>
              <h3 className="font-semibold text-lg group-hover:text-amber-600 transition-colors duration-300">Prof. James Chen</h3>
              <p className="text-amber-600 font-medium">Research Advisor</p>
              <p className="text-gray-700 mt-2">Published author with expertise in scientific writing and methodology.</p>
            </div>
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg text-white text-2xl font-bold overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span>SW</span>
              </div>
              <h3 className="font-semibold text-lg group-hover:text-amber-600 transition-colors duration-300">Sarah Williams</h3>
              <p className="text-amber-600 font-medium">Publication Specialist</p>
              <p className="text-gray-700 mt-2">Former editor at a top academic journal with extensive peer review experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
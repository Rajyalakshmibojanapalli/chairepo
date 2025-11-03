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




// // src/pages/AboutPage.jsx
// import React from 'react';

// const AboutPage = () => {
//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-4xl font-bold mb-4 text-center">About <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Nexus Publications</span></h1>
//         <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>

//         <div className="bg-white shadow-lg p-8 rounded-lg mb-8 hover:shadow-xl transition-shadow duration-300 border-t-2 border-amber-500">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
//             <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-3">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </span>
//             Our Mission
//           </h2>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             Nexus Publications is dedicated to supporting academics, researchers, and students in their
//             pursuit of scholarly excellence. Founded by a team of experienced researchers and publishing
//             professionals, we understand the challenges of academic publishing and communication.
//           </p>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             Our mission is to bridge the gap between research and publication, helping brilliant minds
//             share their work with the world. We believe that quality research deserves quality presentation,
//             and we're here to make that happen.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-2 border-amber-500">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
//               <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-3">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                 </svg>
//               </span>
//               Our Story
//             </h2>
//             <p className="text-gray-700 mb-4 leading-relaxed">
//               Nexus Publications was founded in 2020 by a group of academics who saw a need for more
//               personalized support in academic publishing. Having navigated the complex world of research
//               publication themselves, they understood the unique challenges faced by researchers.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               What began as a small consulting service has grown into a comprehensive academic support
//               company, helping hundreds of researchers successfully publish their work in prestigious journals.
//             </p>
//           </div>

//           <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-2 border-amber-500">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
//               <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-3">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//               </span>
//               Our Values
//             </h2>
//             <ul className="space-y-4">
//               <li className="flex items-start transition-all duration-300 hover:bg-amber-50 p-2 rounded-md">
//                 <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2">
//                   <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <div>
//                   <span className="font-medium text-amber-700">Excellence</span>
//                   <p className="text-gray-700">We are committed to delivering the highest quality service in everything we do.</p>
//                 </div>
//               </li>
//               <li className="flex items-start transition-all duration-300 hover:bg-amber-50 p-2 rounded-md">
//                 <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2">
//                   <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <div>
//                   <span className="font-medium text-amber-700">Integrity</span>
//                   <p className="text-gray-700">We maintain the highest ethical standards in all our professional relationships.</p>
//                 </div>
//               </li>
//               <li className="flex items-start transition-all duration-300 hover:bg-amber-50 p-2 rounded-md">
//                 <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2">
//                   <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <div>
//                   <span className="font-medium text-amber-700">Innovation</span>
//                   <p className="text-gray-700">We continually seek new ways to improve our services and meet evolving academic needs.</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border-t-2 border-amber-500">
//           <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
//             <span className="border-b-2 border-amber-500 pb-2">Our Team</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center group">
//               <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg text-white text-2xl font-bold overflow-hidden group-hover:scale-105 transition-transform duration-300">
//                 <span>ER</span>
//               </div>
//               <h3 className="font-semibold text-lg group-hover:text-amber-600 transition-colors duration-300">Dr. Emily Rodriguez</h3>
//               <p className="text-amber-600 font-medium">Founder & Director</p>
//               <p className="text-gray-700 mt-2">PhD in Linguistics with over 15 years of academic publishing experience.</p>
//             </div>
//             <div className="text-center group">
//               <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg text-white text-2xl font-bold overflow-hidden group-hover:scale-105 transition-transform duration-300">
//                 <span>JC</span>
//               </div>
//               <h3 className="font-semibold text-lg group-hover:text-amber-600 transition-colors duration-300">Prof. James Chen</h3>
//               <p className="text-amber-600 font-medium">Research Advisor</p>
//               <p className="text-gray-700 mt-2">Published author with expertise in scientific writing and methodology.</p>
//             </div>
//             <div className="text-center group">
//               <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg text-white text-2xl font-bold overflow-hidden group-hover:scale-105 transition-transform duration-300">
//                 <span>SW</span>
//               </div>
//               <h3 className="font-semibold text-lg group-hover:text-amber-600 transition-colors duration-300">Sarah Williams</h3>
//               <p className="text-amber-600 font-medium">Publication Specialist</p>
//               <p className="text-gray-700 mt-2">Former editor at a top academic journal with extensive peer review experience.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;



// BarestoAbout

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// import { Facebook, Twitter, Instagram } from 'lucide-react';

// const FadeInWhenVisible = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.6, delay }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const ZoomInWhenVisible = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//       transition={{ duration: 0.6, delay }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default function AboutPage() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
//   const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

//   const teamMembers = [
//     {
//       name: "Fynley Wilkinson",
//       image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
//       socials: { facebook: true, twitter: true, discord: true }
//     },
//     {
//       name: "Myra Welsh",
//       image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
//       socials: { facebook: true, twitter: true, instagram: true }
//     },
//     {
//       name: "Aysha Shepard",
//       image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop",
//       socials: { facebook: true, twitter: true, instagram: true }
//     },
//     {
//       name: "Robyn Peel",
//       image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop",
//       socials: { facebook: true, twitter: true, instagram: true }
//     }
//   ];

//   return (
//     <div ref={containerRef} className="min-h-screen bg-[#18191b] text-white overflow-hidden">
//       {/* Hero Section */}
//       <motion.div
//         className="relative bg-cover bg-center py-24 md:py-32 sticky top-0"
//         style={{ opacity: heroOpacity }}
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&h=600&fit=crop')"
//           }}
//         />
//         <motion.div
//           className="container mx-auto px-4 text-center relative z-10"
//           style={{ y: heroY }}
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-amber-500 text-3xl md:text-4xl mb-4 font-light"
//           >
//             Discover
//           </motion.h2>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-5xl md:text-7xl font-bold mb-6"
//           >
//             Our Story
//           </motion.h2>
//           <motion.nav
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex justify-center items-center gap-2 text-sm"
//             aria-label="breadcrumb"
//           >
//             <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">Home</a>
//             <span className="text-gray-400">/</span>
//             <span className="text-gray-300" aria-current="page">About</span>
//           </motion.nav>
//         </motion.div>
//       </motion.div>

//       {/* Story Section */}
//       <section className="py-20 relative z-20 bg-[#18191b]">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <FadeInWhenVisible>
//                 <h2 className="text-4xl font-bold mb-6">How It Begins</h2>
//               </FadeInWhenVisible>

//               <FadeInWhenVisible delay={0.1}>
//                 <p className="text-xl text-gray-300 mb-6 leading-relaxed">
//                   At "Baresto," we believe in the power of good coffee and warm hospitality. Our journey began with a simple vision: to create a welcoming space where friends, families, and strangers alike could come together to enjoy delicious beverages, homemade treats, and meaningful connections.
//                 </p>
//               </FadeInWhenVisible>

//               <FadeInWhenVisible delay={0.2}>
//                 <p className="text-gray-400 mb-4 leading-relaxed">
//                   Nestled in the heart of our community, "Baresto" is more than just a café; it's a gathering place, a refuge from the chaos of everyday life, and a beacon of positivity and warmth. From the moment you walk through our doors, you're greeted with the inviting aroma of freshly brewed coffee and the friendly smiles of our dedicated team. Our menu is a reflection of our commitment to quality and creativity. We source the finest beans from around the world and carefully craft each cup with precision and care. Whether you're craving a classic espresso, a creamy latte, or a refreshing iced tea, we have something to delight every palate.
//                 </p>
//               </FadeInWhenVisible>

//               <FadeInWhenVisible delay={0.3}>
//                 <p className="text-gray-400 leading-relaxed">
//                   As a proud member of the community, we're committed to giving back and making a positive impact wherever we can. From supporting local artisans and farmers to hosting events that celebrate diversity and inclusion, we believe in using our platform to spread joy and goodwill in our neighborhood and beyond.
//                 </p>
//               </FadeInWhenVisible>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-4">
//                 <ZoomInWhenVisible>
//                   <motion.img
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                     src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
//                     alt="Coffee shop interior"
//                     className="w-full rounded-3xl shadow-xl cursor-pointer"
//                   />
//                 </ZoomInWhenVisible>

//                 <FadeInWhenVisible delay={0.2}>
//                   <motion.div
//                     whileHover={{ scale: 1.05, backgroundColor: "#8dcb3f" }}
//                     transition={{ duration: 0.3 }}
//                     className="bg-amber-600 rounded-3xl p-6 text-center cursor-pointer"
//                   >
//                     <motion.h3
//                       initial={{ scale: 1 }}
//                       whileInView={{ scale: [1, 1.1, 1] }}
//                       transition={{ duration: 1, delay: 0.5 }}
//                       viewport={{ once: true }}
//                       className="text-4xl font-bold mb-2"
//                     >
//                       750+
//                     </motion.h3>
//                     <h4 className="text-lg">Positive feedbacks</h4>
//                   </motion.div>
//                 </FadeInWhenVisible>
//               </div>

//               <div className="space-y-4 pt-8">
//                 <FadeInWhenVisible delay={0.1}>
//                   <motion.div
//                     whileHover={{ scale: 1.05, backgroundColor: "#8dcb3f" }}
//                     transition={{ duration: 0.3 }}
//                     className="bg-amber-600 rounded-3xl p-6 text-center cursor-pointer"
//                   >
//                     <motion.h3
//                       initial={{ scale: 1 }}
//                       whileInView={{ scale: [1, 1.1, 1] }}
//                       transition={{ duration: 1, delay: 0.6 }}
//                       viewport={{ once: true }}
//                       className="text-4xl font-bold mb-2"
//                     >
//                       50%
//                     </motion.h3>
//                     <h4 className="text-lg">Turnover increased</h4>
//                   </motion.div>
//                 </FadeInWhenVisible>

//                 <ZoomInWhenVisible delay={0.3}>
//                   <motion.img
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                     src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop"
//                     alt="Coffee preparation"
//                     className="w-full rounded-3xl shadow-xl cursor-pointer"
//                   />
//                 </ZoomInWhenVisible>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Meet Our Chefs Section */}
//       <section
//         className="relative bg-cover bg-center py-20"
//         style={{
//           backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=400&fit=crop')"
//         }}
//       >
//         <div className="container mx-auto px-4 text-center">
//           <FadeInWhenVisible>
//             <h2 className="text-amber-500 text-3xl md:text-4xl mb-4 font-light">Meet Our</h2>
//           </FadeInWhenVisible>
//           <FadeInWhenVisible delay={0.2}>
//             <h2 className="text-5xl md:text-7xl font-bold">Chefs</h2>
//           </FadeInWhenVisible>
//         </div>
//       </section>

//       {/* Team Grid */}
//       <section className="py-20 bg-[#18191b]">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teamMembers.map((member, index) => (
//               <FadeInWhenVisible key={index} delay={index * 0.1}>
//                 <motion.div
//                   className="text-center"
//                   whileHover={{ y: -10 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="relative mb-6 inline-block">
//                     <motion.img
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.3 }}
//                       src={member.image}
//                       alt={member.name}
//                       className="relative z-10 rounded-3xl w-full max-w-xs mx-auto"
//                     />
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                       viewport={{ once: true }}
//                       className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-3/4  rounded-3xl"
//                     />
//                   </div>
//                   <h4 className="text-xl font-bold mb-1">{member.name}</h4>
//                   <div className="text-gray-400 mb-3">Chef</div>
//                   <div className="flex justify-center gap-3">
//                     {member.socials.facebook && (
//                       <motion.a
//                         href="#"
//                         whileHover={{ scale: 1.2, backgroundColor: "#8dcb3f" }}
//                         whileTap={{ scale: 0.9 }}
//                         transition={{ duration: 0.2 }}
//                         className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center"
//                       >
//                         <Facebook size={18} />
//                       </motion.a>
//                     )}
//                     {member.socials.twitter && (
//                       <motion.a
//                         href="#"
//                         whileHover={{ scale: 1.2, backgroundColor: "#8dcb3f" }}
//                         whileTap={{ scale: 0.9 }}
//                         transition={{ duration: 0.2 }}
//                         className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center"
//                       >
//                         <Twitter size={18} />
//                       </motion.a>
//                     )}
//                     {member.socials.instagram && (
//                       <motion.a
//                         href="#"
//                         whileHover={{ scale: 1.2, backgroundColor: "#8dcb3f" }}
//                         whileTap={{ scale: 0.9 }}
//                         transition={{ duration: 0.2 }}
//                         className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center"
//                       >
//                         <Instagram size={18} />
//                       </motion.a>
//                     )}
//                   </div>
//                 </motion.div>
//               </FadeInWhenVisible>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const ZoomInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);

  const teamMembers = [
    {
      name: "Fynley Wilkinson",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
      socials: { facebook: true, twitter: true, discord: true }
    },
    {
      name: "Myra Welsh",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      socials: { facebook: true, twitter: true, instagram: true }
    },
    {
      name: "Aysha Shepard",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop",
      socials: { facebook: true, twitter: true, instagram: true }
    },
    {
      name: "Robyn Peel",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop",
      socials: { facebook: true, twitter: true, instagram: true }
    }
  ];

  return (
    <div className="min-h-screen bg-[#18191b] text-white">
      {/* Hero Section */}
      {/* <section
        className="relative text-white overflow-hidden min-h-[500px] flex items-center"
        style={{
          background: '#222',
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&h=600&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '170px 0 80px 0'
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <motion.div
            className="text-center"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            <h2
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
              style={{
                fontFamily: "'Sacramento', cursive",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "clamp(36px, 8vw, 72px)",
                color: "#8dcb3f",
                margin: 0,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              Discover
            </h2>
            <h2
              className="uppercase font-bold inline-block border-y border-white/50 border-opacity-50 m-0"
              style={{
                fontSize: '40px',
                lineHeight: '40px',
                letterSpacing: '10px',
                fontFamily: 'serif',
                color: '#fff' // Optional: use conditionally if in .text-light
              }}
            >
              Our Story
            </h2>
            <nav aria-label="breadcrumb">
              <ol className="flex justify-center items-center space-x-2 text-sm">
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Home
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-400" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </motion.div>
        </div>
      </section> */}

      {/* Discover Our Story Section */}
      {/* Discover Our Story Section */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

        .font-sacramento {
          font-family: "Sacramento", cursive;
        }
      `}</style>

      <section
        className="relative text-white overflow-hidden min-h-[500px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&h=600&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',  // <--- here it is
          padding: '170px 0 80px 0'
        }}
      >
        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <FadeInWhenVisible>
            <h2
              className="text-6xl text-[#8dcb3f] md:text-7xl lg:text-8xl font-bold mb-4 font-sacramento"

            >
              Discover
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <h2
              className="uppercase font-bold inline-block border-y border-white/50 m-0"
              style={{
                fontSize: '40px',
                lineHeight: '40px',
                letterSpacing: '10px',
                fontFamily: 'serif',
                color: '#fff'
              }}
            >
              Our Story
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <nav aria-label="breadcrumb" className="mt-6 flex justify-center items-center space-x-2 text-sm">
              <ol className="flex space-x-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Home
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-400" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </FadeInWhenVisible>
        </div>
      </section>


      {/* Story Section */}
      <section
        className="py-20"
        style={{
          background: '#18191b',
          backgroundSize: 'cover',
          padding: '90px 0'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeInWhenVisible>
                <h2 className="text-4xl font-bold mb-6">How It Begins</h2>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.1}>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
At Tea 5 cafe, we believe great tea has the power to bring people together. Our journey began with a simple idea to serve authentic tea made with love and create a space where everyone feels welcome. From the first pour to the last sip, we focus on quality, comfort, and connection.                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <p className="text-gray-400 mb-4 leading-relaxed">
Started in Hyderabad, Tea 5 cafe soon became a favorite spot for families, friends, and entrepreneurs to relax and share good moments. Every cup is made from premium tea leaves that are carefully selected for freshness and taste.                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.3}>
                <p className="text-gray-400 leading-relaxed mb-4">
Tea 5 cafe is more than a tea shop. It is a growing business that connects India’s tea tradition with a modern franchise model. Through our tea cafe franchise in Hyderabad and across India, we help individuals start a low investment tea franchise and build a successful future.                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-gray-400 leading-relaxed mb-4">
Our goal is not only to serve tea but also to create opportunities. We believe in community growth, sustainability, and supporting every franchise partner to achieve lasting success. </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <p className="text-gray-400 leading-relaxed mb-4">
At Tea 5 cafe, every cup tells a story of trust, ambition, and togetherness.
</p>
              </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ZoomInWhenVisible>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
                    alt="Coffee shop interior"
                    className="w-full rounded-3xl shadow-xl cursor-pointer"
                  />
                </ZoomInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#8dcb3f] rounded-3xl p-6 text-center cursor-pointer  hover:shadow-[0_20px_40px_rgba(0,0,3,0.3)"
                  >
                    <motion.h3
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold mb-2"
                    >
                      750+
                    </motion.h3>
                    <h4 className="text-lg">Positive feedbacks</h4>
                  </motion.div>
                </FadeInWhenVisible>
              </div>

              <div className="space-y-4 pt-8">
                <FadeInWhenVisible delay={0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#8dcb3f] rounded-3xl p-6 text-center cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,3,0.3)]"
                  >
                    <motion.h3
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold mb-2"
                    >
                      50%
                    </motion.h3>
                    <h4 className="text-lg">Turnover increased</h4>
                  </motion.div>
                </FadeInWhenVisible>

                <ZoomInWhenVisible delay={0.3}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop"
                    alt="Coffee preparation"
                    className="w-full rounded-3xl shadow-xl cursor-pointer"
                  />
                </ZoomInWhenVisible>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Chefs Section */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=400&fit=crop')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
              style={{
                fontFamily: "'Sacramento', cursive",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "clamp(36px, 8vw, 55px)",
                color: "#8dcb3f",
                margin: 0,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              Meet Our
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <h2
              className="uppercase font-bold inline-block border-y border-white/50 m-0"
              style={{
                fontSize: '40px',
                lineHeight: '40px',
                letterSpacing: '10px',
                fontFamily: 'serif',
                color: '#fff'
              }}
            >
              Chefs
            </h2>
          </FadeInWhenVisible>
        </div>
      </section>


      {/* Team Grid */}
      <section
        className="py-20"
        style={{
          background: '#18191b',
          backgroundSize: 'cover',
          padding: '90px 0'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative mb-6 inline-block">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 rounded-3xl w-full max-w-xs mx-auto"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  // className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-3/4 bg-amber-600 rounded-3xl"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <div className="text-gray-400 mb-3">Chef</div>
                <div className="flex justify-center gap-3">
                  {member.socials.facebook && (
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, backgroundColor: "#8dcb3f" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center"
                    >
                      <Facebook size={18} />
                    </motion.a>
                  )}
                  {member.socials.twitter && (
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, backgroundColor: "#8dcb3f" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center"
                    >
                      <Twitter size={18} />
                    </motion.a>
                  )}
                  {member.socials.instagram && (
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, backgroundColor: "#8dcb3f" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center"
                    >
                      <Instagram size={18} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
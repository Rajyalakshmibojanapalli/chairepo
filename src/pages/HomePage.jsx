// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import bg1 from "../assets/bg-1.jpg"
// import bg2 from "../assets/bg-2.jpg"
// import "swiper/css";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// const HomePage = () => {
//   const [scrollY, setScrollY] = useState(0);
  
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full overflow-x-hidden">
//       {/* Hero Section */}
// <section className="relative h-screen">
//   <section className="relative w-full h-[100vh]">
//     <Swiper
//       modules={[Navigation, Autoplay]}
//       navigation
//       autoplay={{ delay: 3000 }}
//       loop
//       className="h-full"
//     >
//       {[
//         {
//           image: "https://madebydesignesia.com/themes/baresto/02_images/slider/slide-1.jpg",
//           line1: "The Perfect",
//           line2: "Aromatic"
//         },
//         {
//           image: "https://madebydesignesia.com/themes/baresto/02_images/slider/slide-2.jpg",
//           line1: "Exquisite",
//           line2: "Taste"
//         }
//       ].map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div
//             className="w-full h-full bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//             {/* Content wrapper */}
//             <div className="absolute inset-0 flex items-center justify-center">
              
//               {/* Text container */}
//               <div className="text-center">
//                 {/* First line - The Perfect */}
//                 <h1 
//                   style={{
//                     fontFamily: "'Sacramento', cursive",
//                     fontWeight: 400,
//                     fontStyle: "normal",
//                     fontSize: "48px",
//                     color: "#d16b02",
//                     margin: "0 0 10px 0"
//                   }}
//                 >
//                   {slide.line1}
//                 </h1>
                
//                 {/* Second line - Aromatic */}
//                 <p 
//                   style={{
//                     fontFamily: "'Sacramento', cursive",
//                     fontWeight: 400,
//                     fontStyle: "normal",
//                     fontSize: "48px",
//                     color: "#8dcb3f",
//                     margin: 0
//                   }}
//                 >
//                   {slide.line2}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </section>

//   {/* Make sure the font is imported */}
//   <style jsx>{`
//     @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
//   `}</style>
// </section>

//       {/* Our Story Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             <div className="w-full md:w-1/2 text-center md:text-left">
//               <h2 className="text-amber-500 text-2xl mb-4 font-bold">Discover</h2>
//               <h3 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h3>
//               <p className="text-lg leading-relaxed text-gray-700">
//                 In the heart of the bustling metropolis, where the rhythm of life pulses relentlessly, there exists a sanctuary hidden among the chaos—a place where time slows, and worries fade into the aroma of freshly ground coffee beans.
//               </p>
//             </div>
//             <div className="w-full md:w-1/2">
//               <img 
//                 src={bg1} 
//                 alt="Our Story" 
//                 className="w-full h-auto rounded-2xl shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-amber-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
//             {[
//               {
//                 icon: "https://madebydesignesia.com/themes/baresto/02_images/misc/icon-1.png",
//                 title: "Aromatic Taste",
//                 description: "Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.",
//               },
//               {
//                 icon: "https://madebydesignesia.com/themes/baresto/02_images/misc/icon-2.png",
//                 title: "Delicious Foods",
//                 description: "From the first tantalizing aroma to the last lingering taste, our menu is a celebration of diverse cuisines and bold creativity.",
//               },
//               {
//                 icon: "https://madebydesignesia.com/themes/baresto/02_images/misc/icon-3.png",
//                 title: "Make Your Party",
//                 description: "Transforming our cozy café into the ultimate party destination, where friends gather, laughter flows, and memories are made.",
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="p-6 flex flex-col items-center"
//               >
//                 <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-6" />
//                 <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
//                 <p className="text-gray-600 mb-6">{feature.description}</p>
//                 <a href="#" className="text-amber-600 border-b-2 border-amber-600 pb-1 font-medium hover:text-amber-700 transition-colors">
//                   Read More
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Favorite Coffee Section */}
//       <section className="py-20 bg-cover bg-center text-white relative"
//                style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover", backgroundPosition: "center" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-amber-400 text-2xl mb-4 font-bold">Favorite</h2>
//             <h3 className="text-4xl md:text-5xl font-bold">Coffee</h3>
//           </div>
//         </div>
//       </section>

//       {/* Coffee Menu Section */}
//       <section className="py-20 bg-cover bg-fixed bg-center relative"
//                style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-3.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-xl">
//             <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
//               <div className="grid grid-cols-3 mb-6 font-bold text-amber-800 border-b pb-4">
//                 <div>Espresso</div>
//                 <div>Medium <span className="text-xs block">16 oz</span></div>
//                 <div>Large <span className="text-xs block">20 oz</span></div>
//               </div>
              
//               {[
//                 {
//                   name: "Espresso",
//                   description: "Espresso, where passion meets perfection.",
//                   medium: "1.75",
//                   large: "2.20",
//                 },
//                 {
//                   name: "Mocchiato",
//                   description: "The perfect harmony of espresso and sweetness",
//                   medium: "1.94",
//                   large: "2.25",
//                 },
//                 {
//                   name: "Classic Cappucino",
//                   description: "A timeless delight brewed just for you.",
//                   medium: "2.90",
//                   large: "3.90",
//                 },
//                 {
//                   name: "Cappucino",
//                   description: "Where rich espresso meets frothy perfection.",
//                   medium: "3.15",
//                   large: "4.15",
//                 },
//                 {
//                   name: "Mocha latte",
//                   description: "The perfect blend of chocolate and espresso.",
//                   medium: "3.45",
//                   large: "4.35",
//                 },
//                 {
//                   name: "Caramel late",
//                   description: "Where smooth espresso meets golden caramel bliss.",
//                   medium: "3.45",
//                   large: "4.35",
//                 },
//                 {
//                   name: "Cafe americano",
//                   description: "The essence of pure coffee bliss.",
//                   medium: "2.25",
//                   large: "3.50",
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="grid grid-cols-3 py-4 border-b border-amber-100">
//                   <div>
//                     <h4 className="font-medium">{item.name}</h4>
//                     <p className="text-xs text-gray-600 mt-1">{item.description}</p>
//                   </div>
//                   <div className="text-amber-800 font-medium">${item.medium}</div>
//                   <div className="text-amber-800 font-medium">${item.large}</div>
//                 </div>
//               ))}
              
//               <div className="mt-8">
//                 <a href="/menu" className="px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 inline-block">
//                   View All Menu
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Favorite Foods Section */}
//       <section className="py-20 bg-cover bg-center text-white relative"
//                style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-4.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-amber-400 text-2xl mb-4 font-bold">Favorite</h2>
//             <h3 className="text-4xl md:text-5xl font-bold">Foods</h3>
//           </div>
//         </div>
//       </section>

//       {/* Foods Menu Section */}
//       <section className="py-20 bg-cover bg-fixed bg-center relative"
//                style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-5.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="flex justify-end">
//             <div className="max-w-xl">
//               <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
//                 <div className="grid grid-cols-3 mb-6 font-bold text-amber-800 border-b pb-4">
//                   <div className="col-span-2">Snacks</div>
//                   <div>Price</div>
//                 </div>
                
//                 {[
//                   {
//                     name: "Plain bread",
//                     description: "Soft and golden with a tantalizing aroma",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Milk bread",
//                     description: "Infused with the richness of milk",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Sandwich bread",
//                     description: "Classic combinations like ham and cheese",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Brown bread",
//                     description: "Crafted from whole grain flour",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Garlic bread",
//                     description: "Infused with aromatic garlic and rich butter",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Wheat bread",
//                     description: "With hearty texture and nutty flavor",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Banana bread",
//                     description: "With its banana taste and delightful aroma",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Burger bun",
//                     description: "With fluffy texture and subtle sweetness",
//                     price: "2.75",
//                   },
//                 ].map((item, index) => (
//                   <div key={index} className="grid grid-cols-3 py-4 border-b border-amber-100">
//                     <div className="col-span-2">
//                       <h4 className="font-medium">{item.name}</h4>
//                       <p className="text-xs text-gray-600 mt-1">{item.description}</p>
//                     </div>
//                     <div className="text-amber-800 font-medium">${item.price}</div>
//                   </div>
//                 ))}
                
//                 <div className="mt-8">
//                   <a href="/menu" className="px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 inline-block">
//                     View All Menu
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
//             {/* https://madebydesignesia.com/themes/baresto/02_images/menu/1.png
//             https://madebydesignesia.com/themes/baresto/02_images/menu/2.png
//             https://madebydesignesia.com/themes/baresto/02_images/menu/3.png
//             https://madebydesignesia.com/themes/baresto/02_images/menu/4.png
//             https://madebydesignesia.com/themes/baresto/02_images/menu/5.png
//             https://madebydesignesia.com/themes/baresto/02_images/menu/6.png */}
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <div key={num} className="relative group overflow-hidden">
//                <img 
//   src={`https://madebydesignesia.com/themes/baresto/02_images/menu/${num}.png`} 
//   alt={`Gallery item ${num}`}
//   className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
// />

//                 <div className="absolute inset-0 bg-amber-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-white font-medium">View</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Customer Review Section */}
//       <section className="bg-amber-800 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row">
//             <div className="w-full md:w-1/2 md:pr-8">
//               <div className="h-full bg-cover bg-center hidden md:block" 
//                    style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-side-1.jpg')" }}>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 md:pl-8">
//               <div className="text-center mb-10">
//                 <h2 className="text-amber-300 text-2xl mb-4 font-bold">Customers</h2>
//                 <h3 className="text-4xl font-bold">Review</h3>
//               </div>
              
//               <blockquote className="text-xl italic border-l-4 border-amber-300 pl-6">
//                 As a busy professional, I rely on my morning coffee to kickstart my day. The rich, smooth taste and heavenly aroma never fail to perk me up and get me ready to tackle whatever the day throws at me. It's like a little slice of heaven in a cup!
//                 <footer className="mt-4 font-medium text-amber-300">Jenna Smith</footer>
//               </blockquote>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-12 bg-amber-100">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-0">
//               <i className="fas fa-phone text-amber-600 mr-3"></i>
//               Call us now and get special offers!
//             </h3>
//             <a href="/contact" className="px-8 py-3 border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white transition-all duration-300">
//               Call Us Now
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Opening Hours Section */}
//       <section className="py-20 bg-cover bg-center text-white relative"
//                style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-6.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-amber-400 text-2xl mb-4 font-bold">We are</h2>
//             <h3 className="text-4xl md:text-5xl font-bold mb-16">Open</h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//               <div className="text-center">
//                 <span className="text-amber-400 font-bold text-xl">Mon - Thu</span>
//                 <div className="text-2xl mt-2">10:30AM - 9:30PM</div>
//               </div>
//               <div className="text-center">
//                 <span className="text-amber-400 font-bold text-xl">Friday</span>
//                 <div className="text-2xl mt-2">10:00AM - 10:30PM</div>
//               </div>
//               <div className="text-center">
//                 <span className="text-amber-400 font-bold text-xl">Sat - Sun</span>
//                 <div className="text-2xl mt-2">09:30AM - 11:00PM</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;



// import React, { useState, useEffect, useRef } from "react";
// import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
// import bg1 from "../assets/bg-1.jpg";
// import bg2 from "../assets/bg-2.jpg";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, EffectFade } from "swiper/modules";

// const HomePage = () => {
//   const [scrollY, setScrollY] = useState(0);
  
//   // Refs for scroll animations
//   const storyRef = useRef(null);
//   const featuresRef = useRef(null);
//   const coffeeRef = useRef(null);
//   const foodRef = useRef(null);
//   const galleryRef = useRef(null);
//   const reviewRef = useRef(null);
//   const hoursRef = useRef(null);
  
//   // Controls for animations
//   const storyControls = useAnimation();
//   const featuresControls = useAnimation();
//   const coffeeControls = useAnimation();
//   const foodControls = useAnimation();
//   const galleryControls = useAnimation();
//   const reviewControls = useAnimation();
//   const hoursControls = useAnimation();
  
//   // Check if elements are in view
//   const storyInView = useInView(storyRef, { once: false, threshold: 0.2 });
//   const featuresInView = useInView(featuresRef, { once: false, threshold: 0.2 });
//   const coffeeInView = useInView(coffeeRef, { once: false, threshold: 0.2 });
//   const foodInView = useInView(foodRef, { once: false, threshold: 0.2 });
//   const galleryInView = useInView(galleryRef, { once: false, threshold: 0.2 });
//   const reviewInView = useInView(reviewRef, { once: false, threshold: 0.2 });
//   const hoursInView = useInView(hoursRef, { once: false, threshold: 0.2 });
  
//   // Handle scroll for parallax and animations
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
  
//   // Trigger animations when sections come into view
//   useEffect(() => {
//     if (storyInView) storyControls.start("visible");
//     if (featuresInView) featuresControls.start("visible");
//     if (coffeeInView) coffeeControls.start("visible");
//     if (foodInView) foodControls.start("visible");
//     if (galleryInView) galleryControls.start("visible");
//     if (reviewInView) reviewControls.start("visible");
//     if (hoursInView) hoursControls.start("visible");
//   }, [
//     storyInView, featuresInView, coffeeInView, 
//     foodInView, galleryInView, reviewInView, hoursInView,
//     storyControls, featuresControls, coffeeControls,
//     foodControls, galleryControls, reviewControls, hoursControls
//   ]);
  
//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };
  
//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   const fadeInScale = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <div className="w-full overflow-x-hidden bg-[#ffffff]">
//       {/* Hero Section */}
//       <section className="relative h-screen" id="home">
//         <section className="relative w-full h-[100vh]">
//           <Swiper
//             modules={[Navigation, Autoplay, EffectFade]}
//             navigation
//             autoplay={{ delay: 5000 }}
//             loop
//             effect="fade"
//             speed={1000}
//             className="h-full"
//           >
//             {[
//               {
//                 image: "https://madebydesignesia.com/themes/baresto/02_images/slider/slide-1.jpg",
//                 line1: "The Perfect",
//                 line2: "Aromatic",
//                 description: "Experience coffee like never before"
//               },
//               {
//                 image: "https://madebydesignesia.com/themes/baresto/02_images/slider/slide-2.jpg",
//                 line1: "Exquisite",
//                 line2: "Taste",
//                 description: "Savor our delicious creations"
//               }
//             ].map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className="w-full h-full bg-cover bg-center relative"
//                   style={{ backgroundImage: `url(${slide.image})` }}
//                 >
//                   <div className="absolute inset-0 "></div>

//                   {/* Content wrapper */}
//                   <div className="absolute inset-0 flex items-center justify-center">
                    
//                     {/* Text container */}
//                     <div className="text-center">
//                       {/* First line */}
//                       <motion.h1 
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         style={{
//                           fontFamily: "'Sacramento', cursive",
//                           fontWeight: 400,
//                           fontStyle: "normal",
//                           fontSize: "clamp(36px, 8vw, 64px)",
//                           color: "#d16b02",
//                           margin: "0 0 10px 0"
//                         }}
//                       >
//                         {slide.line1}
//                       </motion.h1>
                      
//                       {/* Second line */}
//                       <motion.p 
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.5 }}
//                         style={{
//                           fontFamily: "'Sacramento', cursive",
//                           fontWeight: 400,
//                           fontStyle: "normal",
//                           fontSize: "clamp(36px, 8vw, 64px)",
//                           color: "#8dcb3f",
//                           margin: 0
//                         }}
//                       >
//                         {slide.line2}
//                       </motion.p>
                      
//                       {/* Description */}
//                       <motion.p
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.8 }}
//                         className="text-white mt-6 text-lg md:text-xl max-w-md mx-auto"
//                       >
//                         {slide.description}
//                       </motion.p>
                      
//                       {/* CTA Button */}
//                       <motion.a
//                         href="#menu"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 1.1 }}
//                         whileHover={{ scale: 1.05, backgroundColor: "#d16b02" }}
//                         className="mt-8 inline-block px-8 py-3 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-all duration-300"
//                       >
//                         View Our Menu
//                       </motion.a>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </section>

//         {/* Make sure the font is imported */}
//         <style jsx>{`
//           @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
//         `}</style>
        
//         {/* Scroll Indicator */}
//         <motion.div 
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2, duration: 1 }}
//         >
//           <motion.div 
//             className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             <motion.div
//               className="w-1 h-3 bg-white rounded-full mt-2"
//               animate={{ y: [0, 16, 0] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Our Story Section */}
//       <section ref={storyRef} className="py-20 md:py-28" id="about">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="flex flex-col md:flex-row items-center gap-10"
//             initial="hidden"
//             animate={storyControls}
//             variants={staggerChildren}
//           >
//             <motion.div 
//               className="w-full md:w-1/2 text-center md:text-left"
//               variants={fadeInUp}
//             >
//               <h2 className="text-[#d16b02] text-2xl mb-4 font-bold">Discover</h2>
//               <h3 className="text-3xl md:text-4xl font-bold mb-8 text-black">Our Story</h3>
//               <p className="text-lg leading-relaxed text-gray-700">
//                 In the heart of the bustling metropolis, where the rhythm of life pulses relentlessly, there exists a sanctuary hidden among the chaos—a place where time slows, and worries fade into the aroma of freshly ground coffee beans.
//               </p>
//               <motion.a 
//                 href="#about"
//                 className="mt-6 inline-block px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 Read More
//               </motion.a>
//             </motion.div>
//             <motion.div 
//               className="w-full md:w-1/2"
//               variants={fadeInUp}
//             >
//               <motion.img 
//                 src={bg1} 
//                 alt="Our Story" 
//                 className="w-full h-auto rounded-2xl shadow-lg"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section ref={featuresRef} className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             animate={featuresControls}
//             variants={fadeInUp}
//           >
//             <h2 className="text-[#d16b02] text-2xl mb-4 font-bold">Why Choose Us</h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-black">Our Specialties</h3>
//           </motion.div>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-3 gap-10"
//             initial="hidden"
//             animate={featuresControls}
//             variants={staggerChildren}
//           >
//             {[
//               {
//                 icon: "https://madebydesignesia.com/themes/baresto/02_images/misc/icon-1.png",
//                 title: "Aromatic Taste",
//                 description: "Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.",
//               },
//               {
//                 icon: "https://madebydesignesia.com/themes/baresto/02_images/misc/icon-2.png",
//                 title: "Delicious Foods",
//                 description: "From the first tantalizing aroma to the last lingering taste, our menu is a celebration of diverse cuisines and bold creativity.",
//               },
//               {
//                 icon: "https://madebydesignesia.com/themes/baresto/02_images/misc/icon-3.png",
//                 title: "Make Your Party",
//                 description: "Transforming our cozy café into the ultimate party destination, where friends gather, laughter flows, and memories are made.",
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInScale}
//                 whileHover={{ y: -10, transition: { duration: 0.3 } }}
//                 className="p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center group hover:bg-[#d16b02] transition-colors duration-300"
//               >
//                 <motion.img 
//                   src={feature.icon} 
//                   alt={feature.title} 
//                   className="w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-110" 
//                 />
//                 <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">{feature.title}</h3>
//                 <p className="text-gray-600 mb-6 group-hover:text-white transition-colors duration-300">{feature.description}</p>
//                 <a href="#" className="text-[#d16b02] group-hover:text-white border-b-2 border-[#d16b02] group-hover:border-white pb-1 font-medium transition-colors duration-300">
//                   Read More
//                 </a>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Favorite Coffee Section */}
//       <section 
//         ref={coffeeRef} 
//         className="py-28 bg-cover bg-center text-white relative" 
//         id="menu"
//         style={{ 
//           backgroundImage: `url(${bg2})`, 
//           backgroundAttachment: "fixed",
//           backgroundSize: "cover", 
//           backgroundPosition: "center" 
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             animate={coffeeControls}
//             variants={fadeInUp}
//           >
//             <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold">Favorite</h2>
//             <h3 className="text-4xl md:text-5xl font-bold">Coffee</h3>
//             <motion.div 
//               className="w-20 h-1 bg-[#d16b02] mx-auto mt-6"
//               initial={{ width: 0 }}
//               animate={{ width: 80 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             />
//           </motion.div>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
//             initial="hidden"
//             animate={coffeeControls}
//             variants={staggerChildren}
//           >
//             {[
//               {
//                 name: "Espresso",
//                 image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//                 price: "$2.75",
//                 description: "Rich, robust, and aromatic perfection in a single shot."
//               },
//               {
//                 name: "Cappuccino",
//                 image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//                 price: "$3.95",
//                 description: "The perfect balance of espresso, steamed milk and foam."
//               },
//               {
//                 name: "Caramel Macchiato",
//                 image: "https://images.unsplash.com/photo-1587075448451-6335696b841b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//                 price: "$4.50",
//                 description: "Sweet indulgence with layers of espresso and caramel."
//               }
//             ].map((coffee, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInScale}
//                 whileHover={{ y: -10, scale: 1.03 }}
//                 className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden group"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={coffee.image} 
//                     alt={coffee.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <h4 className="text-xl font-bold">{coffee.name}</h4>
//                     <span className="text-[#8dcb3f] font-bold">{coffee.price}</span>
//                   </div>
//                   <p className="text-gray-300">{coffee.description}</p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-4 px-6 py-2 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-colors"
//                   >
//                     Order Now
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Coffee Menu Section */}
//       <section className="py-20 bg-cover bg-fixed bg-center relative"
//                style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-3.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div 
//             className="max-w-xl"
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <motion.div 
//               className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <div className="grid grid-cols-3 mb-6 font-bold text-[#d16b02] border-b pb-4">
//                 <div>Espresso</div>
//                 <div>Medium <span className="text-xs block">16 oz</span></div>
//                 <div>Large <span className="text-xs block">20 oz</span></div>
//               </div>
              
//               {[
//                 {
//                   name: "Espresso",
//                   description: "Espresso, where passion meets perfection.",
//                   medium: "1.75",
//                   large: "2.20",
//                 },
//                 {
//                   name: "Mocchiato",
//                   description: "The perfect harmony of espresso and sweetness",
//                   medium: "1.94",
//                   large: "2.25",
//                 },
//                 {
//                   name: "Classic Cappucino",
//                   description: "A timeless delight brewed just for you.",
//                   medium: "2.90",
//                   large: "3.90",
//                 },
//                 {
//                   name: "Cappucino",
//                   description: "Where rich espresso meets frothy perfection.",
//                   medium: "3.15",
//                   large: "4.15",
//                 },
//                 {
//                   name: "Mocha latte",
//                   description: "The perfect blend of chocolate and espresso.",
//                   medium: "3.45",
//                   large: "4.35",
//                 },
//                 {
//                   name: "Caramel late",
//                   description: "Where smooth espresso meets golden caramel bliss.",
//                   medium: "3.45",
//                   large: "4.35",
//                 },
//                 {
//                   name: "Cafe americano",
//                   description: "The essence of pure coffee bliss.",
//                   medium: "2.25",
//                   large: "3.50",
//                 },
//               ].map((item, index) => (
//                 <motion.div 
//                   key={index} 
//                   className="grid grid-cols-3 py-4 border-b border-amber-100"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ backgroundColor: "rgba(209, 107, 2, 0.05)" }}
//                 >
//                   <div>
//                     <h4 className="font-medium text-black">{item.name}</h4>
//                     <p className="text-xs text-gray-600 mt-1">{item.description}</p>
//                   </div>
//                   <div className="text-[#d16b02] font-medium">${item.medium}</div>
//                   <div className="text-[#d16b02] font-medium">${item.large}</div>
//                 </motion.div>
//               ))}
              
//               <motion.div 
//                 className="mt-8"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 viewport={{ once: true }}
//               >
//                 <motion.a 
//                   href="#menu" 
//                   className="px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300 inline-block"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   View All Menu
//                 </motion.a>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Favorite Foods Section */}
//       <section 
//         ref={foodRef} 
//         className="py-28 bg-cover bg-center text-white relative"
//         style={{ 
//           backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-4.jpg')",
//           backgroundAttachment: "fixed" 
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             animate={foodControls}
//             variants={fadeInUp}
//           >
//             <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold">Favorite</h2>
//             <h3 className="text-4xl md:text-5xl font-bold">Foods</h3>
//             <motion.div 
//               className="w-20 h-1 bg-[#d16b02] mx-auto mt-6"
//               initial={{ width: 0 }}
//               animate={{ width: 80 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             />
//           </motion.div>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
//             initial="hidden"
//             animate={foodControls}
//             variants={staggerChildren}
//           >
//             {[
//               {
//                 name: "Avocado Toast",
//                 image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//                 price: "$8.95",
//                 description: "Fresh avocado, cherry tomatoes, and feta on artisan sourdough."
//               },
//               {
//                 name: "Berry Parfait",
//                 image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//                 price: "$6.50",
//                 description: "Layers of yogurt, granola, and fresh seasonal berries."
//               },
//               {
//                 name: "Chicken Pesto",
//                 image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//                 price: "$10.95",
//                 description: "Grilled chicken with homemade pesto on a brioche bun."
//               }
//             ].map((food, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInScale}
//                 whileHover={{ y: -10, scale: 1.03 }}
//                 className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden group"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={food.image} 
//                     alt={food.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <h4 className="text-xl font-bold">{food.name}</h4>
//                     <span className="text-[#8dcb3f] font-bold">{food.price}</span>
//                   </div>
//                   <p className="text-gray-300">{food.description}</p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-4 px-6 py-2 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-colors"
//                   >
//                     Order Now
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Foods Menu Section */}
//       <section className="py-20 bg-cover bg-fixed bg-center relative"
//                style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-5.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="flex justify-end">
//             <motion.div 
//               className="max-w-xl"
//               initial={{ opacity: 0, x: 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <motion.div 
//                 className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="grid grid-cols-3 mb-6 font-bold text-[#d16b02] border-b pb-4">
//                   <div className="col-span-2">Snacks</div>
//                   <div>Price</div>
//                 </div>
                
//                 {[
//                   {
//                     name: "Plain bread",
//                     description: "Soft and golden with a tantalizing aroma",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Milk bread",
//                     description: "Infused with the richness of milk",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Sandwich bread",
//                     description: "Classic combinations like ham and cheese",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Brown bread",
//                     description: "Crafted from whole grain flour",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Garlic bread",
//                     description: "Infused with aromatic garlic and rich butter",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Wheat bread",
//                     description: "With hearty texture and nutty flavor",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Banana bread",
//                     description: "With its banana taste and delightful aroma",
//                     price: "2.75",
//                   },
//                   {
//                     name: "Burger bun",
//                     description: "With fluffy texture and subtle sweetness",
//                     price: "2.75",
//                   },
//                 ].map((item, index) => (
//                   <motion.div 
//                     key={index} 
//                     className="grid grid-cols-3 py-4 border-b border-amber-100"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     whileHover={{ backgroundColor: "rgba(209, 107, 2, 0.05)" }}
//                   >
//                     <div className="col-span-2">
//                       <h4 className="font-medium text-black">{item.name}</h4>
//                       <p className="text-xs text-gray-600 mt-1">{item.description}</p>
//                     </div>
//                     <div className="text-[#d16b02] font-medium">${item.price}</div>
//                   </motion.div>
//                 ))}
                
//                 <motion.div 
//                   className="mt-8"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.7 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.a 
//                     href="#menu" 
//                     className="px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300 inline-block"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     View All Menu
//                   </motion.a>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section ref={galleryRef} className="py-20 bg-[#ffffff]" id="gallery">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             animate={galleryControls}
//             variants={fadeInUp}
//           >
//             <h2 className="text-[#d16b02] text-2xl mb-4 font-bold">Our</h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-black">Gallery</h3>
//           </motion.div>
          
//           <motion.div 
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
//             initial="hidden"
//             animate={galleryControls}
//             variants={staggerChildren}
//           >
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <motion.div 
//                 key={num} 
//                 className="relative group overflow-hidden rounded-lg"
//                 variants={fadeInScale}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <img 
//                   src={`https://madebydesignesia.com/themes/baresto/02_images/menu/${num}.png`} 
//                   alt={`Gallery item ${num}`}
//                   className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-[#d16b02] bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//                   <motion.span 
//                     className="text-white font-medium"
//                     whileHover={{ scale: 1.2 }}
//                   >
//                     View
//                   </motion.span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
          
//           <motion.div 
//             className="text-center mt-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <motion.a
//               href="#gallery"
//               className="px-8 py-3 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-all duration-300 inline-block"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View Full Gallery
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Customer Review Section */}
//       <section ref={reviewRef} className="bg-[#d16b02] text-white py-24">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row">
//             <motion.div 
//               className="w-full md:w-1/2 md:pr-8"
//               initial={{ opacity: 0, x: -50 }}
//               animate={reviewControls}
//               variants={{ 
//                 hidden: { opacity: 0, x: -50 },
//                 visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
//               }}
//             >
//               <div className="h-60 md:h-full bg-cover bg-center rounded-xl overflow-hidden hidden md:block" 
//                    style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-side-1.jpg')" }}>
//               </div>
//             </motion.div>
            
//             <motion.div 
//               className="w-full md:w-1/2 md:pl-8"
//               initial="hidden"
//               animate={reviewControls}
//               variants={fadeInUp}
//             >
//               <div className="text-center mb-10">
//                 <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold">Customers</h2>
//                 <h3 className="text-4xl font-bold">Review</h3>
//               </div>
              
//               <Swiper
//                 autoplay={{ delay: 5000 }}
//                 loop
//                 className="review-slider"
//               >
//                 {[
//                   {
//                     text: "As a busy professional, I rely on my morning coffee to kickstart my day. The rich, smooth taste and heavenly aroma never fail to perk me up and get me ready to tackle whatever the day throws at me. It's like a little slice of heaven in a cup!",
//                     name: "Jenna Smith",
//                     role: "Marketing Director"
//                   },
//                   {
//                     text: "This café has become my second home. The ambiance is perfect for both work and relaxation, and the staff remembers my order every time. Their signature latte is worth every penny - I've never tasted anything quite like it elsewhere.",
//                     name: "Michael Chen",
//                     role: "Software Engineer"
//                   },
//                   {
//                     text: "I've been to cafés all over the world, and this one stands out for its attention to detail. The beans are ethically sourced, the pastries are made fresh daily, and the atmosphere feels both elegant and welcoming. A true gem!",
//                     name: "Sarah Johnson",
//                     role: "Travel Blogger"
//                   }
//                 ].map((review, index) => (
//                   <SwiperSlide key={index}>
//                     <motion.blockquote 
//                       className="text-xl italic border-l-4 border-[#8dcb3f] pl-6"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {review.text}
//                       <footer className="mt-6">
//                         <div className="font-medium text-[#8dcb3f] text-lg">{review.name}</div>
//                         <div className="text-white text-sm opacity-80">{review.role}</div>
//                       </footer>
//                     </motion.blockquote>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-14 bg-[#8dcb3f] bg-opacity-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="flex flex-col md:flex-row items-center justify-between"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-0 text-black">
//               <i className="fas fa-phone text-[#d16b02] mr-3"></i>
//               Call us now and get special offers!
//             </h3>
//             <motion.a 
//               href="tel:+123456789" 
//               className="px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300 flex items-center"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//               </svg>
//               Call Us Now
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Opening Hours Section */}
//       <section 
//         ref={hoursRef} 
//         className="py-28 bg-cover bg-center text-white relative"
//         style={{ 
//           backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-6.jpg')",
//           backgroundAttachment: "fixed" 
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div 
//             className="text-center mb-16"
//             initial="hidden"
//             animate={hoursControls}
//             variants={fadeInUp}
//           >
//             <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold">We are</h2>
//             <h3 className="text-4xl md:text-5xl font-bold mb-16">Open</h3>
            
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
//               initial="hidden"
//               animate={hoursControls}
//               variants={staggerChildren}
//             >
//               {[
//                 {
//                   days: "Mon - Thu",
//                   hours: "10:30AM - 9:30PM"
//                 },
//                 {
//                   days: "Friday",
//                   hours: "10:00AM - 10:30PM"
//                 },
//                 {
//                   days: "Sat - Sun",
//                   hours: "09:30AM - 11:00PM"
//                 }
//               ].map((schedule, index) => (
//                 <motion.div 
//                   key={index} 
//                   className="text-center bg-black bg-opacity-30 backdrop-blur-sm p-8 rounded-lg"
//                   variants={fadeInScale}
//                   whileHover={{ y: -10, scale: 1.05 }}
//                 >
//                   <span className="text-[#8dcb3f] font-bold text-xl block mb-3">{schedule.days}</span>
//                   <div className="text-2xl">{schedule.hours}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Back to Top Button */}
//       <motion.button
//         className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#d16b02] text-white flex items-center justify-center shadow-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: scrollY > 300 ? 1 : 0 }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//         </svg>
//       </motion.button>
//     </div>
//   );
// };

// export default HomePage;



import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  
  // Refs for scroll animations
  const storyRef = useRef(null);
  const featuresRef = useRef(null);
  const coffeeRef = useRef(null);
  const foodRef = useRef(null);
  const galleryRef = useRef(null);
  const reviewRef = useRef(null);
  const hoursRef = useRef(null);
  
  // Controls for animations
  const storyControls = useAnimation();
  const featuresControls = useAnimation();
  const coffeeControls = useAnimation();
  const foodControls = useAnimation();
  const galleryControls = useAnimation();
  const reviewControls = useAnimation();
  const hoursControls = useAnimation();
  
  // Check if elements are in view
  const storyInView = useInView(storyRef, { once: false, threshold: 0.2 });
  const featuresInView = useInView(featuresRef, { once: false, threshold: 0.2 });
  const coffeeInView = useInView(coffeeRef, { once: false, threshold: 0.2 });
  const foodInView = useInView(foodRef, { once: false, threshold: 0.2 });
  const galleryInView = useInView(galleryRef, { once: false, threshold: 0.2 });
  const reviewInView = useInView(reviewRef, { once: false, threshold: 0.2 });
  const hoursInView = useInView(hoursRef, { once: false, threshold: 0.2 });
  
  // Handle scroll for parallax and animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };
  
  // Trigger animations when sections come into view
  useEffect(() => {
    if (storyInView) storyControls.start("visible");
    if (featuresInView) featuresControls.start("visible");
    if (coffeeInView) coffeeControls.start("visible");
    if (foodInView) foodControls.start("visible");
    if (galleryInView) galleryControls.start("visible");
    if (reviewInView) reviewControls.start("visible");
    if (hoursInView) hoursControls.start("visible");
  }, [
    storyInView, featuresInView, coffeeInView, 
    foodInView, galleryInView, reviewInView, hoursInView,
    storyControls, featuresControls, coffeeControls,
    foodControls, galleryControls, reviewControls, hoursControls
  ]);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const fadeInDown = {
    hidden: { opacity: 0, y: -60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  // Circle decorative element component
  const CircleDecor = ({ size, color, top, left, right, bottom, delay = 0 }) => (
    <motion.div 
      className="absolute rounded-full opacity-50" 
      style={{ 
        width: size, 
        height: size, 
        background: color, 
        top, 
        left, 
        right, 
        bottom,
        filter: "blur(20px)",
        zIndex: 0 
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 0.3, 
        scale: 1, 
        x: [0, 10, -10, 0],
        y: [0, -10, 10, 0],
      }}
      transition={{ 
        duration: 25, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut",
        times: [0, 0.33, 0.66, 1]
      }}
    />
  );

  // Coffee menu tabs
  const menuTabs = [
    { name: "Coffee", icon: "☕" },
    { name: "Breakfast", icon: "🍳" },
    { name: "Lunch", icon: "🍽️" }
  ];

  // Menu items for each tab
  const menuItems = [
    // Coffee items
    [
      { name: "Espresso", price: "$2.75", description: "Rich, robust, and aromatic" },
      { name: "Cappuccino", price: "$3.95", description: "Perfect balance of espresso and milk" },
      { name: "Latte", price: "$4.25", description: "Smooth and creamy with espresso" },
      { name: "Americano", price: "$3.50", description: "Espresso with hot water" },
      { name: "Mocha", price: "$4.50", description: "Chocolate and coffee perfection" },
      { name: "Macchiato", price: "$3.75", description: "Espresso with a touch of milk" },
    ],
    // Breakfast items
    [
      { name: "Avocado Toast", price: "$8.95", description: "Fresh avocado on artisan bread" },
      { name: "Eggs Benedict", price: "$10.50", description: "Poached eggs with hollandaise" },
      { name: "Pancakes", price: "$7.95", description: "Fluffy pancakes with maple syrup" },
      { name: "Omelette", price: "$9.50", description: "Three eggs with choice of fillings" },
      { name: "Granola Bowl", price: "$6.95", description: "Homemade granola with yogurt" },
      { name: "Breakfast Burrito", price: "$8.50", description: "Eggs, cheese, beans and salsa" },
    ],
    // Lunch items
    [
      { name: "Club Sandwich", price: "$11.95", description: "Triple-decker with turkey and bacon" },
      { name: "Caesar Salad", price: "$9.50", description: "Classic Caesar with house dressing" },
      { name: "Quiche", price: "$8.95", description: "Savory tart with seasonal vegetables" },
      { name: "Soup of the Day", price: "$6.50", description: "Freshly made daily" },
      { name: "Chicken Wrap", price: "$10.95", description: "Grilled chicken with veggies" },
      { name: "Veggie Burger", price: "$12.50", description: "House-made patty on brioche" },
    ]
  ];

  return (
    <div className="w-full overflow-x-hidden bg-[#ffffff] relative">
      {/* Hero Section */}
      <section className="relative h-screen" id="home">
        <section className="relative w-full h-[100vh]">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade, Pagination, Parallax]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            effect="fade"
            speed={1000}
            parallax={true}
            className="h-full"
          >
            {[
              {
                image: "https://madebydesignesia.com/themes/baresto/02_images/slider/slide-1.jpg",
                line1: "The Perfect",
                line2: "Aromatic",
                description: "Experience coffee like never before"
              },
              {
                image: "https://madebydesignesia.com/themes/baresto/02_images/slider/slide-2.jpg",
                line1: "Exquisite",
                line2: "Taste",
                description: "Savor our delicious creations"
              }
            ].map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-swiper-parallax="-300"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                  {/* Content wrapper */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative z-10">
                      {/* Decorative elements */}
                      <motion.div 
                        className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-[#8dcb3f] opacity-20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.2 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                      
                      <motion.div 
                        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full border border-[#d16b02] opacity-20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.2 }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    
                      {/* Text container */}
                      <div className="text-center px-4 relative z-20">
                        {/* First line */}
                        <motion.h1 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          style={{
                            fontFamily: "'Sacramento', cursive",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "clamp(36px, 8vw, 72px)",
                            color: "#d16b02",
                            margin: "0 0 10px 0",
                            textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                          }}
                        >
                          {slide.line1}
                        </motion.h1>
                        
                        {/* Second line */}
                        <motion.p 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
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
                          {slide.line2}
                        </motion.p>
                        
                        {/* Divider */}
                        <motion.div 
                          className="h-[3px] w-0 bg-white mx-auto my-6"
                          initial={{ width: 0 }}
                          animate={{ width: "120px" }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                        />
                        
                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="text-white mt-4 text-lg md:text-xl max-w-md mx-auto font-light"
                        >
                          {slide.description}
                        </motion.p>
                        
                        {/* CTA Button */}
                        <motion.a
                          href="#menu"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('menu');
                          }}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.1 }}
                          whileHover={{ scale: 1.05, backgroundColor: "#d16b02" }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-10 inline-block px-10 py-4 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-all duration-300 shadow-lg relative overflow-hidden group"
                        >
                          <span className="relative z-10">View Our Menu</span>
                          <motion.span 
                            className="absolute inset-0 bg-[#8dcb3f]"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Make sure the font is imported */}
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
        `}</style>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div 
            className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col space-y-4">
          {['home', 'about', 'features', 'menu', 'gallery', 'reviews', 'hours'].map((section, index) => (
            <motion.button
              key={section}
              className="w-3 h-3 rounded-full border border-[#d16b02] bg-white focus:outline-none relative group"
              whileHover={{ scale: 1.5 }}
              onClick={() => scrollToSection(section)}
            >
              <motion.span 
                className={`absolute inset-0 rounded-full ${scrollY > (index * 500) && scrollY < ((index+1) * 500) ? 'bg-[#d16b02]' : 'bg-transparent'}`}
                layoutId="navDot"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              
              <motion.span 
                className="absolute whitespace-nowrap right-full mr-4 text-[#d16b02] opacity-0 group-hover:opacity-100 text-sm font-medium"
                initial={{ x: 20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-24 md:py-32 relative" id="about">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
        
        {/* Decorative elements */}
        <CircleDecor size="300px" color="#8dcb3f" top="-5%" left="-5%" delay={0.2} />
        <CircleDecor size="200px" color="#d16b02" bottom="10%" right="5%" delay={0.5} />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-16"
            initial="hidden"
            animate={storyControls}
            variants={staggerChildren}
          >
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left"
              variants={fadeInLeft}
            >
              <motion.h2 
                className="inline-block text-[#d16b02] text-2xl mb-3 font-bold relative"
                whileInView={{ 
                  backgroundPosition: ["100% 0%", "0% 0%"],
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Discover
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-[#d16b02] rounded-full" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-black">Our Story</h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  In the heart of the bustling metropolis, where the rhythm of life pulses relentlessly, there exists a sanctuary hidden among the chaos—a place where time slows, and worries fade into the aroma of freshly ground coffee beans.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Since 2005, we've been crafting exceptional coffee experiences, sourcing only the finest beans from sustainable farms around the world.
                </p>
              </div>
              <motion.a 
                href="#about"
                className="mt-8 inline-block px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300 relative group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Read More</span>
                <motion.span 
                  className="absolute inset-0 bg-[#d16b02] translate-y-full"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 relative"
              variants={fadeInRight}
            >
              <motion.div
                className="absolute -inset-4 border-4 border-[#8dcb3f] rounded-2xl transform rotate-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.img 
                src={bg1} 
                alt="Our Story" 
                className="w-full h-auto rounded-2xl shadow-xl relative z-10"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
                initial={{ rotateY: 15 }}
                whileInView={{ rotateY: 0 }}
                viewport={{ once: true }}
              />
              
              <motion.div 
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white shadow-xl overflow-hidden z-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Coffee Beans" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { number: "18", text: "Years of Excellence" },
              { number: "27", text: "Expert Baristas" },
              { number: "54", text: "Coffee Varieties" },
              { number: "150k", text: "Happy Customers" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.h4 
                  className="text-4xl md:text-5xl font-bold text-[#d16b02]"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.h4>
                <p className="text-gray-600 mt-2 font-medium">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-gray-50 relative" id="features">
        <CircleDecor size="250px" color="#8dcb3f" top="10%" right="-5%" delay={0.2} />
        <CircleDecor size="200px" color="#d16b02" bottom="-5%" left="5%" delay={0.5} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            animate={featuresControls}
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-block px-4 py-1 bg-[#d16b02] bg-opacity-10 text-[#d16b02] rounded-full mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Our <span className="text-[#d16b02]">Specialties</span>
            </h3>
            <motion.div 
              className="h-1 w-24 bg-[#8dcb3f] mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
            initial="hidden"
            animate={featuresControls}
            variants={staggerChildren}
          >
            {[
              {
                icon: "https://madebydesignesia.com/themes/baresto/02_images/misc/icon-1.png",
                title: "Aromatic Taste",
                description: "Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.",
              },
              {
                icon: "https://madebydesignesia.com/themes/baresto/02_images/misc/icon-2.png",
                title: "Delicious Foods",
                description: "From the first tantalizing aroma to the last lingering taste, our menu is a celebration of diverse cuisines and bold creativity.",
              },
              {
                icon: "https://madebydesignesia.com/themes/baresto/02_images/misc/icon-3.png",
                title: "Make Your Party",
                description: "Transforming our cozy café into the ultimate party destination, where friends gather, laughter flows, and memories are made.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInScale}
                whileHover={{ y: -16, transition: { duration: 0.3 } }}
                className="p-8 bg-white rounded-xl shadow-xl flex flex-col items-center text-center group hover:bg-[#d16b02] transition-colors duration-500 relative"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-white rounded-xl"
                  initial={false}
                  animate={{ 
                    backgroundColor: isHovered === index ? "#d16b02" : "#ffffff",
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                <motion.div 
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-[#8dcb3f] bg-opacity-10 mb-6 relative z-10"
                  animate={{ 
                    backgroundColor: isHovered === index ? "#ffffff20" : "#8dcb3f10",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" 
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-black relative z-10"
                  animate={{ color: isHovered === index ? "#ffffff" : "#000000" }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-6 relative z-10"
                  animate={{ color: isHovered === index ? "#ffffffcc" : "#4b5563" }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.description}
                </motion.p>
                
                <motion.div
                  className="relative z-10"
                  initial={false}
                  animate={{ 
                    color: isHovered === index ? "#ffffff" : "#d16b02",
                    borderColor: isHovered === index ? "#ffffff" : "#d16b02" 
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <a 
                    href="#" 
                    className="border-b-2 pb-1 font-medium inline-flex items-center transition-all duration-300"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Favorite Coffee Section */}
      <section 
        ref={coffeeRef} 
        className="py-32 bg-cover bg-center text-white relative" 
        id="menu"
        style={{ 
          backgroundImage: `url(${bg2})`, 
          backgroundAttachment: "fixed",
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={coffeeControls}
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-block px-4 py-1 bg-white bg-opacity-10 text-[#8dcb3f] rounded-full mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Menu
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-bold">
              The <span className="text-[#8dcb3f]">Perfect</span> Taste
            </h3>
            <motion.div 
              className="w-20 h-1 bg-[#d16b02] mx-auto mt-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
          
          {/* Menu tabs */}
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div 
              className="flex justify-center items-center space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {menuTabs.map((tab, index) => (
                <motion.button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium text-lg relative ${activeTab === index ? 'text-white' : 'text-gray-300'}`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === index && (
                    <motion.span
                      className="absolute inset-0 bg-[#d16b02] rounded-full z-0"
                      layoutId="tabBackground"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">{tab.icon}</span>
                    {tab.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>
            
            {/* Menu items grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={activeTab}
            >
              <AnimatePresence mode="wait">
                {menuItems[activeTab].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                        <p className="text-gray-300 mt-2">{item.description}</p>
                      </div>
                      <span className="font-bold text-[#8dcb3f] text-xl">{item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
          
          {/* CTA for full menu */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#menu"
              className="inline-block px-10 py-4 bg-[#d16b02] text-white rounded-full relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Full Menu</span>
              <motion.span 
                className="absolute inset-0 bg-[#8dcb3f]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-[#ffffff] relative">
        <CircleDecor size="200px" color="#d16b02" top="5%" left="5%" delay={0.2} />
        <CircleDecor size="300px" color="#8dcb3f" bottom="10%" right="-10%" delay={0.5} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-4 py-1 bg-[#8dcb3f] bg-opacity-10 text-[#8dcb3f] rounded-full mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Must Try
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-bold text-black">Featured <span className="text-[#d16b02]">Products</span></h3>
            <motion.div 
              className="w-20 h-1 bg-[#d16b02] mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
          </motion.div>
          
          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Signature Espresso",
                image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                price: "$4.50",
                rating: 5,
                tag: "Bestseller"
              },
              {
                name: "Artisan Croissant",
                image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
                price: "$3.95",
                rating: 4.5,
                tag: "New"
              },
              {
                name: "Vanilla Cold Brew",
                image: "https://images.unsplash.com/photo-1595785603795-1c06a314c564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                price: "$5.25",
                rating: 4.8,
                tag: "Popular"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-[#d16b02] text-white text-sm font-medium px-3 py-1 rounded-full">{product.tag}</span>
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-black">{product.name}</h4>
                    <span className="text-[#d16b02] font-bold">{product.price}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#8dcb3f]' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-2">({product.rating})</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-2 px-6 py-2 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-24 bg-gray-50 relative" id="gallery">
        <CircleDecor size="250px" color="#d16b02" top="-5%" right="10%" delay={0.2} />
        <CircleDecor size="200px" color="#8dcb3f" bottom="-5%" left="10%" delay={0.5} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={galleryControls}
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-block px-4 py-1 bg-[#d16b02] bg-opacity-10 text-[#d16b02] rounded-full mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Creations
            </motion.span>
            <h3 className="text-3xl md:text-5xl font-bold text-black">
              Gallery <span className="text-[#d16b02]">Showcase</span>
            </h3>
            <motion.div 
              className="w-20 h-1 bg-[#8dcb3f] mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
            initial="hidden"
            animate={galleryControls}
            variants={staggerChildren}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div 
                key={num} 
                className="relative group overflow-hidden rounded-xl shadow-lg"
                variants={fadeInScale}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <img 
                  src={`https://madebydesignesia.com/themes/baresto/02_images/menu/${num}.png`} 
                  alt={`Gallery item ${num}`}
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] via-[#00000000] to-[#00000000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <motion.div 
                    className="text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-medium text-lg">Delicious Coffee</h4>
                    <p className="text-sm text-gray-300">Perfected by our expert baristas</p>
                  </motion.div>
                </div>
                <motion.div 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 text-[#d16b02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#gallery"
              className="px-8 py-3 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-all duration-300 inline-block relative overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Full Gallery</span>
              <motion.span 
                className="absolute inset-0 bg-[#8dcb3f]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Customer Review Section */}
      <section ref={reviewRef} className="bg-[#d16b02] text-white py-28 relative" id="reviews">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <CircleDecor size="250px" color="#ffffff" top="10%" right="5%" delay={0.2} />
        <CircleDecor size="200px" color="#8dcb3f" bottom="10%" left="5%" delay={0.5} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="w-full md:w-1/2 md:pr-16"
              initial={{ opacity: 0, x: -50 }}
              animate={reviewControls}
              variants={{ 
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="h-60 md:h-full rounded-xl overflow-hidden hidden md:block relative">
                <img 
                  src="https://madebydesignesia.com/themes/baresto/02_images/background/bg-side-1.jpg" 
                  alt="Coffee shop interior" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#d16b02] bg-opacity-30"></div>
                
                {/* Review stats */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#d16b02]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-black font-bold ml-2">4.9</span>
                    </div>
                    <span className="text-gray-500 font-medium">1,286 reviews</span>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { label: "Quality", value: 95 },
                      { label: "Ambiance", value: 90 },
                      { label: "Service", value: 98 }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <span className="text-gray-700 w-24">{item.label}</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
                          <motion.div 
                            className="h-full rounded-full bg-[#8dcb3f]" 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 + (i * 0.2) }}
                          />
                        </div>
                        <span className="text-gray-700 ml-2 w-10 text-right">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 md:pl-8 mt-12 md:mt-0"
              initial="hidden"
              animate={reviewControls}
              variants={fadeInUp}
            >
              <motion.div className="text-center md:text-left mb-10">
                <motion.span 
                  className="inline-block px-4 py-1 bg-white bg-opacity-10 text-white rounded-full mb-4 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Testimonials
                </motion.span>
                <h3 className="text-4xl md:text-5xl font-bold">
                  Customer <span className="text-[#8dcb3f]">Reviews</span>
                </h3>
              </motion.div>
              
              <Swiper
                autoplay={{ delay: 5000 }}
                loop
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} bg-white"></span>`;
                  }
                }}
                className="review-slider"
              >
                {[
                  {
                    text: "As a busy professional, I rely on my morning coffee to kickstart my day. The rich, smooth taste and heavenly aroma never fail to perk me up and get me ready to tackle whatever the day throws at me. It's like a little slice of heaven in a cup!",
                    name: "Jenna Smith",
                    role: "Marketing Director",
                    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
                  },
                  {
                    text: "This café has become my second home. The ambiance is perfect for both work and relaxation, and the staff remembers my order every time. Their signature latte is worth every penny - I've never tasted anything quite like it elsewhere.",
                    name: "Michael Chen",
                    role: "Software Engineer",
                    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
                  },
                  {
                    text: "I've been to cafés all over the world, and this one stands out for its attention to detail. The beans are ethically sourced, the pastries are made fresh daily, and the atmosphere feels both elegant and welcoming. A true gem!",
                    name: "Sarah Johnson",
                    role: "Travel Blogger",
                    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
                  }
                ].map((review, index) => (
                  <SwiperSlide key={index}>
                    <motion.div 
                      className="p-6 md:p-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-12 h-12 text-[#8dcb3f] mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      
                      <div className="text-xl md:text-2xl italic mb-8 font-light leading-relaxed">
                        {review.text}
                      </div>
                      
                      <div className="flex items-center">
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-white"
                        />
                        <div className="ml-4">
                          <div className="font-bold text-[#8dcb3f] text-lg">{review.name}</div>
                          <div className="text-white text-sm opacity-80">{review.role}</div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#8dcb3f] bg-opacity-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl md:text-2xl font-bold mb-6 md:mb-0 text-black flex items-center"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-[#d16b02]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call us now and get special offers!</span>
            </motion.h3>
            
            <motion.a 
              href="tel:+123456789" 
              className="px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300 flex items-center rounded-full overflow-hidden relative"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us Now
              </span>
              <motion.span 
                className="absolute inset-0 bg-[#d16b02]"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section 
        ref={hoursRef} 
        className="py-32 bg-cover bg-center text-white relative"
        id="hours"
        style={{ 
          backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-6.jpg')",
          backgroundAttachment: "fixed" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={hoursControls}
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-block px-4 py-1 bg-white bg-opacity-10 text-white rounded-full mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Visit Us
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              We are <span className="text-[#8dcb3f]">Open</span>
            </h3>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
              Come experience our inviting atmosphere and exceptional service. We can't wait to welcome you!
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              animate={hoursControls}
              variants={staggerChildren}
            >
              {[
                {
                  days: "Mon - Thu",
                  hours: "10:30AM - 9:30PM"
                },
                {
                  days: "Friday",
                  hours: "10:00AM - 10:30PM"
                },
                {
                  days: "Sat - Sun",
                  hours: "09:30AM - 11:00PM"
                }
              ].map((schedule, index) => (
                <motion.div 
                  key={index} 
                  className="relative bg-black bg-opacity-40 backdrop-blur-sm p-8 rounded-xl overflow-hidden group"
                  variants={fadeInScale}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d16b02] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  
                  <motion.div 
                    className="relative z-10"
                    initial={false}
                    animate={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-[#8dcb3f] font-bold text-xl block mb-3">{schedule.days}</span>
                    <div className="text-3xl font-light">{schedule.hours}</div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-[#8dcb3f]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              className="flex justify-center mt-16 space-x-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#"
                className="flex items-center justify-center px-8 py-4 bg-[#d16b02] rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="relative z-10">Book a Table</span>
                <motion.span 
                  className="absolute inset-0 bg-[#8dcb3f]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="#"
                className="flex items-center justify-center px-8 py-4 border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-[#d16b02] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find Location
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#d16b02] text-white flex items-center justify-center shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 300 ? 1 : 0 }}
        whileHover={{ scale: 1.1, backgroundColor: "#8dcb3f" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
};

export default HomePage;
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  
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

  return (
    <div className="w-full overflow-x-hidden bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative h-screen" id="home">
        <section className="relative w-full h-[100vh]">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            navigation
            autoplay={{ delay: 5000 }}
            loop
            effect="fade"
            speed={1000}
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
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 "></div>

                  {/* Content wrapper */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    
                    {/* Text container */}
                    <div className="text-center">
                      {/* First line */}
                      <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                          fontFamily: "'Sacramento', cursive",
                          fontWeight: 400,
                          fontStyle: "normal",
                          fontSize: "clamp(36px, 8vw, 64px)",
                          color: "#d16b02",
                          margin: "0 0 10px 0"
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
                          fontSize: "clamp(36px, 8vw, 64px)",
                          color: "#8dcb3f",
                          margin: 0
                        }}
                      >
                        {slide.line2}
                      </motion.p>
                      
                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-white mt-6 text-lg md:text-xl max-w-md mx-auto"
                      >
                        {slide.description}
                      </motion.p>
                      
                      {/* CTA Button */}
                      <motion.a
                        href="#menu"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#d16b02" }}
                        className="mt-8 inline-block px-8 py-3 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-all duration-300"
                      >
                        View Our Menu
                      </motion.a>
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

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 md:py-28" id="about">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-10"
            initial="hidden"
            animate={storyControls}
            variants={staggerChildren}
          >
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left"
              variants={fadeInUp}
            >
              <h2 className="text-[#d16b02] text-2xl mb-4 font-bold">Discover</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-black">Our Story</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                In the heart of the bustling metropolis, where the rhythm of life pulses relentlessly, there exists a sanctuary hidden among the chaos—a place where time slows, and worries fade into the aroma of freshly ground coffee beans.
              </p>
              <motion.a 
                href="#about"
                className="mt-6 inline-block px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Read More
              </motion.a>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              variants={fadeInUp}
            >
              <motion.img 
                src={bg1} 
                alt="Our Story" 
                className="w-full h-auto rounded-2xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={featuresControls}
            variants={fadeInUp}
          >
            <h2 className="text-[#d16b02] text-2xl mb-4 font-bold">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black">Our Specialties</h3>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
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
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center group hover:bg-[#d16b02] transition-colors duration-300"
              >
                <motion.img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-110" 
                />
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 mb-6 group-hover:text-white transition-colors duration-300">{feature.description}</p>
                <a href="#" className="text-[#d16b02] group-hover:text-white border-b-2 border-[#d16b02] group-hover:border-white pb-1 font-medium transition-colors duration-300">
                  Read More
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Favorite Coffee Section */}
      <section 
        ref={coffeeRef} 
        className="py-28 bg-cover bg-center text-white relative" 
        id="menu"
        style={{ 
          backgroundImage: `url(${bg2})`, 
          backgroundAttachment: "fixed",
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={coffeeControls}
            variants={fadeInUp}
          >
            <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold">Favorite</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Coffee</h3>
            <motion.div 
              className="w-20 h-1 bg-[#d16b02] mx-auto mt-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            animate={coffeeControls}
            variants={staggerChildren}
          >
            {[
              {
                name: "Espresso",
                image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                price: "$2.75",
                description: "Rich, robust, and aromatic perfection in a single shot."
              },
              {
                name: "Cappuccino",
                image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                price: "$3.95",
                description: "The perfect balance of espresso, steamed milk and foam."
              },
              {
                name: "Caramel Macchiato",
                image: "https://images.unsplash.com/photo-1587075448451-6335696b841b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                price: "$4.50",
                description: "Sweet indulgence with layers of espresso and caramel."
              }
            ].map((coffee, index) => (
              <motion.div
                key={index}
                variants={fadeInScale}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={coffee.image} 
                    alt={coffee.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold">{coffee.name}</h4>
                    <span className="text-[#8dcb3f] font-bold">{coffee.price}</span>
                  </div>
                  <p className="text-gray-300">{coffee.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-colors"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coffee Menu Section */}
      <section className="py-20 bg-cover bg-fixed bg-center relative"
               style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-3.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 mb-6 font-bold text-[#d16b02] border-b pb-4">
                <div>Espresso</div>
                <div>Medium <span className="text-xs block">16 oz</span></div>
                <div>Large <span className="text-xs block">20 oz</span></div>
              </div>
              
              {[
                {
                  name: "Espresso",
                  description: "Espresso, where passion meets perfection.",
                  medium: "1.75",
                  large: "2.20",
                },
                {
                  name: "Mocchiato",
                  description: "The perfect harmony of espresso and sweetness",
                  medium: "1.94",
                  large: "2.25",
                },
                {
                  name: "Classic Cappucino",
                  description: "A timeless delight brewed just for you.",
                  medium: "2.90",
                  large: "3.90",
                },
                {
                  name: "Cappucino",
                  description: "Where rich espresso meets frothy perfection.",
                  medium: "3.15",
                  large: "4.15",
                },
                {
                  name: "Mocha latte",
                  description: "The perfect blend of chocolate and espresso.",
                  medium: "3.45",
                  large: "4.35",
                },
                {
                  name: "Caramel late",
                  description: "Where smooth espresso meets golden caramel bliss.",
                  medium: "3.45",
                  large: "4.35",
                },
                {
                  name: "Cafe americano",
                  description: "The essence of pure coffee bliss.",
                  medium: "2.25",
                  large: "3.50",
                },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="grid grid-cols-3 py-4 border-b border-amber-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ backgroundColor: "rgba(209, 107, 2, 0.05)" }}
                >
                  <div>
                    <h4 className="font-medium text-black">{item.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <div className="text-[#d16b02] font-medium">${item.medium}</div>
                  <div className="text-[#d16b02] font-medium">${item.large}</div>
                </motion.div>
              ))}
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="#menu" 
                  className="px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Menu
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Favorite Foods Section */}
      <section 
        ref={foodRef} 
        className="py-28 bg-cover bg-center text-white relative"
        style={{ 
          backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-4.jpg')",
          backgroundAttachment: "fixed" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={foodControls}
            variants={fadeInUp}
          >
            <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold">Favorite</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Foods</h3>
            <motion.div 
              className="w-20 h-1 bg-[#d16b02] mx-auto mt-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            animate={foodControls}
            variants={staggerChildren}
          >
            {[
              {
                name: "Avocado Toast",
                image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                price: "$8.95",
                description: "Fresh avocado, cherry tomatoes, and feta on artisan sourdough."
              },
              {
                name: "Berry Parfait",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                price: "$6.50",
                description: "Layers of yogurt, granola, and fresh seasonal berries."
              },
              {
                name: "Chicken Pesto",
                image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                price: "$10.95",
                description: "Grilled chicken with homemade pesto on a brioche bun."
              }
            ].map((food, index) => (
              <motion.div
                key={index}
                variants={fadeInScale}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={food.image} 
                    alt={food.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold">{food.name}</h4>
                    <span className="text-[#8dcb3f] font-bold">{food.price}</span>
                  </div>
                  <p className="text-gray-300">{food.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-colors"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Foods Menu Section */}
      <section className="py-20 bg-cover bg-fixed bg-center relative"
               style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-5.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-end">
            <motion.div 
              className="max-w-xl"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-3 mb-6 font-bold text-[#d16b02] border-b pb-4">
                  <div className="col-span-2">Snacks</div>
                  <div>Price</div>
                </div>
                
                {[
                  {
                    name: "Plain bread",
                    description: "Soft and golden with a tantalizing aroma",
                    price: "2.75",
                  },
                  {
                    name: "Milk bread",
                    description: "Infused with the richness of milk",
                    price: "2.75",
                  },
                  {
                    name: "Sandwich bread",
                    description: "Classic combinations like ham and cheese",
                    price: "2.75",
                  },
                  {
                    name: "Brown bread",
                    description: "Crafted from whole grain flour",
                    price: "2.75",
                  },
                  {
                    name: "Garlic bread",
                    description: "Infused with aromatic garlic and rich butter",
                    price: "2.75",
                  },
                  {
                    name: "Wheat bread",
                    description: "With hearty texture and nutty flavor",
                    price: "2.75",
                  },
                  {
                    name: "Banana bread",
                    description: "With its banana taste and delightful aroma",
                    price: "2.75",
                  },
                  {
                    name: "Burger bun",
                    description: "With fluffy texture and subtle sweetness",
                    price: "2.75",
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="grid grid-cols-3 py-4 border-b border-amber-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ backgroundColor: "rgba(209, 107, 2, 0.05)" }}
                  >
                    <div className="col-span-2">
                      <h4 className="font-medium text-black">{item.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <div className="text-[#d16b02] font-medium">${item.price}</div>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href="#menu" 
                    className="px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300 inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Menu
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 bg-[#ffffff]" id="gallery">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={galleryControls}
            variants={fadeInUp}
          >
            <h2 className="text-[#d16b02] text-2xl mb-4 font-bold">Our</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black">Gallery</h3>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
            initial="hidden"
            animate={galleryControls}
            variants={staggerChildren}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div 
                key={num} 
                className="relative group overflow-hidden rounded-lg"
                variants={fadeInScale}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src={`https://madebydesignesia.com/themes/baresto/02_images/menu/${num}.png`} 
                  alt={`Gallery item ${num}`}
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#d16b02] bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.span 
                    className="text-white font-medium"
                    whileHover={{ scale: 1.2 }}
                  >
                    View
                  </motion.span>
                </div>
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
              className="px-8 py-3 bg-[#d16b02] text-white rounded-full hover:bg-[#8dcb3f] transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Gallery
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Customer Review Section */}
      <section ref={reviewRef} className="bg-[#d16b02] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="w-full md:w-1/2 md:pr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={reviewControls}
              variants={{ 
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="h-60 md:h-full bg-cover bg-center rounded-xl overflow-hidden hidden md:block" 
                   style={{ backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-side-1.jpg')" }}>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 md:pl-8"
              initial="hidden"
              animate={reviewControls}
              variants={fadeInUp}
            >
              <div className="text-center mb-10">
                <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold">Customers</h2>
                <h3 className="text-4xl font-bold">Review</h3>
              </div>
              
              <Swiper
                autoplay={{ delay: 5000 }}
                loop
                className="review-slider"
              >
                {[
                  {
                    text: "As a busy professional, I rely on my morning coffee to kickstart my day. The rich, smooth taste and heavenly aroma never fail to perk me up and get me ready to tackle whatever the day throws at me. It's like a little slice of heaven in a cup!",
                    name: "Jenna Smith",
                    role: "Marketing Director"
                  },
                  {
                    text: "This café has become my second home. The ambiance is perfect for both work and relaxation, and the staff remembers my order every time. Their signature latte is worth every penny - I've never tasted anything quite like it elsewhere.",
                    name: "Michael Chen",
                    role: "Software Engineer"
                  },
                  {
                    text: "I've been to cafés all over the world, and this one stands out for its attention to detail. The beans are ethically sourced, the pastries are made fresh daily, and the atmosphere feels both elegant and welcoming. A true gem!",
                    name: "Sarah Johnson",
                    role: "Travel Blogger"
                  }
                ].map((review, index) => (
                  <SwiperSlide key={index}>
                    <motion.blockquote 
                      className="text-xl italic border-l-4 border-[#8dcb3f] pl-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {review.text}
                      <footer className="mt-6">
                        <div className="font-medium text-[#8dcb3f] text-lg">{review.name}</div>
                        <div className="text-white text-sm opacity-80">{review.role}</div>
                      </footer>
                    </motion.blockquote>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-14 bg-[#8dcb3f] bg-opacity-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-0 text-black">
              <i className="fas fa-phone text-[#d16b02] mr-3"></i>
              Call us now and get special offers!
            </h3>
            <motion.a 
              href="tel:+123456789" 
              className="px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] hover:bg-[#d16b02] hover:text-white transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section 
        ref={hoursRef} 
        className="py-28 bg-cover bg-center text-white relative"
        style={{ 
          backgroundImage: "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-6.jpg')",
          backgroundAttachment: "fixed" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={hoursControls}
            variants={fadeInUp}
          >
            <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold">We are</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-16">Open</h3>
            
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
                  className="text-center bg-black bg-opacity-30 backdrop-blur-sm p-8 rounded-lg"
                  variants={fadeInScale}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <span className="text-[#8dcb3f] font-bold text-xl block mb-3">{schedule.days}</span>
                  <div className="text-2xl">{schedule.hours}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#d16b02] text-white flex items-center justify-center shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 300 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
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




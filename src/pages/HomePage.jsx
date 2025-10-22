import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
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
  const featuresInView = useInView(featuresRef, {
    once: false,
    threshold: 0.2,
  });
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
    storyInView,
    featuresInView,
    coffeeInView,
    foodInView,
    galleryInView,
    reviewInView,
    hoursInView,
    storyControls,
    featuresControls,
    coffeeControls,
    foodControls,
    galleryControls,
    reviewControls,
    hoursControls,
  ]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-br from-[#FDF8F3] via-[#F8F1E9] to-[#F0E6DA]">
      {/* Hero Section */}
<section className="relative h-screen" id="home">
  <section className="relative w-full h-[100vh]">
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{ delay: 3000 }}
      loop
      effect="fade"
      speed={1000}
      className="h-full"
      onSlideChange={(swiper) => {
        // This will force animation resets when slides change
        const activeIndex = swiper.realIndex;
        // We'll use this to trigger animations via the key prop
      }}
    >
      {[
        {
          image:
            "https://madebydesignesia.com/themes/baresto/02_images/slider/slide-1.jpg",
          line1: "The Perfect",
          line2: "Blend",
          description:
            "Crafted with care and precision, this blend represents the pinnacle of coffee craftsmanship, where artistry meets expertise to create a symphony of flavor.",
        },
        {
          image:
            "https://madebydesignesia.com/themes/baresto/02_images/slider/slide-2.jpg",
          line1: "Aromatic",
          line2: "Taste",
          description:
            "Prepare to be enchanted by the seductive allure of our coffee's aromatic taste, a sensory symphony that begins the moment you lift the cup to your lips.",
        },
      ].map((slide, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Content wrapper with responsive padding */}
              <div className="absolute inset-0 flex flex-col justify-center items-center pt-10 md:pt-16 lg:pt-24 overflow-hidden">
                {/* Text container with responsive margins */}
                <div className="text-center px-4 sm:px-6 mx-auto max-w-3xl mt-4 md:mt-12 lg:mt-20 w-full">
                  {/* First line - responsive font size */}
                  <motion.h1
                    key={`title-${index}-${isActive}`}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : 100 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2, 
                      type: "spring", 
                      stiffness: 90, 
                      damping: 20 
                    }}
                    className={`
                      text-[#d16b02] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] 
                      leading-[1] sm:leading-[1.1] m-0 tracking-wide
                      ${index === 0 ? 'font-sacramento' : 'font-sacramento'}
                    `}
                  >
                    {slide.line1}
                  </motion.h1>

                  {/* Second line - responsive with no absolute positioning */}
                  <motion.p
                    key={`subtitle-${index}-${isActive}`}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : 100 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.5, 
                      type: "spring", 
                      stiffness: 90, 
                      damping: 20 
                    }}
                    className={`
                      text-[#8dcb3f] text-[36px] sm:text-[45px] md:text-[55px] lg:text-[70px]
                      m-0 mb-4 leading-[1] font-sans font-semibold
                    `}
                  >
                    {slide.line2}
                  </motion.p>

                  {/* Description with responsive width and font size */}
                  <motion.p
                    key={`desc-${index}-${isActive}`}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : 100 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8, 
                      type: "spring", 
                      stiffness: 90, 
                      damping: 20 
                    }}
                    className="text-white mt-4 md:mt-6 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed"
                  >
                    {slide.description}
                  </motion.p>

                  {/* CTA Button - responsive sizing */}
                  <motion.a
                    key={`button-${index}-${isActive}`}
                    href="#menu"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : 100 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.1, 
                      type: "spring", 
                      stiffness: 90, 
                      damping: 20 
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "#d16b02" }}
                    className="mt-6 md:mt-8 inline-block px-6 md:px-8 py-2 md:py-3 bg-[#d16b02] text-white text-sm md:text-base rounded-full hover:bg-[#8dcb3f]  "
                  >
                    View Our Menu
                  </motion.a>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
      ))}

 </Swiper>
  </section>

  {/* Make sure the font is imported */}
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

    .font-sacramento {
      font-family: "Sacramento", cursive;
      font-weight: 400;
      font-style: normal;
    }

    /* Custom Swiper arrow styles */
    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 18px !important;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
    
    /* Media queries for arrow sizes on different screens */
    @media (max-width: 768px) {
      .swiper-button-next:after,
      .swiper-button-prev:after {
        font-size: 14px !important;
      }
    }
    
    @media (max-width: 480px) {
      .swiper-button-next:after,
      .swiper-button-prev:after {
        font-size: 12px !important;
      }
    }

    /* Hide any overflow to prevent scrollbars during animations */
    .swiper-slide {
      overflow: hidden;
    }
  `}</style>
</section>

{/*our story*/}
<section 
  ref={storyRef} 
  className="py-24 md:py-32 lg:py-40 relative overflow-hidden" 
  id="about"
>
  {/* Premium background with grain texture and gradient */}
  <div className="absolute inset-0  opacity-90"></div>
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40 mix-blend-soft-light"></div>



  {/* Golden accent line */}
  <motion.div 
    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d16b02]/50 to-transparent"
    style={{ top: "15%" }}
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  />

  <div className="container mx-auto px-6 sm:px-8 relative z-10">
    <div className="max-w-7xl mx-auto">
      {/* Section header with premium typography */}
      <motion.div 
        className="text-center mb-16 md:mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="inline-block mb-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#d16b02] text-sm tracking-[0.3em] uppercase font-light border-b border-[#d16b02]/30 pb-2 px-4">
            Since 2010
          </span>
        </motion.div>
        
        <motion.h2 
          className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#3A2A18] mt-4 mb-6 mx-auto max-w-4xl leading-tight font-light"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The <span className="text-[#d16b02] italic font-normal">Artistry</span> Behind Every Cup
        </motion.h2>
        
        <motion.div 
          className="h-[3px] w-20 bg-gradient-to-r from-[#d16b02]/20 via-[#d16b02] to-[#d16b02]/20 mx-auto my-6"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-light"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A journey of passion, dedication, and the pursuit of coffee perfection
        </motion.p>
      </motion.div>

      {/* Content container with golden accent */}
      <div className="relative">
        {/* Diagonal golden accent line */}
        <motion.div 
          className="absolute w-[1px] h-[85%] bg-gradient-to-b from-transparent via-[#d16b02]/50 to-transparent -left-2 top-[5%] hidden lg:block"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Image column with premium presentation */}
          <motion.div
            className="relative order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Main image with floating frame effect */}
            <div className="relative mx-auto max-w-md lg:max-w-full aspect-[4/5] overflow-visible">
              {/* Decorative pattern behind image */}
              <motion.div 
                className="absolute top-4 left-4 right-4 bottom-4 border border-[#d16b02]/20 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Shadow layer */}
              <motion.div 
                className="absolute top-6 left-6 -bottom-6 -right-6 bg-[#d16b02]/5 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              
              {/* Main image container */}
              <motion.div 
                className="relative z-10 rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(209,107,2,0.3)]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 30px 70px -15px rgba(209, 107, 2, 0.35)",
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div className="aspect-[4/5] w-full overflow-hidden relative">
                  {/* Image */}
                  <motion.img
                    src={bg1}
                    alt="Our coffee journey"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, filter: "saturate(0.8) brightness(0.9)" }}
                    whileInView={{ scale: 1, filter: "saturate(1.1) brightness(1.05)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.05, 
                      filter: "saturate(1.2) brightness(1.1)",
                      transition: { duration: 1.2 } 
                    }}
                  />
                  
                  {/* Elegant gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </motion.div>
                
                {/* Premium badge overlay */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <p className="text-[#d16b02] text-xs font-medium">Premium Quality</p>
                </motion.div>
                
                {/* Caption */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <p className="text-xl font-serif mb-1">Our Heritage</p>
                  <p className="text-sm font-light opacity-90">Handcrafted with passion since 2010</p>
                </motion.div>
              </motion.div>
              
              {/* Floating coffee icon */}
              <motion.div 
                className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-white shadow-[0_15px_35px_rgba(209,107,2,0.25)] flex items-center justify-center z-20"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: 1.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(209,107,2,0.3)",
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-12 h-12 text-[#d16b02]">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
                  </svg>
                </div>
              </motion.div>
            </div>

          </motion.div>
          
          {/* Text column with premium content presentation */}
          <motion.div
            className="order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Content container */}
            <div className="relative">
              {/* Stylized quote mark */}
              <motion.div 
                className="absolute -top-20 -left-4 text-[#d16b02] opacity-10 text-9xl font-serif transform -rotate-6"
                initial={{ opacity: 0, scale: 0.5, x: -30 }}
                whileInView={{ opacity: 0.1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                ❝
              </motion.div>
              
              {/* Main story content */}
              <div className="relative z-10">
                {/* Story title with animated line */}
                <motion.div
                  className="mb-8 relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#3A2A18] font-light leading-tight mb-3">
                    A Sensory <span className="text-[#d16b02] italic">Journey</span> Through Every Cup
                  </h3>
                  <motion.div 
                    className="h-[2px] w-20 bg-gradient-to-r from-[#d16b02] to-[#d16b02]/10"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 80, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </motion.div>
                
                {/* Story paragraphs */}
                <div className="space-y-6 text-gray-700">
                  <motion.p
                    className="text-base sm:text-lg leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    In the heart of the bustling metropolis, where the rhythm of
                    life pulses relentlessly, there exists a sanctuary hidden among
                    the chaos—a place where time slows, and worries fade into the
                    aroma of freshly ground coffee beans.
                  </motion.p>
                  
                  <motion.p
                    className="text-base sm:text-lg leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Our passion for exceptional coffee drives us to source the finest beans
                    from sustainable farms around the world, carefully roasting each batch
                    to bring out its unique character and flavor profile.
                  </motion.p>
                </div>
                
                {/* Features/highlights list */}
                <motion.div
                  className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {[
                    { icon: "M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z", title: "Ethically Sourced" },
                    { icon: "M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z", title: "Master Roasters" },
                    { icon: "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3Z", title: "Flavor Artistry" },
                    { icon: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z", title: "Quality Selection" },
                  ].map((feature, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#d16b02]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-[#d16b02]" viewBox="0 0 24 24" fill="currentColor">
                          <path d={feature.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[#3A2A18] font-medium mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600 font-light">We ensure every step of our process maintains the highest standards.</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* CTA buttons */}
                <motion.div
                  className="mt-10 flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.a 
                    href="#menu" 
                    className="px-8 py-3 bg-[#d16b02] text-white rounded-full shadow-lg shadow-[#d16b02]/20 hover:shadow-[#d16b02]/30 hover:bg-[#c05e00] transition-all duration-300"
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 25px -5px rgba(209, 107, 2, 0.4)",
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Our Menu
                  </motion.a>
                  
                  <motion.a 
                    href="#about" 
                    className="px-8 py-3 border-2 border-[#d16b02] text-[#d16b02] rounded-full hover:bg-[#d16b02]/5 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: "rgba(209, 107, 2, 0.05)",
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
<section className="features-section py-20  text-gray-800 relative overflow-hidden">

  <div className="absolute inset-0 overflow-hidden opacity-10">
    <div className="floating-dots"></div>
  </div>
  
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d16b02] opacity-5 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#d16b02] opacity-5 rounded-full blur-3xl"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="mb-16 max-w-3xl mx-auto animate-fade-in">
      <div className="flex items-center justify-center space-x-4 mb-6">
        <span className="h-[1px] w-10 bg-[#d16b02]"></span>
        <h2 className="text-[#d16b02] uppercase tracking-widest text-sm font-bold">Exceptional Experience</h2>
        <span className="h-[1px] w-10 bg-[#d16b02]"></span>
      </div>
      
      <h3 className="text-4xl md:text-5xl font-bold text-center leading-tight">
        Why our customers <span className="text-[#d16b02] relative">
          keep coming back
          <span className="absolute bottom-1 left-0 w-full h-1 bg-[#d16b02] opacity-20"></span>
        </span>
      </h3>
    </div>

    <div className="features-grid animate-fade-in-up">
      <div className="overflow-x-auto pb-8 md:pb-0 md:overflow-visible">
        <div className="flex md:grid md:grid-cols-12 md:gap-8 min-w-max md:min-w-0">
          <div className="feature-card md:col-span-6 w-[300px] md:w-auto mx-4 md:mx-0 group">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(209,107,2,0.15)]">
              <img 
                src="https://i.pinimg.com/736x/9e/a7/ee/9ea7eee807b77d4d062ec54be39c6a92.jpg" 
                alt="Premium Coffee Experience" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <span className="inline-block bg-[#d16b02] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">Signature</span>
                <h4 className="text-3xl font-bold mt-4 mb-2 text-white">Craft Coffee Experience</h4>
                <p className="text-neutral-200 mb-6 line-clamp-3">Single-origin beans roasted in-house daily, prepared by our award-winning baristas using precision techniques that bring out unique flavor profiles.</p>
                
                <div className="flex space-x-4 mt-4">
                  <button className="btn-explore">
                    <span>Explore Menu</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 w-[900px] md:w-auto space-y-8 mx-4 md:mx-0">
            <div className="grid md:grid-cols-2 gap-8 h-full">
              {[
                {
                  icon: "🍽️",
                  title: "Chef-Crafted Cuisine",
                  description: "Seasonal ingredients transformed into memorable dishes that perfectly complement our beverages.",
                  image: "https://i.pinimg.com/736x/f0/31/1a/f0311a54b9e319e0bf18bdbedb57a0bb.jpg"
                },
                {
                  icon: "🎉",
                  title: "Unforgettable Events",
                  description: "Customize our space for celebrations, meetings, or private gatherings with our expert planning team.",
                  image: "https://i.pinimg.com/736x/4b/62/29/4b6229e49cba45cbbfc09be7f0159b91.jpg"
                },
                {
                  icon: "🌿",
                  title: "Sustainable Practices",
                  description: "Eco-conscious operations from bean sourcing to compostable packaging and energy-efficient facilities.",
                  image: "https://i.pinimg.com/736x/9d/f4/a5/9df4a5d5c3c4d7c16afaff80cfe4af6e.jpg"
                },
                {
                  icon: "💫",
                  title: "Digital Loyalty Program",
                  description: "Earn rewards with every visit through our app, with exclusive tastings and early access to seasonal offerings.",
                  image: "https://i.pinimg.com/736x/51/3b/3a/513b3a2cb93a0e1d4273a57b1a39fc32.jpg"
                }
              ].map((feature, index) => (
                <div key={index} className={`feature-small group animate-fade-in-up-${index + 1}`}>
                  <div className="relative h-full rounded-xl overflow-hidden bg-white hover:bg-gradient-to-br from-white to-[#FDF8F3] shadow-md hover:shadow-[0_15px_35px_rgba(209,107,2,0.15)] transition-all duration-300 border border-transparent hover:border-[#d16b02]/10">
                    <div className="absolute top-0 right-0 p-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-[#FDF8F3] flex items-center justify-center shadow-inner group-hover:bg-[#f8e3c8] transition-all duration-300">
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 h-full flex flex-col">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-[#d16b02] transition-colors duration-300 relative inline-block">
                        {feature.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d16b02] transition-all duration-300 group-hover:w-full opacity-60"></span>
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                      <div className="mt-auto">
                        <button className="text-[#d16b02] group-hover:text-[#b25601] text-sm font-medium inline-flex items-center">
                          <span>Learn more</span>
                          <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-6 md:hidden">
      {[0, 1, 2, 3, 4].map(i => (
        <button key={i} className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${i === 0 ? 'bg-[#d16b02] w-6' : 'bg-[#d16b02]/30'}`} aria-label={`Go to slide ${i+1}`}></button>
      ))}
    </div>
    
    <div className="stats-section mt-24 border-t border-[#d16b02]/10 pt-16 animate-fade-in-up-delayed">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { number: "14K+", label: "Happy Customers" },
          { number: "120+", label: "Coffee Varieties" },
          { number: "35+", label: "Event Packages" },
          { number: "4", label: "Award-Winning Chefs" }
        ].map((stat, index) => (
          <div key={index} className={`text-center stat-counter animate-count-up-${index + 1}`}>
            <div className="counter text-4xl md:text-5xl font-bold text-[#d16b02] mb-2">{stat.number}</div>
            <p className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  <style jsx>{`
    .shadow-glow {
      box-shadow: 0 0 30px rgba(209, 107, 2, 0.25);
    }
    
    .feature-card, .feature-small {
      transform: translateY(0);
      transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .feature-card:hover, .feature-small:hover {
      transform: translateY(-12px);
    }
    
    .btn-explore {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(to right, #d16b02, #e78a34);
      color: white;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      transition: all 0.3s;
      box-shadow: 0 4px 15px -3px rgba(209, 107, 2, 0.5);
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .btn-explore:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: linear-gradient(to right, #e78a34, #f09c4d);
      transition: all 0.4s;
      z-index: -1;
    }
    
    .btn-explore:hover:before {
      width: 100%;
    }
    
    .btn-explore:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px -5px rgba(209, 107, 2, 0.4);
    }
    
    .floating-dots {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(rgba(209, 107, 2, 0.2) 1px, transparent 1px);
      background-size: 30px 30px;
      animation: floating 25s infinite linear;
    }
    
    @keyframes floating {
      0% {
        transform: translate(0, 0) rotate(0deg);
      }
      100% {
        transform: translate(50px, 50px) rotate(10deg);
      }
    }
    
    .counter {
      display: inline-block;
      position: relative;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
    
    .counter::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 50%;
      width: 40px;
      height: 3px;
      background: linear-gradient(to right, rgba(209, 107, 2, 0.2), rgba(209, 107, 2, 0.8), rgba(209, 107, 2, 0.2));
      transform: translateX(-50%);
      border-radius: 3px;
    }
    
    /* Animations */
    .animate-fade-in {
      animation: fadeIn 1s ease forwards;
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 1s ease forwards;
    }
    
    .animate-fade-in-up-1 {
      animation: fadeInUp 1s ease forwards;
      animation-delay: 0.1s;
    }
    
    .animate-fade-in-up-2 {
      animation: fadeInUp 1s ease forwards;
      animation-delay: 0.2s;
    }
    
    .animate-fade-in-up-3 {
      animation: fadeInUp 1s ease forwards;
      animation-delay: 0.3s;
    }
    
    .animate-fade-in-up-4 {
      animation: fadeInUp 1s ease forwards;
      animation-delay: 0.4s;
    }
    
    .animate-fade-in-up-delayed {
      animation: fadeInUp 1s ease forwards;
      animation-delay: 0.5s;
    }
    
    .animate-count-up-1 {
      animation: countUp 2s ease forwards;
      animation-delay: 0.6s;
    }
    
    .animate-count-up-2 {
      animation: countUp 2s ease forwards;
      animation-delay: 0.7s;
    }
    
    .animate-count-up-3 {
      animation: countUp 2s ease forwards;
      animation-delay: 0.8s;
    }
    
    .animate-count-up-4 {
      animation: countUp 2s ease forwards;
      animation-delay: 0.9s;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes countUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
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
          backgroundPosition: "center",
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
                image:
                  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                price: "$2.75",
                description:
                  "Rich, robust, and aromatic perfection in a single shot.",
              },
              {
                name: "Cappuccino",
                image:
                  "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                price: "$3.95",
                description:
                  "The perfect balance of espresso, steamed milk and foam.",
              },
              {
                name: "Caramel Macchiato",
                image:
                  "https://images.unsplash.com/photo-1587075448451-6335696b841b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                price: "$4.50",
                description:
                  "Sweet indulgence with layers of espresso and caramel.",
              },
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
                    <span className="text-[#8dcb3f] font-bold">
                      {coffee.price}
                    </span>
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
      <section
        className="py-20 bg-cover bg-fixed bg-center relative"
        style={{
          backgroundImage:
            "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-3.jpg')",
        }}
      >
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
                <div>
                  Medium <span className="text-xs block">16 oz</span>
                </div>
                <div>
                  Large <span className="text-xs block">20 oz</span>
                </div>
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
                  description:
                    "Where smooth espresso meets golden caramel bliss.",
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
                    <p className="text-xs text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-[#d16b02] font-medium">
                    ${item.medium}
                  </div>
                  <div className="text-[#d16b02] font-medium">
                    ${item.large}
                  </div>
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
          backgroundImage:
            "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-4.jpg')",
          backgroundAttachment: "fixed",
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
                image:
                  "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                price: "$8.95",
                description:
                  "Fresh avocado, cherry tomatoes, and feta on artisan sourdough.",
              },
              {
                name: "Berry Parfait",
                image:
                  "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                price: "$6.50",
                description:
                  "Layers of yogurt, granola, and fresh seasonal berries.",
              },
              {
                name: "Chicken Pesto",
                image:
                  "https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                price: "$10.95",
                description:
                  "Grilled chicken with homemade pesto on a brioche bun.",
              },
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
                    <span className="text-[#8dcb3f] font-bold">
                      {food.price}
                    </span>
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
      <section
        className="py-20 bg-cover bg-fixed bg-center relative"
        style={{
          backgroundImage:
            "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-5.jpg')",
        }}
      >
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
                      <p className="text-xs text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-[#d16b02] font-medium">
                      ${item.price}
                    </div>
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
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              Gallery
            </h3>
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
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <div
                className="h-60 md:h-full bg-cover bg-center rounded-xl overflow-hidden hidden md:block"
                style={{
                  backgroundImage:
                    "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-side-1.jpg')",
                }}
              ></div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 md:pl-8"
              initial="hidden"
              animate={reviewControls}
              variants={fadeInUp}
            >
              <div className="text-center mb-10">
                <h2 className="text-[#8dcb3f] text-2xl mb-4 font-bold">
                  Customers
                </h2>
                <h3 className="text-4xl font-bold">Review</h3>
              </div>

              <Swiper autoplay={{ delay: 5000 }} loop className="review-slider">
                {[
                  {
                    text: "As a busy professional, I rely on my morning coffee to kickstart my day. The rich, smooth taste and heavenly aroma never fail to perk me up and get me ready to tackle whatever the day throws at me. It's like a little slice of heaven in a cup!",
                    name: "Jenna Smith",
                    role: "Marketing Director",
                  },
                  {
                    text: "This café has become my second home. The ambiance is perfect for both work and relaxation, and the staff remembers my order every time. Their signature latte is worth every penny - I've never tasted anything quite like it elsewhere.",
                    name: "Michael Chen",
                    role: "Software Engineer",
                  },
                  {
                    text: "I've been to cafés all over the world, and this one stands out for its attention to detail. The beans are ethically sourced, the pastries are made fresh daily, and the atmosphere feels both elegant and welcoming. A true gem!",
                    name: "Sarah Johnson",
                    role: "Travel Blogger",
                  },
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
                        <div className="font-medium text-[#8dcb3f] text-lg">
                          {review.name}
                        </div>
                        <div className="text-white text-sm opacity-80">
                          {review.role}
                        </div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
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
          backgroundImage:
            "url('https://madebydesignesia.com/themes/baresto/02_images/background/bg-6.jpg')",
          backgroundAttachment: "fixed",
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
                  hours: "10:30AM - 9:30PM",
                },
                {
                  days: "Friday",
                  hours: "10:00AM - 10:30PM",
                },
                {
                  days: "Sat - Sun",
                  hours: "09:30AM - 11:00PM",
                },
              ].map((schedule, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-black bg-opacity-30 backdrop-blur-sm p-8 rounded-lg"
                  variants={fadeInScale}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <span className="text-[#8dcb3f] font-bold text-xl block mb-3">
                    {schedule.days}
                  </span>
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
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default HomePage;

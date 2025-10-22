// import React from 'react';
// import icon from "../assets/bg1.jpg"; // Placeholder image (used for all gallery items)
// import { motion } from 'framer-motion';
// // Example array using the same placeholder image.
// // Replace `icon` with unique images as needed.
// const galleryItems = [
//     { id: 1, href: '/images/gallery/1.jpg', imgSrc: icon },
//     { id: 2, href: '/images/gallery/2.jpg', imgSrc: icon },
//     { id: 3, href: '/images/gallery/3.jpg', imgSrc: icon },
//     { id: 4, href: '/images/gallery/4.jpg', imgSrc: icon },
//     { id: 5, href: '/images/gallery/5.jpg', imgSrc: icon },
//     { id: 6, href: '/images/gallery/6.jpg', imgSrc: icon },
// ];

// const Gallery = () => {
//     return (
//         <div id="content" className="bg-cover bg-no-repeat">
//             {/* Hero Section */}
//             <section
//                 className="relative text-white overflow-hidden"
//                 style={{
//                     background: '#222',
//                     //   backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600)',
//                     backgroundImage: 'url(' + icon + ')',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundAttachment: 'fixed',
//                     padding: '170px 0 80px 0'
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black/50 z-0"></div>

//                 <div className="container mx-auto px-4 relative z-10">
//                     <div className="text-center">
//                         <motion.h2
//                             initial={{ opacity: 0, y: -50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
//                             style={{
//                                 fontFamily: 'serif',
//                                 letterSpacing: '0.02em',
//                                 opacity: 1,
//                                 color: '#d16b02'
//                             }}
//                         >
//                             Get In
//                         </motion.h2>
//                         <motion.h2
//                             initial={{ opacity: 0, y: -50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//                             className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10"
//                             style={{
//                                 fontFamily: 'serif',
//                                 letterSpacing: '0.01em',
//                                 opacity: 1
//                             }}
//                         >
//                             Touch
//                         </motion.h2>
//                         <motion.nav
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
//                             aria-label="breadcrumb"
//                         >
//                             <ol className="flex justify-center items-center space-x-2 text-sm">
//                                 <li>
//                                     <a href="#" className="text-white hover:text-gray-300 transition-colors">
//                                         Home
//                                     </a>
//                                 </li>
//                                 <li className="text-gray-400">/</li>
//                                 <li className="text-gray-400" aria-current="page">
//                                     Contact
//                                 </li>
//                             </ol>
//                         </motion.nav>
//                     </div>
//                 </div>
//             </section>

//             {/* Gallery Grid Section */}
//             <section aria-label="section" className="bg-cover py-12">
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {galleryItems.map((item) => (
//                             <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-md">
//                                 <a href={item.href} className="block">
//                                     <img
//                                         src={item.imgSrc}
//                                         alt={`Gallery ${item.id}`}
//                                         className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
//                                     />
//                                     <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
//                                         <span className="text-white text-lg font-medium">View</span>
//                                     </div>
//                                 </a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Gallery;


import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const icon = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800";

const galleryItems = [
    { id: 1, imgSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800" },
    { id: 2, imgSrc: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800" },
    { id: 3, imgSrc: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800" },
    { id: 4, imgSrc: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800" },
    { id: 5, imgSrc: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800" },
    { id: 6, imgSrc: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { scrollY } = useScroll();

    // Transform scroll position to opacity (fades out as you scroll down)
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(galleryItems[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryItems[newIndex]);
    };

    const goToNext = () => {
        const newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryItems[newIndex]);
    };

    return (
        <div className="min-h-screen bg-[#18191b]">
            {/* Hero Section */}
            {/* <section
                className="relative text-white overflow-hidden min-h-[500px] flex items-center"
                style={{
                    backgroundImage: `url(${icon})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '170px 0 80px 0'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                <div className="container mx-auto px-4 relative z-10 w-full">
                    <motion.div
                        className="text-center"
                        style={{ opacity: heroOpacity, y: heroY }}
                    >
                        <h2
                            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
                            // style={{ fontFamily: 'serif', color: '#d16b02' }}
                            style={{
                                fontFamily: "'Sacramento', cursive",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "clamp(36px, 8vw, 72px)",
                                color: "#d16b02",
                                margin: 0,
                                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                            }}
                        >
                            Discover
                        </h2>
                        <h2
                            // className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10"
                            // style={{ fontFamily: 'serif' }}
                            className="uppercase font-bold inline-block border-y border-white/50 border-opacity-50 m-0"
                            style={{
                                fontSize: '40px',
                                lineHeight: '40px',
                                letterSpacing: '10px',
                                fontFamily: 'serif',
                                color: '#fff' // Optional: use conditionally if in .text-light
                            }}
                        >
                            Gallery
                        </h2>
                        <nav>
                            <ol className="flex justify-center items-center space-x-3 text-sm">
                                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                                <li className="text-gray-400">/</li>
                                <li className="text-gray-400">Gallery</li>
                            </ol>
                        </nav>
                    </motion.div>
                </div>
            </section> */}

            <section
                className="relative text-white overflow-hidden min-h-[500px] flex items-center"
                style={{
                    backgroundImage: `url(${icon})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // added fixed background
                    padding: '170px 0 80px 0'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>

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
                                color: "#d16b02",
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
                                color: '#fff'
                            }}
                        >
                            Gallery
                        </h2>
                        <nav>
                            <ol className="flex justify-center items-center space-x-3 text-sm">
                                <li>
                                    <a href="#" className="hover:text-gray-300">
                                        Home
                                    </a>
                                </li>
                                <li className="text-gray-400">/</li>
                                <li className="text-gray-400">Gallery</li>
                            </ol>
                        </nav>
                    </motion.div>
                </div>
            </section>


            {/* Gallery Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={item.imgSrc}
                                    alt={`Gallery ${item.id}`}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                    <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                        >
                            <X size={40} />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                            className="absolute left-4 text-white hover:text-gray-300 z-50"
                        >
                            <ChevronLeft size={50} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            className="absolute right-4 text-white hover:text-gray-300 z-50"
                        >
                            <ChevronRight size={50} />
                        </button>

                        {/* Image with Zoom Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-5xl max-h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.imgSrc}
                                alt={`Gallery ${selectedImage.id}`}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                            />

                            {/* Counter */}
                            <div className="text-white text-center mt-4 text-lg">
                                {currentIndex + 1} of {galleryItems.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
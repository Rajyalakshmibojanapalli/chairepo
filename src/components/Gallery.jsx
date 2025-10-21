import React from 'react';
import icon from "../assets/bg1.jpg"; // Placeholder image (used for all gallery items)
import { motion } from 'framer-motion';
// Example array using the same placeholder image.
// Replace `icon` with unique images as needed.
const galleryItems = [
    { id: 1, href: '/images/gallery/1.jpg', imgSrc: icon },
    { id: 2, href: '/images/gallery/2.jpg', imgSrc: icon },
    { id: 3, href: '/images/gallery/3.jpg', imgSrc: icon },
    { id: 4, href: '/images/gallery/4.jpg', imgSrc: icon },
    { id: 5, href: '/images/gallery/5.jpg', imgSrc: icon },
    { id: 6, href: '/images/gallery/6.jpg', imgSrc: icon },
];

const Gallery = () => {
    return (
        <div id="content" className="bg-cover bg-no-repeat">
            {/* Hero Section */}
            <section
                className="relative text-white overflow-hidden"
                style={{
                    background: '#222',
                    //   backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600)',
                    backgroundImage: 'url(' + icon + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    padding: '170px 0 80px 0'
                }}
            >
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
                            style={{
                                fontFamily: 'serif',
                                letterSpacing: '0.02em',
                                opacity: 1,
                                color: '#d16b02'
                            }}
                        >
                            Get In
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10"
                            style={{
                                fontFamily: 'serif',
                                letterSpacing: '0.01em',
                                opacity: 1
                            }}
                        >
                            Touch
                        </motion.h2>
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            aria-label="breadcrumb"
                        >
                            <ol className="flex justify-center items-center space-x-2 text-sm">
                                <li>
                                    <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                        Home
                                    </a>
                                </li>
                                <li className="text-gray-400">/</li>
                                <li className="text-gray-400" aria-current="page">
                                    Contact
                                </li>
                            </ol>
                        </motion.nav>
                    </div>
                </div>
            </section>

            {/* Gallery Grid Section */}
            <section aria-label="section" className="bg-cover py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryItems.map((item) => (
                            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-md">
                                <a href={item.href} className="block">
                                    <img
                                        src={item.imgSrc}
                                        alt={`Gallery ${item.id}`}
                                        className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-medium">View</span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;

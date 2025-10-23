// StartupKit.jsx
import { useState, useEffect, useRef } from 'react';

import {motion, useInView,} from "framer-motion";
const StartupKit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKit, setSelectedKit] = useState(null);
  const modalRef = useRef(null);

  // Sample startup kit data
  const startupKits = [
    {
      id: 'basic',
      name: 'Basic Startup Kit',
      price: '₹25,000',
      description: 'Essential items to get your small café up and running',
      image: '☕',
      items: [
        { name: 'Tea Varieties Pack', quantity: '5 types x 100g each' },
        { name: 'Induction Cooktop', quantity: '1 Unit' },
        { name: 'Steel Cups Set', quantity: '12 Units' },
        { name: 'Glass Cups Set', quantity: '6 Units' },
        { name: 'Basic Branding Kit', quantity: '1 Set' },
        { name: 'Starter Syrups', quantity: '3 Bottles' }
      ]
    },
    {
      id: 'standard',
      name: 'Standard Startup Kit',
      price: '₹48,000',
      description: 'Complete setup for a medium-sized café operation',
      image: '🍵',
      items: [
        { name: 'Premium Tea Collection', quantity: '10 types x 200g each' },
        { name: 'Commercial Mixer', quantity: '1 Unit' },
        { name: 'Refrigerator', quantity: '190 Lt' },
        { name: 'Full Utensil Set', quantity: '1 Complete Set' },
        { name: 'Standard Branding Package', quantity: '1 Set' },
        { name: 'Digital Menu Board', quantity: '1 Unit' },
        { name: 'Syrup Collection', quantity: '5 Flavors x 1L' }
      ]
    },
    {
      id: 'premium',
      name: 'Premium Café Setup',
      price: '₹85,000',
      description: 'Luxury café setup with high-end equipment and supplies',
      image: '🫖',
      items: [
        { name: 'Exclusive Tea Collection', quantity: '15 types x 250g each' },
        { name: 'Deep Freezer', quantity: '320 Lt' },
        { name: 'Commercial Griller', quantity: '1 Unit' },
        { name: 'LED TV Menu Display', quantity: '32 inch' },
        { name: 'Premium Branding Package', quantity: 'Complete Set' },
        { name: 'Premium Glassware Set', quantity: '24 Units' },
        { name: 'Complete Syrup Collection', quantity: '8 Flavors x 1L' },
        { name: 'Designer Furniture Set', quantity: 'As per requirements' }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openModal = (kit) => {
    setSelectedKit(kit);
    setIsOpen(true);
  };
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

  return (
    <section id="startup-kits" className="mb-12">
         <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

        .font-sacramento {
          font-family: "Sacramento", cursive;
        }
      `}</style>

      {/* Hero Banner Section */}
      <section
        className="relative text-white overflow-hidden min-h-[600px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.pinimg.com/1200x/65/b2/c2/65b2c22821b52ae2d22237e9157f6b73.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "170px 0 80px 0",
        }}
      >
        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <FadeInWhenVisible>
            <h2 className="text-6xl  text-[#d16b02] md:text-7xl lg:text-8xl font-sacramento font-bold mb-4 text-[clamp(40px,6vw,80px)]">
              We Provide
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <h2
              className="uppercase font-bold inline-block border-y border-white/50 m-0"
              style={{
                fontSize: "40px",
                lineHeight: "40px",
                letterSpacing: "10px",
                fontFamily: "serif",
                color: "#fff",
              }}
            >
              Kit
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <nav
              aria-label="breadcrumb"
              className="mt-6 flex justify-center items-center space-x-2 text-sm"
            >
              <ol className="flex space-x-2">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-400" aria-current="page">
                  Startup kit
                </li>
              </ol>
            </nav>
          </FadeInWhenVisible>
        </div>
      </section>
      <motion.div
        className="bg-white/90 rounded-3xl p-8 mb-8 shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_150%_150%,rgba(209,107,2,0.1)_0%,transparent_70%)]"></div>
        
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {startupKits.map((kit, index) => (
          <motion.div
            key={kit.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg relative"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-48 bg-gradient-to-br from-[#d16b02] to-[#8dcb3f] flex items-center justify-center">
              <div className="text-7xl">{kit.image}</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#222] mb-1">{kit.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{kit.description}</p>
              <div className="text-2xl font-bold text-[#d16b02] mb-6">{kit.price}</div>
              <motion.button
                className="w-full py-3 px-4 bg-gradient-to-r from-[#d16b02] to-[#8dcb3f] text-white rounded-xl font-medium"
                onClick={() => openModal(kit)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && selectedKit && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <motion.div
            ref={modalRef}
            className="bg-white rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[#222]">{selectedKit.name}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-3xl mr-4">{selectedKit.image}</div>
                <div>
                  <p className="text-gray-600 mb-2">{selectedKit.description}</p>
                  <p className="text-2xl font-bold text-[#d16b02]">{selectedKit.price}</p>
                </div>
              </div>
              
              <h4 className="font-semibold text-lg mb-4">Kit Includes:</h4>
              <ul className="space-y-3 mb-6">
                {selectedKit.items.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-[#d16b02] to-[#8dcb3f] rounded-full mr-3"></span>
                    <div className="flex-1">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-500 ml-2 text-sm">({item.quantity})</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                <motion.button
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#d16b02] to-[#8dcb3f] text-white rounded-xl font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order This Kit
                </motion.button>
                <motion.button
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-xl font-medium"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default StartupKit;
// import React, { useState, useRef } from 'react';
// import { motion, useInView, AnimatePresence } from "framer-motion";

// const FranchiseInfo = () => {
//   const [activeTab, setActiveTab] = useState('all');

//   const tabs = [
//     { id: 'all', label: 'All Categories' },
//     { id: 'electronic', label: 'Electronics' },
//     { id: 'materials', label: 'Cafe Materials' },
//     { id: 'boards', label: 'Boards & Setup' },
//     { id: 'kitchen', label: 'Kitchen Equipment' },
//     { id: 'glasses', label: 'Glasses Kit' },
//     { id: 'interior', label: 'Interior Design' },
//     { id: 'syrups', label: 'Syrups' },
//   ];

//   const franchiseBenefits = [
//     'REVENUE MAKING',
//     'RAW MATERIALS',
//     'LOW INVESTMENT HIGH RETURNS',
//     'SOCIAL MARKETING SUPPORT',
//     'MINIMUM OPERATIONAL SPACE 90-150 sq. Ft',
//     'NO ROYALTY',
//     'FREE TRAINING 3 DAYS',
//     'ONE TIME SETTLEMENT LIFE TIME SUPPORT',
//     '100% SUCCESS'
//   ];

//   const materials = {
//     electronic: [
//       { item: 'Refrigerator', qty: '1', price: '320' },
//       { item: 'Induction stove', qty: '1', price: '190' },
//       { item: 'Mixer blender', qty: '1', price: '4.5' },
//       { item: 'Sandwich Griller', qty: '1', price: '6.2' },
//       { item: 'Deep fryer', qty: '1', price: '5.0' },
//       { item: '32 inch LED TV', qty: '1', price: '2.5' },
//       { item: 'Coffee Machine', qty: '1', price: '4.5' }
//     ],
//     materials: [
//       { item: 'Tea powder', qty: '400gm', price: '3,000' },
//       { item: 'Blue tea', qty: '100gm', price: '300' },
//       { item: 'Rose tea', qty: '100gm', price: '300' },
//       { item: 'Rooibos', qty: '100gm', price: '300' },
//       { item: 'Black tea', qty: '400gm', price: '100' },
//       { item: 'Lavender', qty: '100gm', price: '100' },
//       { item: 'Green tea', qty: '400gm', price: '100' },
//       { item: 'Lemon grass', qty: '100gm', price: '100' },
//       { item: 'Hibiscus', qty: '1 packet', price: '100' },
//       { item: 'White tea', qty: '1 packet', price: '100' },
//       { item: 'Coffee', qty: '5pcs', price: '100' },
//       { item: 'Horlicks', qty: '25pcs', price: '100' },
//       { item: 'Bournvita', qty: '1 packet', price: '100' },
//       { item: 'Honey', qty: '1 lit', price: '' },
//       { item: 'Sugar', qty: '1 lit', price: '' },
//       { item: 'Dairy milk', qty: '1 lit', price: '' }
//     ],
//     boards: [
//       { item: 'Main Board', qty: '1', price: '' },
//       { item: 'Lollypop Board', qty: '1', price: '' },
//       { item: 'Photo frames', qty: '3', price: '' },
//       { item: 'Menu Board', qty: '1', price: '' },
//       { item: 'Desi Boards (As Per)', qty: '5', price: '' }
//     ],
//     kitchen: [
//       { item: 'Gas stove', qty: '1', price: '' },
//       { item: 'Stainless vessel', qty: '3', price: '' },
//       { item: 'Measurement cups', qty: '1 set', price: '' },
//       { item: 'Long spoons', qty: '5', price: '' },
//       { item: 'Tablespoon', qty: '10', price: '' },
//       { item: 'Ginger Crusher', qty: '1', price: '' },
//       { item: 'Peanuts crusher', qty: '1', price: '' },
//       { item: 'Lemon squeezer', qty: '1', price: '' },
//       { item: 'Ice cream scoop', qty: '2', price: '' },
//       { item: 'Chopping board', qty: '1', price: '' },
//       { item: 'Knife', qty: '2', price: '' },
//       { item: 'Scissors', qty: '1', price: '' },
//       { item: 'Tea tray', qty: '2', price: '' },
//       { item: 'Dust bin', qty: '1', price: '' }
//     ],
//     glasses: [
//       { item: 'Tea cups', qty: '25pcs', price: '' },
//       { item: '300 ml glasses', qty: '10pcs', price: '' },
//       { item: 'Lids', qty: '1 box', price: '' },
//       { item: 'Straws', qty: '2 box', price: '' },
//       { item: 'Tissues', qty: '1 packet', price: '' },
//       { item: 'Silver covers', qty: '25pcs', price: '' },
//       { item: 'Thread', qty: '10pcs', price: '' },
//       { item: 'Paper packing', qty: '1', price: '' },
//       { item: 'Ice cream & Milkshakes spoons', qty: '1 box', price: '' },
//       { item: 'Tooth sticks', qty: '1 box', price: '' },
//       { item: 'Dust bin covers', qty: '3', price: '' }
//     ],
//     interior: [
//       { item: 'Fans', qty: '2', price: '' },
//       { item: 'Lights', qty: '5', price: '' },
//       { item: 'Chairs', qty: '8', price: '' },
//       { item: 'Tables', qty: '4', price: '' },
//       { item: 'Wooden shelf', qty: '2', price: '' },
//       { item: 'Paints', qty: 'As needed', price: '' }
//     ],
//     syrups: [
//       { item: 'Green apple', qty: '1 bottle', price: '' },
//       { item: 'Chocolate', qty: '1 bottle', price: '' },
//       { item: 'Orange', qty: '1 bottle', price: '' },
//       { item: 'Strawberry', qty: '1 bottle', price: '' },
//       { item: 'Black currant', qty: '1 bottle', price: '' },
//       { item: 'Blue mint', qty: '1 bottle', price: '' },
//       { item: 'Choco Stick box', qty: '1 box', price: '' }
//     ]
//   };

//   const FadeInWhenVisible = ({ children, delay = 0 }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, margin: "-100px" });

//     return (
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.6, delay }}
//       >
//         {children}
//       </motion.div>
//     );
//   };

//   // Function to determine which categories to show
//   const getCategoriesToShow = () => {
//     if (activeTab === 'all') {
//       return Object.keys(materials);
//     }
//     return [activeTab];
//   };

//   // Function to get category display name
//   const getCategoryDisplayName = (categoryId) => {
//     return tabs.find(tab => tab.id === categoryId)?.label || categoryId;
//   };

//   return (
//     <div className="bg-amber-50 min-h-screen font-sans">
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

//         .font-sacramento {
//           font-family: "Sacramento", cursive;
//         }
//       `}</style>

//       {/* Hero Banner Section */}
//       <section
//         className="relative text-white overflow-hidden min-h-[500px] flex items-center"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&h=600&fit=crop')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//           padding: "170px 0 80px 0",
//         }}
//       >
//         <div className="container mx-auto px-4 relative z-10 w-full text-center">
//           <FadeInWhenVisible>
//             <h2 className="text-6xl text-[#8dcb3f] md:text-7xl lg:text-8xl font-sacramento font-bold mb-4 text-[clamp(40px,6vw,80px)]">
//               Latest
//             </h2>
//           </FadeInWhenVisible>

//           <FadeInWhenVisible delay={0.2}>
//             <h2
//               className="uppercase font-bold inline-block border-y border-white/50 m-0"
//               style={{
//                 fontSize: "40px",
//                 lineHeight: "40px",
//                 letterSpacing: "10px",
//                 fontFamily: "serif",
//                 color: "#fff",
//               }}
//             >
//               Our Story
//             </h2>
//           </FadeInWhenVisible>

//           <FadeInWhenVisible delay={0.4}>
//             <nav
//               aria-label="breadcrumb"
//               className="mt-6 flex justify-center items-center space-x-2 text-sm"
//             >
//               <ol className="flex space-x-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-white hover:text-gray-300 transition-colors"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li className="text-gray-400">/</li>
//                 <li className="text-gray-400" aria-current="page">
//                   Blogs
//                 </li>
//               </ol>
//             </nav>
//           </FadeInWhenVisible>
//         </div>
//       </section>
//       <header className="bg-amber-900 text-white py-6">
//         <div className="container mx-auto text-center">
//           <h1 className="text-3xl md:text-4xl font-bold">CAFE FRANCHISE OPPORTUNITY</h1>
//           <p className="mt-2">LOW INVESTMENT HIGH RETURNS</p>
//         </div>
//       </header>

//       {/* Tab Navigation */}
//       <div className="bg-amber-800 sticky top-0 z-10 shadow-md">
//         <div className="container mx-auto px-4 overflow-x-auto">
//           <div className="flex whitespace-nowrap py-2">
//             {tabs.map(tab => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 mx-1 rounded-t font-medium text-sm md:text-base transition-colors ${
//                   activeTab === tab.id 
//                     ? 'bg-amber-100 text-amber-900' 
//                     : 'text-amber-100 hover:bg-amber-700'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-8">
//         <AnimatePresence mode="wait">
//           {getCategoriesToShow().map(categoryId => (
//             <motion.div 
//               key={categoryId}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
//             >
//               <div className="bg-amber-700 text-white py-3 px-4 uppercase font-bold text-center text-lg">
//                 {getCategoryDisplayName(categoryId)}
//               </div>

//               <div className="p-4">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b-2 border-amber-200">
//                       <th className="py-2 text-left pl-2">Item</th>
//                       <th className="py-2 text-center">Quantity</th>
//                       <th className="py-2 text-right pr-2">Price (₹)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {materials[categoryId]?.map((item, index) => (
//                       <tr 
//                         key={index}
//                         className={`${index % 2 === 0 ? 'bg-amber-50' : 'bg-white'} border-b border-amber-100`}
//                       >
//                         <td className="py-3 pl-2">{item.item}</td>
//                         <td className="py-3 text-center">{item.qty}</td>
//                         <td className="py-3 text-right pr-2">{item.price}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>

//         {/* Benefits Section */}
//         <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="bg-amber-700 text-white py-3 px-4 uppercase font-bold text-center text-lg">
//             Franchise Benefits
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
//             {franchiseBenefits.map((benefit, index) => (
//               <div 
//                 key={index}
//                 className="bg-amber-50 rounded-lg p-4 text-center shadow-md border-l-4 border-amber-600"
//               >
//                 <p className="font-medium text-amber-900">{benefit}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div className="mt-8 text-center">
//           <p className="text-lg font-semibold text-amber-900">For Franchise Enquiries:</p>
//           <p className="text-xl font-bold mt-2">93811 42553, 8466066425</p>
//           <div className="mt-4 flex justify-center items-center space-x-4">
//             <div className="px-4 py-2 bg-amber-700 text-white rounded-lg">
//               LICENSE AS COMPLIMENTARY
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FranchiseInfo;




import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";

const FranchiseInfo = () => {
  const [activeTab, setActiveTab] = useState('all');
  const scrollRef = useRef(null);

  const tabs = [
    { id: 'all', label: 'All Categories', icon: '🏷️' },
    { id: 'electronic', label: 'Electronics', icon: '⚡' },
    { id: 'materials', label: 'Cafe Materials', icon: '☕' },
    { id: 'boards', label: 'Boards & Setup', icon: '🎭' },
    { id: 'kitchen', label: 'Kitchen Equipment', icon: '🍳' },
    { id: 'glasses', label: 'Glasses Kit', icon: '🥛' },
    { id: 'interior', label: 'Interior Design', icon: '🪑' },
    { id: 'syrups', label: 'Syrups', icon: '🧃' },
  ];

  // Premium Unsplash images for categories
  const categoryImages = {
    electronic: "https://images.unsplash.com/photo-1574914629385-46b1d2633c55?w=800&h=600&fit=crop",
    materials: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&h=600&fit=crop",
    boards: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    kitchen: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop",
    glasses: "https://images.unsplash.com/photo-1570696638206-c4289630ad00?w=800&h=600&fit=crop",
    interior: "https://images.unsplash.com/photo-1530229540764-75ba9f128d72?w=800&h=600&fit=crop",
    syrups: "https://images.unsplash.com/photo-1557308272-a06a44c528f3?w=800&h=600&fit=crop"
  };

  const franchiseBenefits = [
    { title: 'REVENUE MAKING', icon: '📈', description: 'Consistent income from day one with our proven business model' },
    { title: 'RAW MATERIALS', icon: '🧰', description: 'Premium quality ingredients supplied directly from verified sources' },
    { title: 'LOW INVESTMENT HIGH RETURNS', icon: '💰', description: 'Start with minimal capital and see profits within months' },
    { title: 'SOCIAL MARKETING SUPPORT', icon: '📱', description: 'Comprehensive digital marketing assistance for maximum reach' },
    { title: 'MINIMAL OPERATIONAL SPACE', icon: '🏠', description: 'Only 90-150 sq. ft required to set up your cafe' },
    { title: 'NO ROYALTY', icon: '✅', description: 'Keep 100% of your profits with no ongoing fees' },
    { title: 'FREE TRAINING', icon: '🎓', description: 'Comprehensive 3-day training program for you and your staff' },
    { title: 'LIFETIME SUPPORT', icon: '🤝', description: 'One-time settlement with continuous business guidance' },
    { title: '100% SUCCESS', icon: '🏆', description: 'Proven track record with all our franchise partners' }
  ];

  const materials = {
    electronic: [
      { item: 'Refrigerator', qty: '1', price: '320' },
      { item: 'Induction stove', qty: '1', price: '190' },
      { item: 'Mixer blender', qty: '1', price: '4.5' },
      { item: 'Sandwich Griller', qty: '1', price: '6.2' },
      { item: 'Deep fryer', qty: '1', price: '5.0' },
      { item: '32 inch LED TV', qty: '1', price: '2.5' },
      { item: 'Coffee Machine', qty: '1', price: '4.5' }
    ],
    materials: [
      { item: 'Tea powder', qty: '400gm', price: '3,000' },
      { item: 'Blue tea', qty: '100gm', price: '300' },
      { item: 'Rose tea', qty: '100gm', price: '300' },
      { item: 'Rooibos', qty: '100gm', price: '300' },
      { item: 'Black tea', qty: '400gm', price: '100' },
      { item: 'Lavender', qty: '100gm', price: '100' },
      { item: 'Green tea', qty: '400gm', price: '100' },
      { item: 'Lemon grass', qty: '100gm', price: '100' },
      { item: 'Hibiscus', qty: '1 packet', price: '100' },
      { item: 'White tea', qty: '1 packet', price: '100' },
      { item: 'Coffee', qty: '5pcs', price: '100' },
      { item: 'Horlicks', qty: '25pcs', price: '100' },
      { item: 'Bournvita', qty: '1 packet', price: '100' },
      { item: 'Honey', qty: '1 lit', price: '' },
      { item: 'Sugar', qty: '1 lit', price: '' },
      { item: 'Dairy milk', qty: '1 lit', price: '' }
    ],
    boards: [
      { item: 'Main Board', qty: '1', price: '' },
      { item: 'Lollypop Board', qty: '1', price: '' },
      { item: 'Photo frames', qty: '3', price: '' },
      { item: 'Menu Board', qty: '1', price: '' },
      { item: 'Desi Boards (As Per)', qty: '5', price: '' }
    ],
    kitchen: [
      { item: 'Gas stove', qty: '1', price: '' },
      { item: 'Stainless vessel', qty: '3', price: '' },
      { item: 'Measurement cups', qty: '1 set', price: '' },
      { item: 'Long spoons', qty: '5', price: '' },
      { item: 'Tablespoon', qty: '10', price: '' },
      { item: 'Ginger Crusher', qty: '1', price: '' },
      { item: 'Peanuts crusher', qty: '1', price: '' },
      { item: 'Lemon squeezer', qty: '1', price: '' },
      { item: 'Ice cream scoop', qty: '2', price: '' },
      { item: 'Chopping board', qty: '1', price: '' },
      { item: 'Knife', qty: '2', price: '' },
      { item: 'Scissors', qty: '1', price: '' },
      { item: 'Tea tray', qty: '2', price: '' },
      { item: 'Dust bin', qty: '1', price: '' }
    ],
    glasses: [
      { item: 'Tea cups', qty: '25pcs', price: '' },
      { item: '300 ml glasses', qty: '10pcs', price: '' },
      { item: 'Lids', qty: '1 box', price: '' },
      { item: 'Straws', qty: '2 box', price: '' },
      { item: 'Tissues', qty: '1 packet', price: '' },
      { item: 'Silver covers', qty: '25pcs', price: '' },
      { item: 'Thread', qty: '10pcs', price: '' },
      { item: 'Paper packing', qty: '1', price: '' },
      { item: 'Ice cream & Milkshakes spoons', qty: '1 box', price: '' },
      { item: 'Tooth sticks', qty: '1 box', price: '' },
      { item: 'Dust bin covers', qty: '3', price: '' }
    ],
    interior: [
      { item: 'Fans', qty: '2', price: '' },
      { item: 'Lights', qty: '5', price: '' },
      { item: 'Chairs', qty: '8', price: '' },
      { item: 'Tables', qty: '4', price: '' },
      { item: 'Wooden shelf', qty: '2', price: '' },
      { item: 'Paints', qty: 'As needed', price: '' }
    ],
    syrups: [
      { item: 'Green apple', qty: '1 bottle', price: '' },
      { item: 'Chocolate', qty: '1 bottle', price: '' },
      { item: 'Orange', qty: '1 bottle', price: '' },
      { item: 'Strawberry', qty: '1 bottle', price: '' },
      { item: 'Black currant', qty: '1 bottle', price: '' },
      { item: 'Blue mint', qty: '1 bottle', price: '' },
      { item: 'Choco Stick box', qty: '1 box', price: '' }
    ]
  };

  // Function to determine which categories to show
  const getCategoriesToShow = () => {
    if (activeTab === 'all') {
      return Object.keys(materials);
    }
    return [activeTab];
  };

  // Function to get category display name
  const getCategoryDisplayName = (categoryId) => {
    return tabs.find(tab => tab.id === categoryId)?.label || categoryId;
  };

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  // Advanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Float animation for decorative elements
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  // Animated Card Component for each category
  const CategoryCard = ({ categoryId, index }) => {
    const isEven = index % 2 === 0;
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, amount: 0.3 });

    const imageVariants = {
      hidden: { opacity: 0, x: isEven ? -50 : 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }
      }
    };

    const contentVariants = {
      hidden: { opacity: 0, x: isEven ? 50 : -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.3
        }
      }
    };

    return (
      <motion.div
        ref={cardRef}
        className="my-16 relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
      >
        {/* Decorative Coffee Beans */}
        <motion.div
          className="absolute -top-10 -left-5 z-0 opacity-20 hidden md:block"
          animate={floatAnimation}
        >
          <img
            src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=100&h=100&fit=crop"
            alt="Coffee decoration"
            className="w-20 h-20 object-cover rounded-full"
          />
        </motion.div>

        {isEven && (
          <motion.div
            className="absolute -bottom-10 -right-5 z-0 opacity-20 hidden md:block"
            animate={floatAnimation}
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=100&h=100&fit=crop"
              alt="Coffee decoration"
              className="w-16 h-16 object-cover rounded-full"
            />
          </motion.div>
        )}

        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-2xl overflow-hidden shadow-2xl relative z-10`}>
          <motion.div
            className="md:w-1/2 relative overflow-hidden"
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
            <img
              src={categoryImages[categoryId] || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop"}
              alt={getCategoryDisplayName(categoryId)}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ minHeight: '400px', maxHeight: '500px' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
              <h2 className="text-3xl font-bold mb-2">{tabs.find(tab => tab.id === categoryId)?.icon} {getCategoryDisplayName(categoryId)}</h2>
              <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 p-0 flex flex-col"
            variants={contentVariants}
          >
            <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-4 px-6 uppercase font-bold">
              <div className="flex items-center justify-between">
                <h3 className="text-xl">Essential Items</h3>
                <span className="text-amber-200 text-sm">Premium Quality</span>
              </div>
            </div>

            <div className="p-6 flex-grow bg-gradient-to-b from-amber-50 to-white">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-amber-200">
                      <th className="py-3 text-left pl-4 text-amber-800">Item</th>
                      <th className="py-3 text-center text-amber-800">Qty</th>
                      <th className="py-3 text-right pr-4 text-amber-800">Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials[categoryId]?.map((item, idx) => (
                      <motion.tr
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx, duration: 0.3 }}
                        className={`${idx % 2 === 0 ? 'bg-white' : 'bg-amber-50'} border-b border-amber-100 hover:bg-amber-100 transition-colors`}
                      >
                        <td className="py-3 pl-4 font-medium">{item.item}</td>
                        <td className="py-3 text-center">{item.qty}</td>
                        <td className="py-3 text-right pr-4 font-medium">{item.price ? `₹${item.price}` : '-'}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen font-sans overflow-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

        .font-sacramento {
          font-family: "Sacramento", cursive;
        }
        
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #8dcb3f;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #b45309;
        }
        
        /* Animated background */
        .animated-bg {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Hero Banner Section with Parallax */}
      <motion.section
        style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
        className="relative text-white overflow-hidden min-h-[600px] flex items-center"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Animated Coffee Elements */}
        <motion.div
          className="absolute top-20 left-10 opacity-30 hidden lg:block"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=200&fit=crop" alt="Coffee decoration" className="w-32 h-32 object-cover rounded-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 opacity-30 hidden lg:block"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=200&h=200&fit=crop" alt="Coffee decoration" className="w-32 h-32 object-cover rounded-full" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl text-[#8dcb3f] md:text-7xl lg:text-8xl font-sacramento font-bold mb-4 text-[clamp(40px,6vw,80px)]">
              Café Franchise
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2
              className="uppercase font-bold inline-block border-y-2 border-amber-400/70 py-2 px-6 m-0 font-playfair"
              style={{
                fontSize: "clamp(20px, 5vw, 40px)",
                lineHeight: "1.2",
                letterSpacing: "10px",
                color: "#fff",
              }}
            >
              PREMIUM OPPORTUNITY
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <span className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-amber-500 transition-all cursor-pointer">
              Start Your Journey Today
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-10 animated-bg"
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-playfair mb-4">PREMIUM CAFE FRANCHISE</h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl italic font-light max-w-3xl mx-auto">
            Low Investment. High Returns. Proven Success.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
            <motion.div
              className="bg-amber-800/70 rounded-xl p-4 backdrop-blur-sm"
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className="text-amber-300 text-4xl font-bold">90+</div>
              <div className="text-amber-100 mt-2">Sq. Ft. Only</div>
            </motion.div>

            <motion.div
              className="bg-amber-800/70 rounded-xl p-4 backdrop-blur-sm"
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className="text-amber-300 text-4xl font-bold">3</div>
              <div className="text-amber-100 mt-2">Days Training</div>
            </motion.div>

            <motion.div
              className="bg-amber-800/70 rounded-xl p-4 backdrop-blur-sm"
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className="text-amber-300 text-4xl font-bold">0%</div>
              <div className="text-amber-100 mt-2">Royalty</div>
            </motion.div>

            <motion.div
              className="bg-amber-800/70 rounded-xl p-4 backdrop-blur-sm"
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className="text-amber-300 text-4xl font-bold">100%</div>
              <div className="text-amber-100 mt-2">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-700 sticky top-0 z-30 shadow-xl">
        <div className="container mx-auto px-4 overflow-x-auto py-1">
          <motion.div
            className="flex whitespace-nowrap py-2 gap-1"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 mx-1 rounded-lg font-medium text-sm md:text-base transition-all ${activeTab === tab.id
                  ? 'bg-amber-100 text-amber-900 shadow-lg'
                  : 'text-amber-100 hover:bg-amber-600'
                  }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content - Creative Zigzag Cards */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
          ref={scrollRef}
        >
          {/* Decorative Coffee Path */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200 z-0 hidden lg:block"></div>

          {getCategoriesToShow().map((categoryId, index) => (
            <CategoryCard
              key={categoryId}
              categoryId={categoryId}
              index={index}
            />
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 relative"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-amber-900">Premium Benefits</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 mb-2 rounded-full"></div>
            <p className="text-amber-700 text-lg max-w-2xl mx-auto">
              Join our successful network of cafe owners and enjoy these exclusive advantages
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {franchiseBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(209, 107, 2, 0.3)' }}
                className="bg-white rounded-xl p-6 text-center shadow-lg border-t-4 border-amber-500 flex flex-col items-center transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-4 text-2xl text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">{benefit.title}</h3>
                <p className="text-amber-700">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-amber-900 to-amber-700 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop"
                alt="Coffee shop"
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
                <div className="text-white p-8 max-w-md">
                  <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Begin Your Success Story</h3>
                  <p className="text-gray-200 mb-6">Take the first step towards owning a profitable cafe business with our premium franchise model.</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Contact Us Today</h3>
                <p className="text-amber-200 text-lg mb-6">Our franchise experts are ready to guide you</p>

                <div className="flex flex-col space-y-4 items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg py-4 px-8 inline-block"
                  >
                    <span className="text-amber-200 mr-2">☎️</span>
                    <span className="text-white font-medium text-xl">93811 42553</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg py-4 px-8 inline-block"
                  >
                    <span className="text-amber-200 mr-2">📱</span>
                    <span className="text-white font-medium text-xl">8466066425</span>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-amber-500 hover:bg-amber-400 transition-colors text-amber-900 font-bold py-3 px-8 rounded-full shadow-lg"
                  >
                    Request Information
                  </motion.button>
                </div>

                <motion.div
                  className="mt-10 border border-amber-400/30 rounded-lg py-3 px-6 text-amber-200 inline-block"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  LICENSE PROVIDED AS COMPLIMENTARY
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


    </div>
  );
};

export default FranchiseInfo;
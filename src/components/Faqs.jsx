// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//     {
//         q: "What size of store is required to open a Tea 5 Cafe franchise?",
//         a: "A minimum of 150 sq ft is required, though 200 sq ft is ideal for seating and equipment.",
//     },
//     {
//         q: "How much does the franchise cost?",
//         a: "The initial franchise investment is ₹2,50,000 + GST, covering brand setup, initial stock, and equipment.",
//     },
//     {
//         q: "Is the franchise fee refundable?",
//         a: "No, the franchise fee is non-refundable as it covers setup and brand licensing.",
//     },
//     {
//         q: "Are all appliances branded and under warranty?",
//         a: "Yes — all appliances like refrigerators and burners are branded products with manufacturer warranties.",
//     },
//     {
//         q: "How long is the franchise agreement valid?",
//         a: "The franchise agreement lasts for 5 years and can be renewed for another 5 years by paying 10% of the original fee.",
//     },
//     {
//         q: "Does Tea 5 Cafe provide staff or training?",
//         a: "We provide 3-day hands-on training for your selected staff to ensure consistent quality and operations.",
//     },
//     {
//         q: "What kind of marketing support will I receive?",
//         a: "Tea 5 Cafe offers digital marketing support, launch promotions, and ongoing social media branding assistance.",
//     },
//     {
//         q: "Do I need prior experience in running a cafe?",
//         a: "No prior experience is required — our detailed training and operational guidance make it easy for first-time entrepreneurs.",
//     },
//     {
//         q: "What are the expected monthly profits or ROI?",
//         a: "Depending on location and sales, most partners achieve a 60–80% ROI within the first year of operation.",
//     },
//     {
//         q: "How soon can I start after signing the agreement?",
//         a: "Once the agreement is signed and fees are paid, the store can be set up and launched within 20–30 days.",
//     },
//     {
//         q: "Who selects the location for the outlet?",
//         a: "The franchisee proposes a location, and our team verifies its suitability based on visibility, footfall, and accessibility.",
//     },
//     {
//         q: "Is raw material supply managed by Tea 5 Cafe?",
//         a: "Yes, we provide standardized ingredients and packaging materials to maintain consistency across all outlets.",
//     },
//     {
//         q: "Can I run multiple Tea 5 Cafe outlets?",
//         a: "Yes, multi-unit franchising is allowed after successfully operating your first outlet for a minimum of 6 months.",
//     },
//     {
//         q: "Does Tea 5 Cafe assist with interior design and branding?",
//         a: "Absolutely — our design team provides layout guidance, color themes, and branding materials to align with the Tea 5 identity.",
//     },
//     {
//         q: "What is the franchise renewal process?",
//         a: "At the end of the 5-year term, renewal requires a short audit and payment of 10% of the initial franchise fee.",
//     },
// ];

// export default function Tea5Story() {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggle = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <>
//             {/* 🌅 Hero Banner */}
//             <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

//         .font-sacramento {
//           font-family: "Sacramento", cursive;
//         }
//       `}</style>
//             <section
//                 className="relative text-white overflow-hidden min-h-[500px] flex items-center"
//                 style={{
//                     backgroundImage:
//                         "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&h=800&fit=crop')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundAttachment: "fixed",
//                     padding: "170px 0 80px 0",
//                 }}
//             >
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <motion.h2
//                         className="text-6xl text-[#8dcb3f] md:text-7xl lg:text-8xl font-bold mb-4 font-sacramento"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7 }}
//                     >
//                         Welcome to
//                     </motion.h2>

//                     <motion.h2
//                         className="uppercase font-bold inline-block border-y border-white/50 text-white"
//                         style={{
//                             fontSize: "40px",
//                             lineHeight: "40px",
//                             letterSpacing: "10px",
//                             fontFamily: "serif",
//                         }}
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                     >
//                         Tea 5 Cafe Story
//                     </motion.h2>

//                     <motion.nav
//                         aria-label="breadcrumb"
//                         className="mt-6 flex justify-center items-center text-sm space-x-2"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.6 }}
//                     >
//                         <ol className="flex space-x-2">
//                             <li>
//                                 <a
//                                     href="#"
//                                     className="text-white hover:text-gray-300 transition-colors"
//                                 >
//                                     Home
//                                 </a>
//                             </li>
//                             <li className="text-gray-400">/</li>
//                             <li className="text-gray-400" aria-current="page">
//                                 Our Story
//                             </li>
//                         </ol>
//                     </motion.nav>
//                 </div>
//             </section>

//             {/* 🧋 FAQ Section */}
//             <section className="py-20 bg-[#18191b]">
//                 <div className="container mx-auto px-6">
//                     <motion.h2
//                         className="text-center text-4xl font-bold text-[#8dcb3f] mb-12"
//                         initial={{ opacity: 0, y: 40 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                     >
//                         <span className="text-white/50"> Frequently</span> Asked Questions
//                     </motion.h2>

//                     <div className="max-w-3xl mx-auto divide-y divide-gray-300 bg-[#18191b] backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
//                         {faqs.map((faq, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.1, duration: 0.4 }}
//                                 viewport={{ once: true }}
//                                 className="p-6"
//                             >
//                                 <button
//                                     onClick={() => toggle(i)}
//                                     className="flex justify-between items-center w-full text-left focus:outline-none"
//                                 >
//                                     <span className="text-lg font-semibold text-[#ffffff]">
//                                         {faq.q}
//                                     </span>
//                                     <motion.span
//                                         animate={{
//                                             rotate: openIndex === i ? 180 : 0,
//                                         }}
//                                         transition={{ duration: 0.3 }}
//                                         className="text-[#ffffff]"
//                                     >
//                                         ▼
//                                     </motion.span>
//                                 </button>

//                                 <AnimatePresence>
//                                     {openIndex === i && (
//                                         <motion.div
//                                             key="content"
//                                             initial={{ opacity: 0, height: 0 }}
//                                             animate={{ opacity: 1, height: "auto" }}
//                                             exit={{ opacity: 0, height: 0 }}
//                                             transition={{ duration: 0.4 }}
//                                             className="overflow-hidden"
//                                         >
//                                             <p className="text-white/50 text-sm leading-relaxed mt-3">
//                                                 {faq.a}
//                                             </p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }




import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const faqList = [
    {
        question: "What are your cafe timings?",
        answer:
            "Our cafe is open every day from 8:00 AM to 10:00 PM, including weekends and holidays.",
    },
    {
        question: "Do you offer home delivery?",
        answer:
            "Yes! We offer home delivery through Swiggy and Zomato. You can also call us directly for takeaway orders.",
    },
    {
        question: "Is Tea 5 Cafe vegetarian-friendly?",
        answer:
            "Absolutely! We have a wide variety of vegetarian and vegan-friendly items on our menu.",
    },
    {
        question: "Do you provide event catering?",
        answer:
            "Yes, Tea 5 Cafe offers catering for birthdays, corporate meetings, and private events. Contact us for details.",
    },
    {
        question: "Where is Tea 5 Cafe located?",
        answer:
            "We’re located in the heart of the city, near NRCM Campus. You can find us on Google Maps for directions.",
    },
    {
        question: "Do you have Wi-Fi available?",
        answer:
            "Yes, we provide free high-speed Wi-Fi for all our guests. Just ask our staff for the password.",
    },
];

const Faqs = () => {
    return (
        <>
            {/* ✅ Global Styles for Animated Background + Sacramento Font */}
            <style jsx global>{`
				@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

				.font-sacramento {
					font-family: "Sacramento", cursive;
				}

				/* Subtle animated grid background */
				.grid-bg {
					position: absolute;
					inset: 0;
					background-image: linear-gradient(
							rgba(255, 255, 255, 0.05) 1px,
							transparent 1px
						),
						linear-gradient(
							90deg,
							rgba(255, 255, 255, 0.05) 1px,
							transparent 1px
						);
					background-size: 40px 40px;
					animation: moveGrid 20s linear infinite;
					z-index: 0;
				}

				@keyframes moveGrid {
					from {
						background-position: 0 0;
					}
					to {
						background-position: 40px 40px;
					}
				}
			`}</style>

            {/* ✅ HERO SECTION (kept exactly as provided) */}
            <section
                className="relative text-white overflow-hidden min-h-[500px] flex items-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&h=800&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    padding: "170px 0 80px 0",
                }}
            >


                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        className="text-6xl text-[#8dcb3f] md:text-7xl lg:text-8xl font-bold mb-4 font-sacramento"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Welcome to
                    </motion.h2>

                    <motion.h2
                        className="uppercase font-bold inline-block border-y border-white/50 text-white"
                        style={{
                            fontSize: "40px",
                            lineHeight: "40px",
                            letterSpacing: "10px",
                            fontFamily: "serif",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Tea 5 Cafe FAQs
                    </motion.h2>

                    <motion.nav
                        aria-label="breadcrumb"
                        className="mt-6 flex justify-center items-center text-sm space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
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
                                FAQ
                            </li>
                        </ol>
                    </motion.nav>
                </div>
            </section>

            {/* ✅ FAQ GRID SECTION */}
            <section className="ezy__faq16 dark py-14 md:py-24 bg-[#18191b] dark:bg-[#18191b] text-white dark:text-white relative">
                {/* Animated subtle grid overlay */}
                <div className="grid-bg"></div>
                <div className="container px-6 md:px-12 lg:px-28 mx-auto">
                    <div className="grid grid-cols-12 mb-12">
                        <div className="col-span-12 lg:col-span-7 text-center lg:text-left px-4">
                            <h2 className="font-bold text-[35px] leading-[45px] md:text-[45px] md:leading-[60px] text-[#8dcb3f]">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-base leading-6 font-medium text-white/70 mt-4">
                                Everything you need to know before becoming a proud Tea 5 Cafe
                                partner. If your question isn’t listed, we’re just a message away!
                            </p>
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-12 text-center md:text-start">
                        {faqList.map((faq, i) => (
                            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
                                <div className="flex flex-col items-center md:items-start p-6 lg:p-10">
                                    <div className="bg-[#8dcb3f] text-white text-xl h-10 w-10 rounded-full flex justify-center items-center mb-6">
                                        <FontAwesomeIcon icon={faQuestion} />
                                    </div>
                                    <h5 className="text-xl font-bold mb-4">{faq.question}</h5>
                                    <p className="text-base leading-snug opacity-80 mb-2">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div> */}

                    <div className="grid grid-cols-12 text-center md:text-left">
                        {faqList.map((faq, i) => (
                            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
                                <div className="flex flex-col items-center md:items-start p-6 lg:p-10">
                                    <div className="bg-[#8dcb3f] text-black text-xl h-10 w-10 rounded-full flex justify-center items-center mb-6 shadow-lg shadow-[#8dcb3f]/40">
                                        <FontAwesomeIcon icon={faQuestion} />
                                    </div>

                                    <h5 className="text-xl font-bold mb-3 text-white">
                                        {faq.question}
                                    </h5>
                                    <p className="text-base leading-snug text-white/70">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*                     
                    <div className="grid grid-cols-12 mt-6">
                        <div className="col-span-12 text-center">
                            <div className="bg-[#252d39] dark:bg-[#1E2735] rounded-xl text-white p-6 md:py-10 lg:py-12">
                                <h4 className="text-[32px] leading-[45px] lg:text-[45px] lg:leading-[60px] font-bold mb-2">
                                    Have any additional questions?
                                </h4>
                                <p className="text-[17px] leading-normal opacity-70 mb-3">
                                    We’d love to hear from you! Get in touch with our friendly team
                                    for any more details about Tea 5 Cafe.
                                </p>
                                <button className="bg-[#8dcb3f] hover:bg-opacity-90 text-white font-bold border border-[#8dcb3f] py-3 px-6 rounded transition mt-4 mb-0">
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    </div> */}

                    <div className="grid grid-cols-12 mt-12">
                        <div className="col-span-12 text-center">
                            <div className="bg-[#111213] rounded-xl border border-[#8dcb3f]/30 p-6 md:py-10 lg:py-12 shadow-xl shadow-black/40">
                                <h4 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-3 text-[#8dcb3f]">
                                    Have any additional questions?
                                </h4>
                                <p className="text-[16px] md:text-[18px] text-white/60 mb-4 max-w-2xl mx-auto">
                                    Reach out to our franchise support team and we’ll help you start
                                    brewing success with Tea 5 Cafe.
                                </p>
                                <button className="bg-[#8dcb3f] hover:bg-[#a2e24d] text-black font-bold py-3 px-8 rounded-full transition shadow-lg hover:text-black hover:shadow-[0_20px_40px_rgba(141,203,63,0.3)] cu">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-[#8dcb3f] absolute w-full bottom-0 h-[200px] -z-[1]"></div>
            </section>
        </>
    );
};

export default Faqs;

// // src/pages/ContactPage.jsx
// import React, { useState } from 'react';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real application, you would send the form data to your backend here
//     console.log(formData);
//     setSubmitted(true);
//     // Reset form after successful submission
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//     // Reset success message after 5 seconds
//     setTimeout(() => {
//       setSubmitted(false);
//     }, 5000);
//   };

//   return (
//     <div className="py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <div className="bg-white shadow-md p-6 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
//             {submitted ? (
//               <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
//                 Thank you for your message! We'll get back to you as soon as possible.
//               </div>
//             ) : null}
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
//                 <input 
//                   type="text" 
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
//                 <input 
//                   type="email" 
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
//                 <input 
//                   type="text" 
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
//                 <textarea 
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
//                   required
//                 ></textarea>
//               </div>
//               <button 
//                 type="submit"
//                 className="bg-green-600 text-white font-medium py-2 px-6 rounded-md hover:bg-green-700 transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <div className="bg-white shadow-md p-6 rounded-lg mb-6">
//               <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
//               <div className="space-y-4">
//                 <p className="flex items-center">
//                   <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   info@nexuspublications.com
//                 </p>
//                 <p className="flex items-center">
//                   <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   +1 (123) 456-7890
//                 </p>
//                 <p className="flex items-center">
//                   <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   123 Academic Ave, Suite 456<br />
//                   <span className="ml-8">University District, CA 90210</span>
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white shadow-md p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
//               <div className="space-y-2">
//                 <p className="flex justify-between">
//                   <span>Monday - Friday:</span>
//                   <span>9:00 AM - 5:00 PM</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Saturday:</span>
//                   <span>10:00 AM - 2:00 PM</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Sunday:</span>
//                   <span>Closed</span>
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white shadow-md p-6 rounded-lg mt-6">
//               <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
//               <div className="flex space-x-4">
//                 <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Map Placeholder */}
//         <div className="mt-12 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
//           <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

// // src/pages/ContactPage.jsx
// import React, { useState } from 'react';

// const ContactPage = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });

//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // In a real application, you would send the form data to your backend here
//         console.log(formData);
//         setSubmitted(true);
//         // Reset form after successful submission
//         setFormData({
//             name: '',
//             email: '',
//             subject: '',
//             message: ''
//         });
//         // Reset success message after 5 seconds
//         setTimeout(() => {
//             setSubmitted(false);
//         }, 5000);
//     };

//     return (
//         <div className="relative pt-16 pb-24 overflow-hidden">
//             {/* Background elements */}
//             <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-amber-50"></div>
//             <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-30"></div>
//             <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-20"></div>

//             <div className="max-w-6xl mx-auto px-4 relative">
//                 {/* Decorative elements */}
//                 <div className="absolute top-10 left-10 w-20 h-20 border-2 border-amber-200 rounded-full opacity-20"></div>
//                 <div className="absolute top-60 right-20 w-16 h-16 border-2 border-amber-300 rounded-full opacity-20"></div>
//                 <div className="absolute bottom-40 left-40 w-24 h-24 border-4 border-amber-200 rounded-full opacity-10"></div>

//                 <h1 className="text-5xl font-bold mb-4 text-center">
//                     Contact <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Us</span>
//                 </h1>
//                 <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-12"></div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Contact Form */}
//                     <div className="backdrop-blur-sm bg-white/80 shadow-xl p-8 rounded-xl border border-white/50 relative group transform transition-all duration-500 hover:shadow-amber-200/50">
//                         <div className="absolute -top-3 -left-3 w-16 h-16 border-2 border-amber-200 rounded-full opacity-40"></div>
//                         <div className="absolute -bottom-3 -right-3 w-16 h-16 border-2 border-amber-200 rounded-full opacity-40"></div>

//                         <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
//                             <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-3 shadow-sm">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                 </svg>
//                             </span>
//                             Get in Touch
//                         </h2>

//                         {submitted ? (
//                             <div className="bg-amber-100 text-amber-700 p-4 rounded-md mb-6 animate-pulse border border-amber-200">
//                                 Thank you for your message! We'll get back to you as soon as possible.
//                             </div>
//                         ) : null}

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="group">
//                                 <label className="block text-gray-700 mb-2 group-hover:text-amber-600 transition-colors duration-300 font-medium" htmlFor="name">Name</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
//                                     required
//                                 />
//                             </div>

//                             <div className="group">
//                                 <label className="block text-gray-700 mb-2 group-hover:text-amber-600 transition-colors duration-300 font-medium" htmlFor="email">Email</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
//                                     required
//                                 />
//                             </div>

//                             <div className="group">
//                                 <label className="block text-gray-700 mb-2 group-hover:text-amber-600 transition-colors duration-300 font-medium" htmlFor="subject">Subject</label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     name="subject"
//                                     value={formData.subject}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
//                                     required
//                                 />
//                             </div>

//                             <div className="group">
//                                 <label className="block text-gray-700 mb-2 group-hover:text-amber-600 transition-colors duration-300 font-medium" htmlFor="message">Message</label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     value={formData.message}
//                                     onChange={handleChange}
//                                     rows="5"
//                                     className="w-full px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
//                                     required
//                                 ></textarea>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-3 px-8 rounded-md hover:shadow-lg hover:shadow-amber-600/30 transition-all duration-300 transform hover:-translate-y-1"
//                             >
//                                 Send Message
//                             </button>
//                         </form>
//                     </div>

//                     {/* Contact Information */}
//                     <div className="space-y-8">
//                         <div className="backdrop-blur-sm bg-white/80 shadow-xl p-8 rounded-xl border border-white/50 relative transform transition-all duration-500 hover:shadow-amber-200/50">
//                             <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800 group">
//                                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center shadow-md mr-4 group-hover:shadow-amber-200/50 transition-shadow duration-300">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                 </div>
//                                 <span className="relative">
//                                     <span className="text-gray-800 group-hover:text-amber-700 transition-colors duration-300">Contact Information</span>
//                                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
//                                 </span>
//                             </h2>

//                             <div className="space-y-6">
//                                 <p className="flex items-center group">
//                                     <span className="flex-shrink-0 bg-amber-100 p-3 rounded-full mr-4 group-hover:bg-amber-200 transition-colors duration-300">
//                                         <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                         </svg>
//                                     </span>
//                                     <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">info@nexuspublications.com</span>
//                                 </p>

//                                 <p className="flex items-center group">
//                                     <span className="flex-shrink-0 bg-amber-100 p-3 rounded-full mr-4 group-hover:bg-amber-200 transition-colors duration-300">
//                                         <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                         </svg>
//                                     </span>
//                                     <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">+1 (123) 456-7890</span>
//                                 </p>

//                                 <p className="flex items-start group">
//                                     <span className="flex-shrink-0 bg-amber-100 p-3 rounded-full mr-4 group-hover:bg-amber-200 transition-colors duration-300">
//                                         <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                         </svg>
//                                     </span>
//                                     <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
//                                         123 Academic Ave, Suite 456<br />
//                                         <span className="ml-0">University District, CA 90210</span>
//                                     </span>
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="backdrop-blur-sm bg-white/80 shadow-xl p-8 rounded-xl border border-white/50 relative transform transition-all duration-500 hover:shadow-amber-200/50">

//                             {/* // Office Hours heading with hover bottom line effect */}
//                             <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800 group">
//                                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center shadow-md mr-4 group-hover:shadow-amber-200/50 transition-shadow duration-300">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                 </div>
//                                 <span className="relative">
//                                     <span className="text-gray-800 group-hover:text-amber-700 transition-colors duration-300">Office Hours</span>
//                                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
//                                 </span>
//                             </h2>

//                             <div className="space-y-4">
//                                 <div className="flex justify-between items-center p-3 rounded-lg hover:bg-amber-50 transition-colors duration-300">
//                                     <span className="font-medium text-gray-700">Monday - Friday:</span>
//                                     <span className="text-amber-600 font-medium">9:00 AM - 5:00 PM</span>
//                                 </div>
//                                 <div className="flex justify-between items-center p-3 rounded-lg hover:bg-amber-50 transition-colors duration-300">
//                                     <span className="font-medium text-gray-700">Saturday:</span>
//                                     <span className="text-amber-600 font-medium">10:00 AM - 2:00 PM</span>
//                                 </div>
//                                 <div className="flex justify-between items-center p-3 rounded-lg hover:bg-amber-50 transition-colors duration-300">
//                                     <span className="font-medium text-gray-700">Sunday:</span>
//                                     <span className="text-amber-600 font-medium">Closed</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="backdrop-blur-sm bg-white/80 shadow-xl p-8 rounded-xl border border-white/50 relative transform transition-all duration-500 hover:shadow-amber-200/50">
//                             <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800 group">
//                                 <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shadow-md mr-4 group-hover:bg-amber-200 transition-colors duration-300">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 010-5.656l4-4a4 4 0 015.656 5.656l-1.1 1.1" />
//                                     </svg>
//                                 </div>
//                                 <span className="relative group-hover:text-amber-700 transition-colors duration-300">
//                                     Connect With Us
//                                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
//                                 </span>
//                             </h2>

//                             <div className="flex space-x-4">
//                                 <a href="#" className="w-10 h-10 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 flex items-center justify-center hover:bg-amber-600/80 transition-all duration-300 transform hover:scale-110 shadow-md">
//                                     <span className="sr-only">Facebook</span>
//                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                                         <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                                     </svg>
//                                 </a>
//                                 <a href="#" className="w-10 h-10 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 flex items-center justify-center hover:bg-amber-600/80 transition-all duration-300 transform hover:scale-110 shadow-md">
//                                     <span className="sr-only">Twitter</span>
//                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                                         <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                                     </svg>
//                                 </a>
//                                 <a href="#" className="w-10 h-10 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 flex items-center justify-center hover:bg-amber-600/80 transition-all duration-300 transform hover:scale-110 shadow-md">
//                                     <span className="sr-only">Instagram</span>
//                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                                         <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772a4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//                                     </svg>
//                                 </a>
//                                 <a href="#" className="w-10 h-10 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 flex items-center justify-center hover:bg-amber-600/80 transition-all duration-300 transform hover:scale-110 shadow-md">
//                                     <span className="sr-only">LinkedIn</span>
//                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Map Section */}
//                 <div className="mt-16 backdrop-blur-sm bg-white/60 p-2 rounded-xl shadow-xl border border-white/50 overflow-hidden">
//                     <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//                         Find Us
//                     </h2>
//                     <div className="bg-gray-200 h-72 rounded-lg overflow-hidden relative group">
//                         <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                             <button className="bg-white text-amber-600 py-2 px-6 rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//                                 Open in Google Maps
//                             </button>
//                         </div>
//                         <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-100 flex items-center justify-center">
//                             <div className="text-gray-600 text-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
//                                 </svg>
//                                 <p>Interactive Map Would Be Displayed Here</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactPage;




// ContactSection


// import React, { useState } from 'react';
// import icon from "../assets/bg1.jpg";

// export default function ContactSection() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     });
//     const [showSuccess, setShowSuccess] = useState(false);
//     const [showError, setShowError] = useState(false);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Simulate submission
//         try {
//             console.log('Form submitted:', formData);
//             setShowSuccess(true);
//             setShowError(false);

//             // Reset
//             setFormData({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 message: ''
//             });

//             setTimeout(() => setShowSuccess(false), 5000);
//         } catch (error) {
//             setShowError(true);
//             setShowSuccess(false);
//         }
//     };

//     return (
//         <div className="w-full">
//             {/* Subheader */}
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
//                         <h2
//                             className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
//                             style={{
//                                 fontFamily: 'serif',
//                                 letterSpacing: '0.02em',
//                                 opacity: 1,
//                                 color: '#8dcb3f'

//                             }}
//                         >
//                             Get In
//                         </h2>
//                         <h2
//                             className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10"
//                             style={{
//                                 fontFamily: 'serif',
//                                 letterSpacing: '0.01em',
//                                 opacity: 1
//                             }}
//                         >
//                             Touch
//                         </h2>
//                         <nav aria-label="breadcrumb">
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
//                         </nav>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Form */}
//             <section
//                 style={{
//                     background: '#18191b',
//                     backgroundSize: 'cover',
//                     padding: '90px 0'
//                 }}
//             >
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//                         {/* Location */}
//                         <div className="lg:col-span-4 text-white text-center lg:text-left">
//                             <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
//                             <p className="leading-relaxed text-gray-300">
//                                 Collins Street West, Victoria 8007 Australia<br />
//                                 T. (208) 333 9296<br />
//                                 E. contact@baresto.com
//                             </p>
//                         </div>

//                         {/* Form */}
//                         <div className="lg:col-span-8">
//                             <div className="relative z-10">
//                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                                     {/* Left */}
//                                     <div className="space-y-4">
//                                         <div>
//                                             <input
//                                                 type="text"
//                                                 name="name"
//                                                 value={formData.name}
//                                                 onChange={handleChange}
//                                                 className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
//                                                 placeholder="Your Name"
//                                             />
//                                         </div>

//                                         <div>
//                                             <input
//                                                 type="email"
//                                                 name="email"
//                                                 value={formData.email}
//                                                 onChange={handleChange}
//                                                 className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
//                                                 placeholder="Your Email"
//                                             />
//                                         </div>

//                                         <div>
//                                             <input
//                                                 type="tel"
//                                                 name="phone"
//                                                 value={formData.phone}
//                                                 onChange={handleChange}
//                                                 className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
//                                                 placeholder="Your Phone"
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Right */}
//                                     <div>
//                                         <textarea
//                                             name="message"
//                                             value={formData.message}
//                                             onChange={handleChange}
//                                             rows={7}
//                                             className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors resize-none"
//                                             placeholder="Your Message"
//                                         ></textarea>
//                                     </div>
//                                 </div>

//                                 {/* Button */}
//                                 <div className="mt-6">
//                                     <button
//                                         onClick={handleSubmit}
//                                         className="px-8 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 rounded"
//                                         style={{
//                                             background: '#8dcb3f',
//                                             border: 'none',
//                                             cursor: 'pointer'
//                                         }}
//                                         onMouseEnter={(e) => {
//                                             e.currentTarget.style.background = '#bf5a02';
//                                         }}
//                                         onMouseLeave={(e) => {
//                                             e.currentTarget.style.background = '#8dcb3f';
//                                         }}
//                                     >
//                                         Send Message
//                                     </button>
//                                 </div>

//                                 {/* Success */}
//                                 {showSuccess && (
//                                     <div className="mt-6 p-4 bg-green-600/20 border border-green-600 text-green-300 rounded">
//                                         Your message has been sent successfully. Refresh this page if you want to send more messages.
//                                     </div>
//                                 )}

//                                 {/* Error */}
//                                 {showError && (
//                                     <div className="mt-6 p-4 bg-red-600/20 border border-red-600 text-red-300 rounded">
//                                         Sorry there was an error sending your form.
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const icon = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600";
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
export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    // Scroll-based fade effect
    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            console.log('Form submitted:', formData);
            setShowSuccess(true);
            setShowError(false);

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
            setShowError(true);
            setShowSuccess(false);
        }
    };

    return (
        <>
            <style>{`
                @media (prefers-reduced-motion: no-preference) {
                    :root {
                        scroll-behavior: smooth;
                    }
                }
            `}</style>

            <div className="w-full bg-white/5">
                {/* Subheader with Scroll Fade */}
                {/* <section
                    className="relative text-white overflow-hidden min-h-[500px] flex items-center"
                    style={{
                        background: '#222',
                        backgroundImage: `url(${icon})`,
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
                                // style={{
                                //     fontFamily: 'serif',
                                //     letterSpacing: '0.02em',
                                //     color: '#8dcb3f'
                                // }}
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
                                Get In
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
                                Touch
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
                                        Contact
                                    </li>
                                </ol>
                            </nav>
                        </motion.div>
                    </div>
                </section> */}
                <section
                    className="relative text-white overflow-hidden min-h-[500px] flex items-center"
                    style={{
                        background: '#222',
                        backgroundImage: `url(${icon})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed', // added fixed background here
                        padding: '170px 0 80px 0'
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 z-0"></div>
                    <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

        .font-sacramento {
          font-family: "Sacramento", cursive;
        }
      `}</style>

                    <div className="container mx-auto px-4 relative z-10 w-full">
                        <motion.div
                            className="text-center"
                            style={{ opacity: heroOpacity, y: heroY }}
                        >
                            <FadeInWhenVisible>
                                <h2
                                    className="text-6xl text-[#8dcb3f] md:text-7xl lg:text-8xl font-bold mb-4 font-sacramento text-[clamp(40px,6vw,80px)]"

                                >
                                    Get In
                                </h2>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible delay={0.2}>
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
                                    Touch
                                </h2>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible delay={0.4}>
                                <nav aria-label="breadcrumb">
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
                                </nav>
                            </FadeInWhenVisible>
                        </motion.div>
                    </div>
                </section>


                {/* Contact Form */}
                <section
                    style={{
                        background: '#18191b',
                        backgroundSize: 'cover',
                        padding: '90px 0'
                    }}
                >
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="lg:col-span-4 text-white text-center lg:text-left"
                            >
                                <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
                                <p className="leading-relaxed text-gray-300">
                                    Collins Street West, Victoria 8007 Australia<br />
                                    T. (208) 333 9296<br />
                                    E. contact@baresto.com
                                </p>
                            </motion.div>

                            {/* Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="lg:col-span-8"
                            >
                                <div className="relative z-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {/* Left */}
                                        <div className="space-y-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                                                    placeholder="Your Name"
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                                                    placeholder="Your Email"
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                                                    placeholder="Your Phone"
                                                />
                                            </div>
                                        </div>

                                        {/* Right */}
                                        <div>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={7}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors resize-none"
                                                placeholder="Your Message"
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="mt-6"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleSubmit}
                                            className="px-8 py-3 text-white font-semibold transition-all duration-300"
                                            style={{
                                                background: '#8dcb3f',
                                                border: 'none',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = '#e6780aff';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = '#8dcb3f';
                                            }}
                                        >
                                            Send Message
                                        </motion.button>
                                    </motion.div>

                                    {/* Success */}
                                    {showSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-6 p-4 bg-green-600/20 border border-green-600 text-green-300 rounded"
                                        >
                                            Your message has been sent successfully. Refresh this page if you want to send more messages.
                                        </motion.div>
                                    )}

                                    {/* Error */}
                                    {showError && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-6 p-4 bg-red-600/20 border border-red-600 text-red-300 rounded"
                                        >
                                            Sorry there was an error sending your form.
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
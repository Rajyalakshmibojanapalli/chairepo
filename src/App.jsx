import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import About from "./about/About";
import Navbar from "./global/Navbar";
import Footer from "./footer/Footer";
import Dashboard from "./dashboard/Dashboard";
import { useSelector } from "react-redux";
import Login from "./autntication/Login";
import Register from "./autntication/Register";
import MultiStepForm from "./test/MultiStepForm";

const App = () => {
  const isAuthenticated = useSelector(
    (state) => state.authSlice.isAuthenticated
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Login />}
        />
        <Route
          path="/elgibility-test"
          element={isAuthenticated ? <MultiStepForm /> : <Login />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Dashboard /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Dashboard /> : <Register />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// import React from 'react';

// const App = () => {
//   return (
//     <div className="relative w-full h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex justify-center items-center p-6">

//       <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-lg p-10">

//         <div className="absolute top-5 left-0 right-0 flex justify-center">
//           <div className="bg-blue-600 rounded-full p-2 flex items-center justify-center">
//             <span className="text-white text-xs font-bold">INU Choose Overseas Education</span>
//           </div>
//         </div>

//         <div className="flex flex-col items-center justify-center pt-12 pb-6">

//           <div className="text-4xl mb-4">👍</div>

//           <div className="text-center mb-8">
//             <p className="text-gray-500 text-sm uppercase font-medium mb-2">WE'RE STILL</p>
//             <h1 className="text-blue-600 text-4xl font-bold mb-4">Cooking Our Website.</h1>
//             <p className="text-gray-500 text-sm mb-1">We are going to launch our website Very Soon.</p>
//             <p className="text-gray-500 text-sm">Stay Tune.</p>
//           </div>

//         </div>
//       </div>

//       <div className="absolute left-16 bottom-32">
//         <div className="w-10 h-10 rounded-full bg-green-200"></div>
//       </div>
//       <div className="absolute right-16 bottom-32">
//         <div className="w-10 h-5 rotate-45 bg-yellow-400"></div>
//       </div>
//       <div className="absolute right-12 bottom-12">
//         <div className="w-16 h-16 rounded-full bg-orange-400 opacity-80 -rotate-45"></div>
//       </div>
//     </div>
//   );
// };

// export default App;

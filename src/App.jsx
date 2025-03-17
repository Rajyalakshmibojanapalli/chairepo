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

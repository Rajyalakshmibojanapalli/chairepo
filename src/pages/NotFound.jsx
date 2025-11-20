// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center px-4 mt-100px">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-[#8dcb3f] mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#8dcb3f] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
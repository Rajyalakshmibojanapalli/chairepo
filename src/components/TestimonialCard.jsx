
// // src/components/TestimonialCard.jsx
// import React from 'react';

// const TestimonialCard = ({ name, title, testimonial }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex items-center mb-4">
//         <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
//         <div>
//           <h3 className="font-semibold">{name}</h3>
//           <p className="text-gray-600 text-sm">{title}</p>
//         </div>
//       </div>
//       <p className="text-gray-700">
//         "{testimonial}"
//       </p>
//     </div>
//   );
// };

// export default TestimonialCard;


// src/components/TestimonialCard.jsx - Enhanced with animations and styling
import React from 'react';

const TestimonialCard = ({ name, title, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-amber-200 rounded-full mr-4 flex items-center justify-center text-amber-700 font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-amber-600 text-sm">{title}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">
        "{testimonial}"
      </p>
    </div>
  );
};

export default TestimonialCard;
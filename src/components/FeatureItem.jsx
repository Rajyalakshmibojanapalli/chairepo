// // src/components/FeatureItem.jsx
// import React from 'react';

// const FeatureItem = ({ icon, title, description }) => {
//   return (
//     <div className="flex items-start mb-6">
//       <div className="mr-4 bg-green-100 p-3 rounded-full">
//         {icon}
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default FeatureItem;


// src/components/FeatureItem.jsx - Enhanced with animations and better styling
import React from 'react';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start mb-6 p-4 hover:bg-amber-50 rounded-lg transition-colors duration-300 group">
      <div className="mr-4 bg-amber-100 p-3 rounded-full group-hover:bg-amber-200 transition-colors duration-300 shadow-md">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
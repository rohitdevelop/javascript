for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += j;
  }
  console.log(row);
}





















// import React from 'react';

// const GymLoader = () => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-black">

//       {/* Simple Dumbbell Animation */}
//       <div className="flex flex-col items-center">

//         {/* Animated Dumbbell */}
//         <div className="flex items-center space-x-2 animate-pulse mb-8">
//           {/* Left Weight */}
//           <div className="w-5 h-14 bg-red-600 rounded-lg"></div>

//           {/* Bar */}
//           <div className="w-20 h-3 bg-gray-300 rounded-full"></div>

//           {/* Right Weight */}
//           <div className="w-5 h-14 bg-red-600 rounded-lg"></div>
//         </div>

//         {/* Loading Text */}
//         <p className="text-white text-xl font-bold tracking-wider animate-pulse">
//           LOADING...
//         </p>

//         {/* Simple Loading Dots */}
//         <div className="flex space-x-2 mt-4">
//           <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
//           <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce delay-200"></div>
//           <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce delay-400"></div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default GymLoader;

let series = 0;
let time = 0;
let intervalId = null; // store setInterval reference

let plus = document.querySelector('#inc');
let minus = document.querySelector('#dic');
let reset = document.querySelector('#reset');
let start = document.querySelector('#start');
let pause = document.querySelector('#pause');

let count = document.querySelector('.num');
let timer = document.querySelector('.timer');

// Increment series
plus.addEventListener('click', function () {
  series++;
  count.textContent = series;
});

// Decrement series
minus.addEventListener('click', function () {
  if (series > 0) { // avoid negative values
    series--;
    count.textContent = series;
  }
});

// Reset series and timer
reset.addEventListener('click', function () {
  series = 0;
  time = 0;
  clearInterval(intervalId);
  intervalId = null;
  count.textContent = series;
  timer.textContent = time;
});

// Start timer
start.addEventListener('click', function () {
  if (intervalId === null) { // prevent multiple intervals
    intervalId = setInterval(() => {
      time++;
      timer.textContent = time;
    }, 1000);
  }
});

// Pause timer
pause.addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null; // reset so you can start again
});


























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

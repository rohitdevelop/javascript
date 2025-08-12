 

//  lexical scope

function outer() {
    console.log(name);
    function inner () {
        let name = "rohit singh"
    }    
 return inner   

} 
const naam  = outer()
naam()
 

let num = [1,2,3,4,5,6,7,8,9,10]
for (let i = 1; i <= num.length; i++) {
 if (i%2===0) {
    console.log(i,"even"); 
 } else {
    console.log(i,"odd"); 
 }       
} 

function count() {
    let mum = 1
    return function () {
        mum++
        console.log(mum);
    }
}
let incremnet = count()
incremnet()
incremnet()
incremnet()
incremnet()

function string(some) {
     return some.split("").reverse().join('');
}
 console.log(string("rihtu"));
 console.log(string("rohit"));


 function largestnum(large) {
    let digit = large[0]; // Assume first element is largest
    for (let i = 1; i < large.length; i++) {
        if (large[i] > digit) {
            digit = large[i]; // Update if current is greater
        }
    }
    return digit;
}

let src = largestnum([1, 2, 11,16,7,100]);
console.log(src); // 👉 Output: 16













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
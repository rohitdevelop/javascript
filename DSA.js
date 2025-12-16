// function sum(a, b) {
//     return a + b
// }

// const total = sum(5,5)
// console.log(total)

// function greet(name, age) {
//  return `hello ${name} you are ${age} years old.`
// }

// console.log(greet("Shery", 12));

// function swapNumbers(a, b) {
// return [a,b]

// }
// let swap = swapNumbers(10,20)
// console.log(swap.reverse());

// function calculateCompoundInterest(p, r, t, n) {

//     return `A = ${p*(1+r/n)**(n*t)}`
// }

// console.log(calculateCompoundInterest(100,0.5,10,4))

// let num = 45.25521612
// let n = num.toFixed(2)
// console.log(n);

// let num = [1,2,53,4,65,66,7,8,9,10]

// let otp = num[Math.floor(Math.random() * num.length)]
// console.log(otp);

// let num = [1,2,3,4,5,6,7,8,9,0];

// let otp = ""

// for (let i = 0; i < 4; i++) {
//     let ganarateotp = num[Math.floor(Math.random() * num.length)]
//     otp += num[ganarateotp]
// }
// console.log(otp);

// function calculateTriangleArea(a, b, c) {
//     let s = (a + b + c) / 2; // Semi-perimeter
//     return (Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2); // Area calculation
// }

//  console.log(calculateTriangleArea(3,4,5));

// function calculateCircleProperties(r) {
//     let pi = Math.PI
//     let circle1 = 2*pi*r
//     let circle2 = pi*Math.pow((r),2)
//     return {circle1 , circle2}

// }
// console.log(calculateCircleProperties(5.2));

//  function even(num) {
//     if (num % 2 == 0) {
//         console.log("even",num);

//     }
//  }
//  even(5)

// function calculateFinalAmount(amount) {
//     if (amount >= 7001 && amount <= 9000) {
//         return amount * 0.95;  // 5% discount
//     } else if (amount >= 5001 && amount <= 7000) {
//         return amount * 0.90;  // 10% discount
//     } else {
//         return amount; // no discount
//     }
// }

// console.log(calculateFinalAmount(4000)); // 7600

// function calculateElectricityBill(unit) {
//  if (unit < 100) {
//      let price = 4.2;
//       return unit * price;
//  }else if(unit >= 101 && unit <=200){
//      let price = 6;
//       return unit * price;
//  }else if(unit >= 201 && unit <= 400){
//      let price = 8
//       return unit * price
//  }else if(unit < 400){
//      let price = 13
//       return unit * price;
//  }
// }

// console.log(calculateElectricityBill(300));

// function fingreatnum(a ,b ,c) {
//     return Math.max(a,b,c)
// }

// console.log(fingreatnum(5,4,8))

// function maxnumber(a, b, c) {
//   if (a <= b && c <= b) {
//     return b;
//   } else if (b <= a && c <= a) {
//     return a;
//   } else if (a <= c && b <= c) {
//     return c;
//   }
// }
// console.log(maxnumber(600, 450, 850));


// class dayname {
//     constructor(num) {
//      if (num === 1) {
//             console.log("Monday");
//         } else if (num === 2) {
//             console.log("Tuesday");
//         } else if (num === 3) {
//             console.log("Wednesday");
//         } else if (num === 4) {
//             console.log("Thursday");
//         } else if (num === 5) {
//             console.log("Friday");
//         } else if (num === 6) {
//             console.log("Saturday");
//         } else if (num === 7) {
//             console.log("Sunday");
//         } else {
//             console.log("Invalid day number");
//         }
//     }
 

// }
// let week = new dayname(5)
// console.log(week);




class Solution {
    get_movie_status(ratingStr) {
 const movie = ratingStr(0.0 <= 5.0)
 
 if (movie >= 2.0) {
     console.log("flop");
 }else if(2.0 >= 3.4){
     console.log("semi-hit");
     }else if(3.5 >= 4.5){
         console.log("hit");
     }else if(4.6 >= 5.0){
         console.log("super hit")
     }
}
}

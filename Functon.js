// notes. Difference between split("") vs split(" ")
// ✅ split("") → Split into characters ["r", "o", "h", "i", "t"]

// ✅ split(" ") → Split into words (space-separated) ["rohit", "singh"]

// function reverse(str) {
//     let name = str.split("").reverse().join("");
//     return name
// }

// console.log(reverse("rohit"));

// number is even or odd

// let user = prompt("write a number  1 to 100");
// function guessnumber() {
//   if (user % 2 === 0) {
//     console.log(user, "this is a even number");
//   } else {
//     console.log(user, "this is a ood number");
//   }
// }
// guessnumber()

// fuctorial in function
// function factorial(num) {
//     let result = 1
//   for (let i = 1; i <= num; i++) {
//      result *= i; // same as result = result * i
//    }
//   return result
// }
// console.log(factorial(5));

// type of functions are
// Function Declaration, Function Expression, Arrow Function, Anonymous Function, Immediately Invoked Function Expression (IIFE), Recursive Function, Higher-Order Function, Callback Function, Constructor Function, Generator Function.

// What is the difference between a function declaration and a function expression in JavaScript?
//Why does sum work before declaration but mul doesn’t?

// console.log(sum(2,3)); // works
// function sum(a, b) {
//   return a + b;
// }//beacuse in that proper function and when you call the function anywher it will works

// console.log(mul(2,3)); // ❌ error
// const mul = function(a, b) {
//   return a * b;
// };// and in tise case ther is diclare as a value in the const variable that way error come before insialisation

// normal and arrowFunction
// const obj = {
//   value: 10,
//   normalFunc: function() {
//     console.log(this.value);
//   },//noraml function that can acces the global scop
//   arrowFunc: () => {
//     console.log(this.value);
//   }//and the arrow function not becuz or lexical scop
// };
// obj.normalFunc(); // ?
// obj.arrowFunc();  // ?
// // why output are diffrent

// max number in function
// function largest(num) {
//   let large = num[0];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > large) {
//       large = num[i];
//     }
//   }
//   return large;
// }
// console.log(largest([4, 55, 8, 75, 85, 65, 2]));

// let num = [1,2,3,4,5,6,7,8,9,10]
// function pexample() {
//   let multi = num.map((n)=>n * 2)
//   return multi;
// }

// console.log(pexample());

// const obj = {
//   a:1,
//   b:2,
//   c:3,
//   d:4,
// }

// Object.entries(obj).map(([key,value])=>{
// console.log(`${key} => ${value * 2}`);

// })
// console.log(Object.entries(obj);

// function sumnumder(rest) {
//   let number = rest.reduce((a,v)=>{
//     return a+v
//   },0)
//   return number
// }

// console.log(sumnumder([45,5,5,8,10,60]));

// function factorial() {
//      let user = prompt("write a number to see factorial")
//     let result  = 1
//     for (let i  = 1; i  <= user; i++) {

//          result *= i

//     }
//     return result
//  }
//  console.log(factorial())

// src quetions easy level..........................................................

// function ultimate(...num) {
//  let sum = 0
//   num.forEach( val => {
//  sum += val
//   });
//   return sum
// }
// console.log(ultimate(4, 5, 8, 9, 10, 5));

// const rohit =  function (){
//   let fun = "rohit"
//   return fun
// }
//  console.log(rohit ()); //rohit

// function adds(...num) {
//     return    num.reduce((acc, val) => {
//     let sum = acc + val;
//     return sum;
//   },10);
// }

// console.log(adds(5,5,5));

// let age = 20;
// let info = "rohit singh";
// function outerfunction() {
//     function innerfunction() {
//         console.log(info);
//         let deeperfunction = () => {
//             console.log(age);
//         };
//         deeperfunction();
//     }
//     innerfunction();
// }

// outerfunction();

// 1
// let frutes = ["banana", "mango", "pineapple", "apple", "lichi"];
// function fruitsname( ) {
// //  let add = frutes.push("puu")
// //  console.log(frutes);
// //  return add
// let remove = frutes.shift()

// return remove

// }

//  console.log(fruitsname());

// 2

// for (let i = 1; i < frutes.length; i++) {
//     let frute =frutes[i]
//    console.log("fal : ",frute);
//   for (let j = 0; j < frute.length; j++) {
// console.log(frute[j]);

// }
// console.log("---------");

// }

// let detailas = {
//     name: "rohit",
//     age : 20,
//     city : "delhi"
// }

//  for (const i in detailas) {

//     const element = detailas[i];

//     console.log(element);

//  }

// for (let i = 1; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//     if (i === 10) {
//       console.log("times is up");
      
//     }
//   }, i * 1000);
// }

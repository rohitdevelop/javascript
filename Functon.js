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


const obj = {
  a:1,
  b:2,
  c:3,
  d:4,
}

Object.entries(obj).map(([key,value])=>{
console.log(`${key} => ${value * 2}`);

})
// console.log(Object.entries(obj);

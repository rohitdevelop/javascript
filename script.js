//what is the Hosting

//  hosit is like whne you declaration in a top of the vairavel like let var const and function also that is called hosting if the declaration in the top like

// console.log(a); //undefive
//  var a = "rhoti"

//  console.log(b);//  Cannot access 'b' before initialization
//  let b = "singh"

// the correct way to declaration is after puting the value we can declare the
// let a = "rohit singh"

// console.log(a);
// box1();
// console.log(box2());

// function box1() {
//   let a = "coder";
//   console.log(a);

// }
//   function box2() {
//     let b = "coder2";
//     return b;
//   }

//  what is the localstorage , sessionsstorage , cokkies

// localstorage == is the storre a deta in browser jab hi delete hoga jab user delete karega
// localStorage.setItem("name", "rohit")
// sessionsstorage == tab band deta khatam temperrorly store
// sessionsStorage.setItem("name", "rohit")
// cookies == its save you deta called cookis properties and ye kam deta ya light deta in 4kd ke liye hota hai 
// document.cookie = 'rohti123@gmial.com'




// what is the thie() key word and thire uses in js 

// refer to anything 
 
 
//  const person = {
//   name: "Rohit singh",
//   greet: function () {
//     console.log(`my name is ${this.name}`);
//   },
// };

// person.greet(); // "Rohit"


// event capturing and event bubbling
 
//  document.getElementById("outer").addEventListener("click", function () {
//         console.log("Outer DIV clicked");
//       },true);

//       document.getElementById("inner").addEventListener("click", function () {
//         console.log("Inner DIV clicked");
//       },true);

 
// what is the "use strict" in js
// x = 10; // ❌ This creates a global variable (even without let/var/const)
// console.log(x); // 10


"use strict";
x = 10; // ❌ Error: x is not defined
console.log(x);

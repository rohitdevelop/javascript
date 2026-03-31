//.................................... Function Expression

// 👉 Jab hum function ko kisi variable ke andar store kar dete hain, use function expression kehte hain.


let dec = function () {
    console.log("hello");
}
dec()


// ..................................Function Declaration – Definition


// 👉 Function Declaration ka matlab hota hai function ko direct function keyword ke saath define karna, jisme function ka proper naam hota hai.

function abc( ) {
    console.log("hello");
}
abc()


// ....................................What is Template Literals (JavaScript)

// 👉 Template literals are a modern JavaScript feature (ES6) used to create strings easily with variables, expressions, and multi-line text.


// console.log(`hello 2 + 2 = ${2+2}`);



// 🔹.................................... Primitive Data Types

// 👉 Primitive data types wo hote hain jo single value store karte hain aur immutable hote hain (direct change nahi hote).

// Primitive Types:

// String – text

// Number – numbers

// Boolean – true / false

// Undefined – value assign nahi

// Null – empty value

// Symbol – unique value

// BigInt – large integers

// 🔹.................................... Non-Primitive Data Types
// 👉 Non-Primitive data types wo hote hain jo multiple values store kar sakte hain aur mutable hote hain.

// array , object and functions


// Type           |  	Behavior
// Primitive	  |    Copy by value
// Non-Primitive  |Copy by reference
// 2️⃣ .........................................every()

// 👉 Tests whether all elements pass a condition. Returns true or false.


// let numbers =[1,2,3,4,5,6,7,8,9,10]

// let fund = numbers.reduce((pre, curr )=> pre + curr, 1)
// console.log(fund); //only one number

// 🔹.................................... Deep Comparison

// 👉 Deep comparison objects ke andar ke values ko bhi compare karta hai.



// 🔹................................ Shallow Comparison

// 👉 Shallow comparison sirf reference (memory address) check karta hai, andar ke data ko nahi.
// let a = { name: "Rohit" };
// let b = { name: "Rohiit" };
// // let b = { num : 45};

// console.log(JSON.stringify(a)); // true

console.log(![]);

// if ( null) {
//     console.log("present");
    
// } else {
//     console.log("absent");
    
// }


// let str = "rohit"

// let reverse = ''
//  for (let i = 5; i < str.length; i--) {
//    reverse =  reverse + str[i] 
//  }

// console.log(reverse);



// a=3;
// console.log(a);
// // var a = 2;

// console.log( typeof(null));



// const a = {}
// a.key = "akash"
// const b = a

// b.key = "sum" 
// console.log(a);  


// let a = {}
// a.key = "akash"
// let b = {...a}

// b.key = "sum" 
// console.log(a.key);  


// let num = [1,23,45,6,4,6,10]

// let result = num.find((val)=> {
//     if (val > 10) {
//          return val
//     }
// })

// console.log(result);



// const kjbhl = 45
//  kjbhl = 5
// // var kjbhl = 45

// console.log(kjbhl);
 
// let num = 2

// switch (num) {
//     case 1:
//         console.log("hello one");
        
//         break;
//     case 2:
//         console.log("hello tow");
        
//         break;
//     case 3:
//         console.log("hello three");
        
//         break;
//     case 4:
//         console.log("hello four");
        
//         break;
//     case 5:
//         console.log("hello five");
        
//         break;
//     default:
//         break;
// }


// -------------------------------------------------------------------------
// what is the promises 
// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.”
// 🎯 Key Points
// Handles asynchronous code
// Avoids callback hell ❌
// Cleaner code with async/await ✔️
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
// what is the DOM
// “The DOM (Document Object Model) is a tree-like structure of HTML elements that allows JavaScript to access and manipulate web page content dynamically.”
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
// 🎯 Interview Answer (Perfect)

// “Imperative programming focuses on how to perform tasks step by step, while declarative programming focuses on what the desired outcome is without specifying the exact steps.”

// 🔥 Pro Tip (Important)

// 👉 React = Declarative
// 👉 JavaScript DOM = Imperative
// -------------------------------------------------------------------------
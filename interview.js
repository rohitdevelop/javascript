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

// console.log(![]);

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



// a=2;
// console.log(a);
// var a = 2;

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

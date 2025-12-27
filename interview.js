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

 
// closers questions

// function getcounte() {
//   let num = 0;

//   let cunter = () => {
//     return num++;
//   };

//   return cunter;
// }

// const counting = getcounte();

// console.log(counting()); // 0
// console.log(counting()); // 1

// function sayHi() {
//   return "Hi";
// }

// console.log(sayHi); // [Function: sayHi]
// console.log(sayHi()); // "Hi"

// Closure JavaScript ka ek feature hai jisme ek function apne outer function ke variables ko yaad rakhta hai, even jab outer function execute hokar khatam ho chuka ho. Matlab inner function ke paas outer scope ke variables ka access rehta hai aur wo unki value ko use ya update kar sakta hai.

// 2 hoisting

// console.log(num);

// var num = 12; //undefine

// nramal fun
// console.log(name("rohit")); // rohit

// function name(params) {
//   return params;
// }

// fun exprestion

// console.log(fullname("rohit")); // before intialisation becues it is in a variable

// let fullname = (src) => {
//   return src;
// };

// "Hoisting JavaScript ka behavior hai jisme variable aur function declarations execution se pehle memory me move ho jaati hain. var ko undefined ke saath hoist kiya jata hai, let aur const TDZ me rehte hain, aur function declarations poori tarah hoist ho jaati hain." ✅

// 3 scope



// let age = 21; // global

// function scope() {
//   let nume = "rohit"; // fun scope

//   function scope2(params) {
//     let address = "delhi"; // fun scope
    
//     console.log(address); // delhi
//     console.log(nume); //nume is not defined
//   console.log(age); //age is not defined
//   }

//   console.log(nume);// rohit
//   console.log(address); //address is not defined
//   console.log(age); //age is not defined
  
// }


// console.log(age); //21

// scope()
// console.log(address);  //address is not defined
// console.log(nume); //nume is not defined



// Scope{} ka matlab hai kisi variable ko code ke kis area se access kiya ja sakta hai. Agar variable kisi scope ke bahar hai, to usse access nahi kar sakte.


// Event loop 

// to perform asyncronas task that we called event loops

// exmple 

// console.log("hello");

// setTimeout(() => {
//   console.log("kaise ho");
  
// }, 1000);

// console.log("batoa?");

// // Promise
 

// let fun = new Promise((res,rej)=>{
  

//   let num = 5

//   if (num % 2 === 0) {
//     res()
//   } else {
//    rej()    
//   }
// })


// fun.then(()=>{
// console.log("very good");

// }).catch(()=>{
  
//   console.log("not very good");
// })

// The historical alternative is Callbacks. Modern JavaScript also uses async/await, but it's not a replacement—it's syntactic sugar over Promises. Under the hood, async/await still uses Promises.

// So remember:

// ✅ Callback → Older approach (alternative before Promises)
// ✅ Promise → Better async handling
// ✅ Async/Await → Cleaner way to write Promise-based code

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// let plus = numbers.reduce((acc,crr)=>{
//   return acc + crr 
// })

// console.log(numbers);
// console.log(plus);


// Debounce: "Debouncing delays the execution of a function until a specified time has passed since the last event."
// Throttle: "Throttling limits the execution of a function so that it runs at most once during a specified time interval."
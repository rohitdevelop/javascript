console.log("hello");

// closers questions

function getcounte(){
    let num = 0;

    let cunter = () => {
       return num++
    } 

    return cunter
}

const counting = getcounte()

console.log(counting()); // 0
console.log(counting()); // 1

 function sayHi() {
    return "Hi";
}

console.log(sayHi);   // [Function: sayHi]
console.log(sayHi()); // "Hi"


// Closure JavaScript ka ek feature hai jisme ek function apne outer function ke variables ko yaad rakhta hai, even jab outer function execute hokar khatam ho chuka ho. Matlab inner function ke paas outer scope ke variables ka access rehta hai aur wo unki value ko use ya update kar sakta hai.


// 2 hoisting

console.log(num);

var num = 12 //undefine

// nramal fun
console.log(name("rohit")); // rohit

function name(params) {
    return params
}

// fun exprestion

console.log(fullname("rohit")); // before intialisation becues it is in a variable

let fullname = (src) =>{
    return src
}
 
// "Hoisting JavaScript ka behavior hai jisme variable aur function declarations execution se pehle memory me move ho jaati hain. var ko undefined ke saath hoist kiya jata hai, let aur const TDZ me rehte hain, aur function declarations poori tarah hoist ho jaati hain." ✅





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





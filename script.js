//  lexical scope

function outer() {
    let name = "rohit singh"
    function inner () {
        console.log(name);
    }
 return inner

}
const naam  = outer()
naam()
 

let num = [1,2,3,4,5,6,7,8,9,10]
for (let i = 1; i <= num.length; i++) {
 if (i%2===0) {
    console.log(i,"even");
 } else {
    console.log(i,"odd");
 }    
}


function count() {
    let mum = 1
    return function () {
        mum++
        console.log(mum);
    }
}
let incremnet = count()
incremnet()
incremnet()
incremnet()
incremnet()

function string(some) {
     return some.split("").reverse().join('');
}
 console.log(string("rihtu"));
 console.log(string("rohit"));


 function largestnum(large) {
    let digit = large[0]; // Assume first element is largest
    for (let i = 1; i < large.length; i++) {
        if (large[i] > digit) {
            digit = large[i]; // Update if current is greater
        }
    }
    return digit;
}

let src = largestnum([1, 2, 11,16,7,100]);
console.log(src); // 👉 Output: 16



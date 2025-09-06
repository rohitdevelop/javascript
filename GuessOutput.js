// console.log([] + {});//  {object  object}
// console.log({} + []);//  {object object}
// console.log([] + []);// {object}
// console.log({} + {});//  {object}
 
// var a = [1, 2, 3];
// var b = [1, 2, 3];
// console.log(a === b);//true
// console.log(a === b);//true
// console.log(a.toString() === b.toString());//true


// console.log(typeof NaN);//object
// console.log(NaN === NaN);//true
// console.log(Object.is(NaN, NaN));//


// let obj = {
//   a: 10,
//   getA: function () {
//     return this.a;
//   }
// };

// let fn = obj.getA;
// console.log(fn()); //undefine
// console.log(obj.getA()); //10


// async function test() {
//   return 1;
// }
// console.log(test());//error();


// test().then(res => console.log(res));//1


// const a ={};
// const b ={key: "b"};
// const c = {key: "c"};

// a[b] = 123;// bacuz a[object,object]
// a[c] = 456;// or ye overlap ho ja rha hai
// console.log(a[b]);//456


// console.log(false == []); // true
// console.log(false === ![]); // true

// let interview = 1 - "2"
// let interview = 1 - - "2"
// let interview = 1 - +"2"
// let interview = 1 + +"2"
// console.log(interview);


console.log(0 == false);// true
console.log(0 === false);// false


let obj1 = { name: "Rohit", info:{age: 42}};
let obj2 = obj1;
obj2.info.age = 21;

console.log(obj1.info.age);// chnaged 


function test() {
  const x = 10;
  if (true) {
    const x = 20;
    console.log(x);
  }
return x 
}
test();




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


// console.log(0 == false);// true
// console.log(0 === false);// false


// let obj1 = { name: "Rohit", info:{age: 42}};
// let obj2 = obj1;
// obj2.info.age = 21;

// console.log(obj1.info.age);// chnaged 


// function test() {
//   const x = 10;
//   if (true) {
//     const x = 20;
//     console.log(x);
//   }
// return x 
// }
// test();



// lets go.............


// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// for (let  i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
 


// console.log(foo());//hello
// function foo() { return "Hello"; }
// console.log(bar());//error
// let  bar = function() { return "World"; }

// code 1
// const obj = {
//   a: 10,
//   arrow: () => console.log(this.a),
//   regular: function() { console.log(this.a); }
// };

// let fun = obj.arrow();// undefine
// let fun2 = obj.regular();// 10


// console.log(fun,fun2) ; // undefine


// // code 1
// console.log("Start");

// setTimeout(() => console.log("Timeout 1"), 0);
// Promise.resolve().then(() => console.log("Promise 1"));

// console.log("End");

// for (let i = 1; i <=  5; i++) { 
//     let str = ' '
//     for (let j = 1; j <=  i; j++) {
//           str += j
//     }
// console.log(str);

// }


// function abc(a,b) {
//     if (b>a) {
//         console.log("b is large");
//     }else{
//         console.log("a is large");
//     }
//     return a+b;
// }

// console.log(abc(4,1));// a is large
// // 5
// console.log(abc(1,4));// b is large
// // 5

// function abc(a, c, ...b) {
//     return [ ...b,...a, c];
// }

// console.log(abc([1,2], 3, 4));


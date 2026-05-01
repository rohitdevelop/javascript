// console.log(typeof([] + []));//  {object  object}
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
// console.log(0.1 + 0.2 === 0.3); //false becuz js run floating points number

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

//  function abc( ) {
//      console.log( 100 +200)
//  }

//  var abc
//  console.log(abc());

//  var a = "10"
//  var b = "hello"
//  var a = 10

// console.log(a+b);

// console.log(typeof typeof 10);

// let num = parseInt("54.5",1)
// console.log(num);

// console.log(parseInt("A1000"));
// console.log(parseInt("1000A"));

//  console.log([100,200,300].map((elem)=>{
//      if(elem > 90){
//           elem + 10
//         return elem + 10
//     }
//  }))

// const arr = [1, 2, 3, 4, 5];

// const result = arr.filter((num) => num % 2 === 0).map(num => num * 2 );

// console.log(result);

// const obj = {
//     a: 1,
//     b: 2
// }

// let name = '"rohit"'
// console.log(name);

// console.log(JSON.parse(name));

// let a = {name: "rohit"}
// let b = {name: "rohit" , hgf:545}

// const result = {...a , ...b};

// console.log(result);

// let num = [1,2,3,4]

//  const result = num.reduce((acc, val) => {
//   console.log("acc:", acc);
//   console.log("val:", val);

//   return acc + val; // ✅ important
// }, 0);

// console.log(result); // 10

// function mapmethod() {
//     let result = num.map((val)=> val > 2)
//     return result
// }

// console.log(mapmethod());

// let v = {
//   model: "5x",
//   compony: "tata",
// };

// let v2 = v;

// v2.model = "8x";
// console.log(v); // 8x
// console.log(v2);// 8x


// "ROHIT" to "rohit"


function lowercase(src) {
  return src.toLowerCase()
}

console.log(lowercase("ROHIT"));


let latter = "rohit"

let result  =  latter.toLowerCase()

console.log(result);

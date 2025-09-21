// let object = {
//   name: "rohit singh",
//   number: 454545,
//   email: "rohit@gmail",
//   person: {
//     father: "triloki",
//     mathoer: "savita",
//   },
// };
// console.log(object.person);

//1
// let stundent = {
//     name: "rohit singh",
//     age:20,
//     cousrse:"bca"
// }
// //2
// let update = stundent.cousrse = "mca"
// // console.log(stundent);
// //3
// let add = stundent.grade=45
// console.log(stundent);
// let delet = delete stundent.age
// console.log(delet);

// is aplicable to do vote or not

// let username = prompt("write a name");
// let age = prompt("write a age");
// let email = prompt("write a email");

// console.log(`name: ${username} 
//              userage: ${age}
//              email:${email}`);


//              if (age <= 18 ) {
//                 console.log("pagal sale nikal");
                
//             } else {
//                 console.log("pagal sale aaja");
                
//              }



// let nums = [10, 5, 20, 1];
// nums.large((a, b) => a + b);
// console.log(nums); // [1, 5, 10, 20]



// console.log(Object.entries(obj)); // [["a",1],["b",2],["c",3]]
// let arr = [["x", 10], ["y", 20]];
// console.log(Object.fromEntries(arr)); // {x:10, y:20}


// let target = {a:1};
// let source = {b:2, c:3};
// Object.assign(target, source);
// console.log(target); // {a:1, b:2, c:3}


// let obj3 = {a:1};
// Object.seal(obj3);
// obj3.a = 99;     // ✅ allowed
// obj3.b = 100;    // ❌ not allowed
// console.log(obj3); // {a:99}


// // we frea also

// let num1 = [1,2,3,4,5]
// let num2 = [6,7,8,9,10]

// console.log(...num1 , ...num2);
let num1 = [1,2,3,4,5]
let num2 = [6,7,8,9,10]

console.log(num1.concat(num2));

// const person = {
//   name: "Rohit",
//   age: 19,
//   greet: function () {
//     console.log(`Hello, my name is `, name);
//   },
// };

// person.greet(); // Hello, my name is Rohit

// function outer() {
//   let obj = {
//     naem: "rohit singh",
//     age: 20,
//     greet: function (name) {
//       console.log(obj);
//       console.log(`my name is ${this.naem} i am ${this.age} old`);
//       console.log("hello" , name);
//     },
//   };
//   obj.greet("rohit ");
// }
// outer();

// class person {
//     constructor(name ,age , city) {
//  this.name= name,
//  this.age =age,
//  this.city =city
//     }

//       greet() {
//         console.log(`hy my name is ${this.name} and address is ${this.city} and i am ${this.age} old`);

//     }
// }
// const user1 = new person("rohit",20,"delhi")
// // greet(user1)
// user1.greet()

// class person {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }

//   greet() {
//     console.log(`name is ${this.name} age is ${(this.age)}`);
//   }
// }

// class student extends person {
//   constructor(name , age , cource, city) {
//       super(name, age);
//     (this.cource = cource), (this.city = city);
//   }

//   study() {
//     console.log(`my course is ${this.cource} my address is ${this.city}`);
//   }
// }

// const user1 = new person("rohit", 20);
// user1.greet();
// const student1 = new student("aman",20 , "bca", "noida");
// student1.greet()
//  student1.study();

// class person {
//   constructor(name, age, address) {
//     (this.name = name), (this.age = age), (this.address = address);
//   }

// }

// let person1 = new person("rohit" , 20 , "delhi");
// console.log(person1);

// class Bottel{
//   constructor(){
//     this.color = "blue"
//     this.matrial = "plastic"
//     this.price = 1000
//   }
//   fill(){}
//   drink(){}
// }

// let Bottel1 = new Bottel()
// let Bottel2 = new Bottel()
// console.log(Bottel2);

// class Sketch {
//   constructor() {
//     this.character = "doremon"
//     this.color = "blue"
//    this.somefun = function () {};
//   }

// }
// Sketch.prototype.speak = function(){}
// Sketch.prototype.walk = function(){}

// let person = new Sketch()
// console.log(person);

// console.log(Math.PI);

// console.log(this);  // Global object (window in browser)

// function abcd() {
//   console.log(this);  // depends on how function is called
// }

// let efg = () => {
//   console.log(this);  // arrow function ka this lexical hota hai
// };

// let obje = {
//   fun: function abdc() {
//     let arr = () => {
//       console.log(this);  // parent (obje) inherit karega
//     };

//     console.log(this);  // obje
//     arr();              // obje
//   }
// };

// // Correct function call
// abcd();
// efg();
// obje.fun();

// let objt = {
//   fun: function () {
//     console.log(this);
    
//   }
// }
// console.log(objt.fun);


let obj = {
  name: "rohit",
}
function abdc() {
  console.log(this);
  
}
abdc.call(obj)
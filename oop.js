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

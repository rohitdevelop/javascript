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

// let obj = {
//   name: "rohit",
// }
// function abdc() {
//   console.log(this);

// }
// abdc.call(obj)

// class animal {
//   constructor() {
//     this._age = 20;
//   }
//   set age(val) {
//     if (val < 0) {
//       console.log("something wring");
//       return;
//     } else {
//       this._age = 20;
//       return this._age;
//     }
//   }

//   get age() {
//     return this._age;
//   }
// }

// let p1 = new animal();
// console.log(p1);

// p1.age = 37;
// console.log(p1.age);



// let product = {
//     name: "shoes",
//     price: 10000,

//     discounted: function () {
//         return this.price - 200
//     }

// }
// console.log(product.discounted());


// let Laptop = {
//     brand: "Omen",
//     price: 30000,
//     welcome: ()=>{
//    return "Laptop started";
   
//     },
//     priceupdate: ()=>{
//    return this.price = 40000;
   
//     }
// }

// console.log(Laptop.price);

// class Laptop {
//     constructor(brand,price){
//         this.brand = brand;
//         this.price = price;
//     }
//     welcome(){
//         return "laptop starated";
        
//     }
//     priceupdate(){
//         return this.price + 1000
//     }
// }


// let product = new Laptop("omen", 30000)
// console.log(product.priceupdate());



// let Employee1 = {
//     name: "rohti",
//     salary : 15000,
//     Showdetals: ()=>{
//         return `the name of employe is ${this.name}and salary is ${this.salary}`
//     }
// }
// let Employee2 = {
//     name: "rohti",
//     salary : 15000,
//     Showdetals: ()=>{
//         return `the name of employe is ${this.name}and salary is ${this.salary}`
//     }
// }
// let Employee3 = {
//     name: "rohti",
//     salary : 15000,
//     Showdetals: ()=>{
//         return `the name of employe is ${this.name}and salary is ${this.salary}`
//     }
// }


// class BankAccount {
//     constructor(name, balance) {
//         this.name = name
//         this.balance = balance
//     }
//     amount() {
//         return this.balance+1
//     }

// }

// let user = new BankAccount("rohit",400)


// ..............................1........................
// let objprofile ={
//     username: "rohit singh",
//     printname (){
//         console.log(this.username);
//     }
// }
// objprofile.printname();

// // ..............................2........................
// class claaprofile {
//     constructor(name) {
//         this.name = name
//      }
//     printname() {
//     console.log(this.name)
//     }
// }
//     let user = new claaprofile("rohit")
//     user.printname();


// function Vehicle(type, wheels) {
//   this.type = type;
//   this.wheels = wheels;
// }

// // Method added on PROTOTYPE (Recommended)
// Vehicle.prototype.describe = function () {
//   console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
// };

// let car = new Vehicle("Car", 4);
// let bike = new Vehicle("Bike", 2);

// console.log(car);
// bike.describe();


// let obj1 = { brand: "Apple" };
// let obj2 = { brand: "Samsung" };
// function showBrand() {
//   console.log(this.brand);
// }

//  showBrand.call(obj1)
//  showBrand.call(obj2)

// function greet( ) {
//   console.log(this.name);
// }

// let user = { name: "Rohit" ,};

// greet(user); 
// // Output: Hello Rohit

// function add(a, b, c) {
//   console.log(this.label, a + b + c);
// }

// let obj = { label: "Total:" };

// add.apply(obj, [10, 20, 30]); 
// // Output: Total: 60


// function show() {
//   console.log("Brand:", this.brand);
// }

// let mobile = { brand: "Samsung" };

// let newFn = show.bind(mobile);

// newFn(); 
// Output: Brand: Samsung

// let para = document.querySelector("p");
// let character = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
// let text = para.innerText;
// para.addEventListener("mouseenter", () => {
//   const later = setInterval(() => {
//     let str = text
//       .split("")
//       .map((e) => {
//         return character.split("")[Math.floor(Math.random() * 53)];
//       })
//       .join();



//     para.innerText = str;
  
//     console.log(str);
//   }, 10);

//   setTimeout(() => {
//     clearInterval(later);
//    const ptag =  para.innerText = "WELCOME TO HAVEN BABY"
//     if (ptag === character) {
//           para.innerText = str;

//     }
//   }, 300);
// });


// let para = document.querySelector("p");
// let character = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
// let text = para.innerText;
// let iteration = 0;

//    function randomtext() {
    
//     let str = text
//     .split("")
//     .map((char, index) => {
//       if (index < iteration) {
//         return char; // Show correct letter
//       }
//       return character.split('')[Math.floor(Math.random() * 52)]; // Random letter
//     })
//     .join(""); // Fixed: removed the comma, should be empty string
    
//     para.innerText = str;
    
    
//     iteration += 0.2; 
    
//   }
//   setInterval(randomtext,30)
 
// map return a array but in foreach does not return anything thats the diffrece 
 


//  class persone {
//     constructor(){
//         this.name = "rohit"
//         this .age = 45
//     }

//     greet (){
//         console.log(`my nmae is ${this.name} and i am ${this.age} old`);
        
//     }
//  }

//  let create = new persone()

//  console.log(create.greet());
 
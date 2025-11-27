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


let para = document.querySelector("p");
let character = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
let text = para.innerText;

para.addEventListener("mouseenter", () => {
  let iteration = 0;
  
  const later = setInterval(() => {
    let str = text
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return text[index]; // Show correct letter
        }
        return character[Math.floor(Math.random() * character.length)]; // Random letter
      })
      .join(""); // Fixed: removed the comma, should be empty string

    para.innerText = str;
    
    if (iteration >= text.length) {
      clearInterval(later);
    }
    
    iteration += 1 / 3; // Adjust speed of reveal
  }, 30);
});
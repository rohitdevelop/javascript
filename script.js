//what is the Hosting

//  hosit is like whne you declaration in a top of the vairavel like let var const and function also that is called hosting if the declaration in the top like

// console.log(a); //undefive
//  var a = "rhoti"

//  console.log(b);//  Cannot access 'b' before initialization
//  let b = "singh"

// the correct way to declaration is after puting the value we can declare the
// let a = "rohit singh"

// console.log(a);
// box1();
// console.log(box2());

// function box1() {
//   let a = "coder";
//   console.log(a);

// }
//   function box2() {
//     let b = "coder2";
//     return b;
//   }

//  what is the localstorage , sessionsstorage , cokkies

// localstorage == is the storre a deta in browser jab hi delete hoga jab user delete karega
// localStorage.setItem("name", "rohit")
// sessionsstorage == tab band deta khatam temperrorly store
// sessionsStorage.setItem("name", "rohit")
// cookies == its save you deta called cookis properties and ye kam deta ya light deta in 4kd ke liye hota hai 
// document.cookie = 'rohti123@gmial.com'




// what is the thie() key word and thire uses in js 

// refer to anything 

let num = [1,2,3,4,5,6,7,8,9,10]

for (let i = 1; i <= num.length; i++) {
 setTimeout(() => {
   if (i%2===0) {
    console.log(i,'even');
   }else{
    console.log(i,'odd');
   }
 },i * 1000);
}
 
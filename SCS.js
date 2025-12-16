// function backendfun(username, cd) {
//     //logic
//     setTimeout(() => {

//         cd({id:1,username: "rohit", age:20})
//     }, 2000);
// }

// backendfun("papu",function(data){
// console.log(data);

// })

// function afterdelay(cd) {
//   setTimeout(() => {
//     cd();
//   }, 1000);
// }

// afterdelay(function () {
//     console.log("hello fun");

// })

// function getuser(username,cb) {
//     let name = "ekjdfg"
//     setTimeout(() => {
//          cb({id:1,username:"rohit"})
//     }, 1000);
//     return name
// }

//  let person = getuser("rohit",function (data) {
//   function getuserposts() {
//     return data.id;//1
//   }
//   getuserposts()
// })

// console.log(person);//undefine

// function loginuser(username, cb) {
//   console.log("loading.....");

//   setTimeout(() => {
//     cb({ id: 1, username: "rohit" });
//   }, 1000);
// }
// function fecthperimision(id, cb) {
//   console.log("loading.....");
//   setTimeout(() => {
//     cb(["call", "read", "write"]);
//   }, 2000);
// }
// function ladhasboard(permission, cb) {
//   console.log("loading.....");
//   setTimeout(() => {
//     cb();
//   }, 2000);
// }

// loginuser("rohit", function (data) {
//   fecthperimision(data.id, function (fecthdeta) {
//     ladhasboard(fecthdeta, function () {
//       console.log("permission aded");
//       console.log(fecthdeta);
//     });
//   });
// });
// let api = `bfc49e2b86ccf11a37a27d809c55f88c`;

// async function getWeather(city) {
//   try {
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

//     let raw = await fetch(url);
//     let data = await raw.json();

//     if (!raw.ok) {
//         throw new Error("nhi....................");

//     }

//     console.log("Weather Data:", data);
//   } catch (error) {
//     console.log("Fetch error:", error);
//   }
// }

// getWeather("Delhi");

// let userEmails = [
//   "rohit@45.com",
//   "aman@45.com",
//   "khushi@45.com",
//   "ranveer@45.com",
//   "rohitsingh@45female.com",
// ];

// function sendEmail(email) {
//   return new Promise((resolve, reject) => {
//     let randomTime = Math.floor(Math.random() * 5); // 0-4 seconds
 
//     setTimeout(() => {
//       let probability = Math.floor(Math.random() * 10);
//       if (probability <= 5) {
//          resolve(`Email to ${email} done`);
//       } else {
//          reject(`Email to ${email} not done`);
//       }
//     }, randomTime * 1000);
//   });
// }

// async function sendEmails(userlist) {
//    let allPromises = userlist.map((email) =>
//     sendEmail(email).catch((err) => err)
//   );

//    let results = await Promise.all(allPromises);

//   console.log("All results:", results);
// }

// sendEmails(userEmails);


// debounsing and trottling

// ...........................debounce......................................
// function debounce(fun , dealy) {
//     let timer;
//     return function () {
//         clearTimeout(timer)
//         timer = setTimeout(fun, dealy)
    
//     }
// }

// document.querySelector("#select").addEventListener('input',debounce(function () {
//     console.log("chala");
    
// },3000))



// ...........................trottling......................................


// function trottling(fun , dealy) {
//     let last = 0;
//     return function () {
//     const now = Date.now();
//     if (now - last >= dealy) {
//         last = now;
//     fun();
//     }
     
//     }
// }

// window.addEventListener('mousemove',trottling(function (e) {
//  console.log("hello");
    
// },2000)
// )
 
 
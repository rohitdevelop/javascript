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





// promis syntax

// let promis = new Promise((res,rej)=>{
//     let success = false

//     if (success) {
//         res("all is done")
//     } else {
//         rej("all is fail")
//     }
// })
// console.log(promis);


// let promise = new Promise((res,rej) =>{
//     setTimeout(() => {
//         res('kaise ho ajj app log')
//     }, 2000);
// })

// promise.then((massage)=>{
//     console.log('kais ho bolo maine bhi bola na :', massage);
    
// })


try {
    let name = 
    console.log(name);
    
} catch (error) {
    console.log(error,"erro aa gya mubarak ho");
    
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data mil gaya ✅"), 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  let result = await fetchData(); // waits here
  console.log(result);
  console.log("Done ✅");
}

getData();

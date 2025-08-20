// 1
// 12
// 123
// 1234
// 12345
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
  let str = "* ";
  console.log(str.repeat(i));
}
//  * * * * * 
//   * * * * 
//     * * * 
//       * * 
//         * 
let a = 5;
for (let i = a; i >= 1; i--) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat(a-i)+str.repeat(i));
}
 
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
let b = 5;
for (let i = 1; i <= b; i++) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat((b-i))+str.repeat(i));
}

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

let n = 5;
for (let i = n; i >= 1; i--) {
    let str = "* ";
    console.log(str.repeat(i));
}
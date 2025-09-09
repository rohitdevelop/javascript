// // 1
// // 12
// // 123
// // 1234
// // 12345
// for (let i = 1; i <= 5; i++) {
//   let row = ""
//   for (let j = 1; j <= i; j++) {
//     row += j;
//     // console.log("inner");
//   }
//   console.log("outer",row);
// }
// // *
// // **
// // ***
// // ****
// // *****
// for (let i = 1; i <= 5; i++) {
//   let str = "* ";
//   console.log(str.repeat(i));
// }
// //  * * * * *
// //   * * * *
// //     * * *
// //       * *
// //         *
// let a = 5;
// for (let i = a; i >= 1; i--) {
//     let str = "* ";
//     let space  = '  ';
//     console.log(space.repeat(a-i)+str.repeat(i));
// }

// //         *
// //       * *
// //     * * *
// //   * * * *
// // * * * * *
//  let b = 5;
//  for (let i = 1; i <=  b; i++) {
//  let str = "* "
//  let space = '  '
//  console.log(space.repeat(b-i)+str.repeat(i));
//  }

// // * * * * *
// // * * * *
// // * * *
// // * *
// // *
//  let c = 5;
//  for (let i = c; i >= 1; i--) {
//  let str = "* "
//  console.log(str.repeat(i));
//  }

// //     *
// //    * *
// //   * * *
// //  * * * *
// // * * * * *
//  let d = 5
// for (let i = 1; i <= d; i++) {
//  let str = "* "
//  let space = " "
//  console.log(space.repeat(d-i)+str.repeat(i));
// }

// let num = 6;
// for (let i = 1; i < num; i++) {
//   str = "* ";
//   console.log(str.repeat(i));
// }
// for (let j = 4; j >= 1; j--) {
//   str = "* ";
//    console.log(str.repeat(j));
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "even");
//   } else {
//     console.log(i, "odd");
//   }
// }

  // const button = document.getElementById('btn'); // ✅ use getElementById
  //   const number = document.getElementById('count'); 

  //   button.addEventListener('click', () => {
  //     let currentValue = parseInt(number.textContent); // get current value
  //     number.textContent = currentValue + 1; // increment
  //   });


//   let date = new Date();
// let tarik = date.toISOString().split("T")[0]; // "2025-09-03"
// let reversed = tarik.split("-").reverse().join("-"); // "03-09-2025"
// console.log(reversed);

  
    // let count = 0;
    // const countElement = document.getElementById("count");
    // const incrementBtn = document.getElementById("increment");
    // const decrementBtn = document.getElementById("decrement");
    // const resetBtn = document.getElementById("reset");

    // incrementBtn.addEventListener("click", () => {
    //   count++;
    //   countElement.textContent = count;
    // });

    // decrementBtn.addEventListener("click", () => {
    //   count--;
    //   countElement.textContent = count;
    // });

    // resetBtn.addEventListener("click", () => {
    //   count = 0;
    //   countElement.textContent = count;
    // });






      let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;

        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        const cells = document.querySelectorAll('.cell');
        const currentPlayerElement = document.getElementById('currentPlayer');
        const winnerMessageElement = document.getElementById('winnerMessage');

        // Add click event listeners to all cells
        cells.forEach(cell => {
            cell.addEventListener('click', handleCellClick);
        });

        function handleCellClick(e) {
            const cellIndex = e.target.getAttribute('data-index');
            
            if (gameBoard[cellIndex] !== '' || !gameActive) {
                return;
            }

            makeMove(cellIndex, currentPlayer);
            
            if (checkWinner()) {
                endGame(`Player ${currentPlayer} Wins! 🎉`);
                return;
            }
            
            if (checkDraw()) {
                endGame("It's a Draw! 🤝");
                return;
            }
            
            switchPlayer();
        }

        function makeMove(index, player) {
            gameBoard[index] = player;
            const cell = cells[index];
            cell.textContent = player;
            cell.classList.add(player.toLowerCase());
            cell.disabled = true;
        }

        function switchPlayer() {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            currentPlayerElement.textContent = currentPlayer;
        }

        function checkWinner() {
            return winningCombinations.some(combination => {
                return combination.every(index => {
                    return gameBoard[index] === currentPlayer;
                });
            });
        }

        function checkDraw() {
            return gameBoard.every(cell => cell !== '');
        }

        function endGame(message) {
            gameActive = false;
            winnerMessageElement.textContent = message;
            winnerMessageElement.classList.add('show');
            
            // Disable all remaining cells
            cells.forEach(cell => {
                cell.disabled = true;
            });
        }

        function resetGame() {
            currentPlayer = 'X';
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            gameActive = true;
            
            currentPlayerElement.textContent = currentPlayer;
            winnerMessageElement.classList.remove('show');
            
            cells.forEach(cell => {
                cell.textContent = '';
                cell.disabled = false;
                cell.classList.remove('x', 'o');
            });
        }
function generateChessboard() {
const pocet = document.getElementById('pocet');
const sloupec = document.getElementById('sloupec');

    const chessboard = document.getElementById('chessboard');

    chessboard.innerHTML = '';

 

    for (let i = 0; i < rows; i++) {

      for (let j = 0; j < columns; j++) {

        const square = document.createElement('div');

        square.classList.add('square');

        if ((i + j) % 2 === 0) {

          square.classList.add('white');

        } else {

          square.classList.add('black');

        }

        chessboard.appendChild(square);

      }

      chessboard.appendChild(document.createElement('br'));

    }

  }
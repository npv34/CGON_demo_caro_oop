const PLAYER_ONE = 1;
const PLAYER_TWO = 2;

class GameBoard {
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.cells = [];
        this.turn = PLAYER_ONE;
    }

    draw() {
        let html = ''
        for (let i = 0; i < this.rows; i++) {
            html += '<tr>';
            this.cells[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.cells[i][j] = new Cell(i, j);
                html += '<td onclick="gameBoard.play(' + i + ',' + j + ')" id="cell-' + i + '-' + j + '">';
                html += '</td>';
            }
            html += '</tr>';
        }
        document.getElementById("gameBoard").innerHTML = html;
    }

    play(x, y) {
        if (this.cells[x][y].content === '*') {
            let html = ''
            if (this.turn === PLAYER_ONE) {
                html = 'X';
                this.turn = PLAYER_TWO;
            } else {
                html = '0';
                this.turn = PLAYER_ONE;
            }
            this.cells[x][y].setContent(html)
            document.getElementById('cell-' + x + '-' + y).innerHTML = html;
        } else {
            alert('cell is not empty')
        }

    }

    checkWin(x, y) {
        // checkwin
    }
}

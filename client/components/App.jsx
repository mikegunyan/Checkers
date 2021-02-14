import React from 'react';
import axios from 'axios';

console.log(`Updated: ${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })}`)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      black: 12,
      red: 12,
      selected: [],
      turn: 'black',
    };
    this.makeBoard = this.makeBoard.bind(this);
    this.moveSelected = this.moveSelected.bind(this);
    this.resetRed = this.resetRed.bind(this);
    this.selectRed = this.selectRed.bind(this);
    this.resetBlack = this.resetBlack.bind(this);
    this.selectBlack = this.selectBlack.bind(this);
  }

  componentDidMount() {
    this.makeBoard();
  }

  makeBoard() {
    axios.get('/boards')
      .then((data) => {
        this.setState({ board: data.data[0].board })
      })
  }

  moveSelected(event) {
    const target = event.target.getAttribute('name');
    const { board, selected } = this.state;
    const columns = Number(target.charAt(1));
    const rows = Number(target.charAt(0));
    const to = board[rows][columns];
    const from = board[selected[0]][selected[1]];
    board[rows][columns] = from;
    board[selected[0]][selected[1]] = to;
    board[rows][columns][1] = 'redSquare';
    board[selected[0]][selected[1]][2] = '';
    this.resetRed();
  }

  resetRed() {
    const { board, selected } = this.state;
    board[selected[0]][selected[1]][1] = 'redSquare';
    if (selected[0] > 0 && selected[1] > 0 && board[selected[0] - 1][selected[1] - 1] !== undefined  && board[selected[0] - 1][selected[1] - 1][0] === null) {
      board[selected[0] - 1][selected[1] - 1][1] = 'redSquare';
      board[selected[0] - 1][selected[1] - 1][2] = '';
    }
    if (selected[0] > 0 && selected[1] < 7 && board[selected[0] - 1][selected[1] + 1] !== undefined  && board[selected[0] - 1][selected[1] + 1][0] === null) {
      board[selected[0] - 1][selected[1] + 1][1] = 'redSquare';
      board[selected[0] - 1][selected[1] + 1][2] = '';
    }
    if (selected[0] < 7 && selected[1] > 0 && board[selected[0] + 1][selected[1] - 1] !== undefined  && board[selected[0] + 1][selected[1] - 1][0] === null) {
      board[selected[0] + 1][selected[1] - 1][1] = 'redSquare';
      board[selected[0] + 1][selected[1] - 1][2] = '';
    }
    if (selected[0] < 7 && selected[1] < 7 && board[selected[0] + 1][selected[1] + 1] !== undefined  && board[selected[0] + 1][selected[1] + 1][0] === null) {
      board[selected[0] + 1][selected[1] + 1][1] = 'redSquare';
      board[selected[0] + 1][selected[1] + 1][2] = '';
    }
    this.setState({ selected: [] })
  }

  selectRed(event) {
    const { board, selected, turn } = this.state;
    if (turn === 'red') {
      const target = event.target.getAttribute('name');
      const columns = Number(target.charAt(1));
      const rows = Number(target.charAt(0));
      if (selected.length > 0) {
        this.resetRed();
      } else {
        board[rows][columns][1] = 'selectedPiece';
        if (rows > 0 && columns > 0 && board[rows - 1][columns - 1] !== undefined  && board[rows - 1][columns - 1][0] === null  && board[rows][columns][0] === 'X') {
          board[rows - 1][columns - 1][1] = 'selectedSquare';
          board[rows - 1][columns - 1][2] = 'moveSelected';
        }
        if (rows > 0 && columns < 7 && board[rows - 1][columns + 1] !== undefined  && board[rows - 1][columns + 1][0] === null  && board[rows][columns][0] === 'X') {
          board[rows - 1][columns + 1][1] = 'selectedSquare';
          board[rows - 1][columns + 1][2] = 'moveSelected';
        }
        if (rows < 7 && columns > 0 && board[rows + 1][columns - 1] !== undefined  && board[rows + 1][columns - 1][0] === null) {
          board[rows + 1][columns - 1][1] = 'selectedSquare';
          board[rows + 1][columns - 1][2] = 'moveSelected';
        }
        if (rows < 7 && columns < 7 && board[rows + 1][columns + 1] !== undefined  && board[rows + 1][columns + 1][0] === null) {
          board[rows + 1][columns + 1][1] = 'selectedSquare';
          board[rows + 1][columns + 1][2] = 'moveSelected';
        }
        this.setState({ selected: [rows, columns] })
      }
    }
  }

  resetBlack() {
    const { board, selected } = this.state;
    board[selected[0]][selected[1]][1] = 'redSquare';
    if (selected[0] > 0 && selected[1] > 0 && board[selected[0] - 1][selected[1] - 1] !== undefined  && board[selected[0] - 1][selected[1] - 1][0] === null) {
      board[selected[0] - 1][selected[1] - 1][1] = 'redSquare';
      board[selected[0] - 1][selected[1] - 1][2] = '';
    }
    if (selected[0] > 0 && selected[1] < 7 && board[selected[0] - 1][selected[1] + 1] !== undefined  && board[selected[0] - 1][selected[1] + 1][0] === null) {
      board[selected[0] - 1][selected[1] + 1][1] = 'redSquare';
      board[selected[0] - 1][selected[1] + 1][2] = '';
    }
    if (selected[0] < 7 && selected[1] > 0 && board[selected[0] + 1][selected[1] - 1] !== undefined  && board[selected[0] + 1][selected[1] - 1][0] === null) {
      board[selected[0] + 1][selected[1] - 1][1] = 'redSquare';
      board[selected[0] + 1][selected[1] - 1][2] = '';
    }
    if (selected[0] < 7 && selected[1] < 7 && board[selected[0] + 1][selected[1] + 1] !== undefined  && board[selected[0] + 1][selected[1] + 1][0] === null) {
      board[selected[0] + 1][selected[1] + 1][1] = 'redSquare';
      board[selected[0] + 1][selected[1] + 1][2] = '';
    }
    this.setState({ selected: [] })
  }

  selectBlack(event) {
    const { board, selected, turn } = this.state;
    if (turn === 'black') {
      const target = event.target.getAttribute('name');
      const columns = Number(target.charAt(1));
      const rows = Number(target.charAt(0));
      if (selected.length > 0) {
        this.resetBlack();
      } else {
        board[rows][columns][1] = 'selectedPiece';
        if (rows > 0 && columns > 0 && board[rows - 1][columns - 1] !== undefined  && board[rows - 1][columns - 1][0] === null) {
          board[rows - 1][columns - 1][1] = 'selectedSquare';
          board[rows - 1][columns - 1][2] = 'moveSelected';
        }
        if (rows > 0 && columns < 7 && board[rows - 1][columns + 1] !== undefined  && board[rows - 1][columns + 1][0] === null) {
          board[rows - 1][columns + 1][1] = 'selectedSquare';
          board[rows - 1][columns + 1][2] = 'moveSelected';
        }
        if (rows < 7 && columns > 0 && board[rows + 1][columns - 1] !== undefined  && board[rows + 1][columns - 1][0] === null  && board[rows][columns][0] === 'O') {
          board[rows + 1][columns - 1][1] = 'selectedSquare';
          board[rows + 1][columns - 1][2] = 'moveSelected';
        }
        if (rows < 7 && columns < 7 && board[rows + 1][columns + 1] !== undefined  && board[rows + 1][columns + 1][0] === null  && board[rows][columns][0] === 'O') {
          board[rows + 1][columns + 1][1] = 'selectedSquare';
          board[rows + 1][columns + 1][2] = 'moveSelected';
        }
        this.setState({ selected: [rows, columns] })
      }
    }
  }

  render() {
    const { board } = this.state;
    const whichPiece = (square, index, i) => {
      if (square[0] === null) {
        return null;
      } else if (square[0] === 'x') {
        return (
          <img name={`${index}${i}`} className="piece" src="https://cdn0.iconfinder.com/data/icons/board-games/48/Paul-14-512.png" />
        )
      }
      return (
        <img name={`${index}${i}`} className="piece" src="https://cdn4.iconfinder.com/data/icons/board-games-glyph/48/Games_BoardGames_Artboard_14-512.png" />
      )
    }
    return (
      <div>
        <div className="head"><h2>Checkers</h2></div>
          <div>{board.map((row, index) => (
            <div className="grid" key={row[index] + index}>
            {row.map((square, i) => (
              <div onClick={square[2] === 'selectRed' ? this.selectRed : square[2] === 'selectBlack' ? this.selectBlack : square[2] === 'moveSelected' ? this.moveSelected : null} name={`${index}${i}`} className={square[1]} key={square + i}>{whichPiece(square, index, i)}</div>
            ))}
          </div>
        ))}</div>
      </div>
    );
  }
}
export default App;

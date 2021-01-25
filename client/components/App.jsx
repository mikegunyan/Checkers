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
    };
    this.makeBoard = this.makeBoard.bind(this);
    this.moveRed = this.moveRed.bind(this);
    this.whichSquare = this.whichSquare.bind(this);
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

  whichSquare(index, i) {
    if (index % 2 === 0) {
      if (i % 2 !== 0) {
        return 'blackSquare';
      }
      const row = index === 0 ? 'a' : index === 1 ? 'b' : index === 2 ? 'c' : index === 3 ? 'd' : index === 4 ? 'e' : index === 5 ? 'f' : index === 6 ? 'g' : index === 7 ? 'h' : null;
      return row + i;
    } else {
      if (i % 2 === 0) {
        return 'blackSquare';
      }
      const row = index === 0 ? 'a' : index === 1 ? 'b' : index === 2 ? 'c' : index === 3 ? 'd' : index === 4 ? 'e' : index === 5 ? 'f' : index === 6 ? 'g' : index === 7 ? 'h' : null;
      return row + i;
    }
  }

  moveRed(event) {
    const { board } = this.state;
    if (event.target.name) {
      const data = JSON.parse(event.target.name)
      let topLeft, topRight, bottomLeft, bottonRight;
      const piece = this.whichSquare(data[2], data[3]);
      if (data[2] > 0 && data[3] > 0) {
        topLeft = this.whichSquare(data[2] - 1, data[3] - 1);
        document.body.getElementsByClassName(topLeft)[0].setAttribute
      ('style', 'filter: brightness(50%);');
      }
      if (data[2] > 0 && data[3] < 7) {
        topRight = this.whichSquare(data[2] - 1, data[3] - 1);
        document.body.getElementsByClassName(topRight)[0].setAttribute
      ('style', 'filter: brightness(50%);');
      }
      if (data[2] < 7 && data[3] > 0) {
        bottomLeft = this.whichSquare(data[2] - 1, data[3] - 1);
        document.body.getElementsByClassName(bottomLeft)[0].setAttribute
      ('style', 'filter: brightness(50%);');
      }
      if (data[2] < 7 && data[3] < 7) {
        bottonRight = this.whichSquare(data[2] - 1, data[3] - 1);
        document.body.getElementsByClassName(bottonRight)[0].setAttribute
      ('style', 'filter: brightness(50%);');
      }
    }
    this.setState({ board });
  }

  render() {
    const { board } = this.state;
    const whichPiece = (index, i, square) => {
      if (square === null) {
        return null;
      } else if (square[0] === 'x') {
        return (
          <img name={`["${square[0]}", ${square[1]}, ${index}, ${i}]`} onClick={this.moveRed} className="piece" src="https://cdn0.iconfinder.com/data/icons/board-games/48/Paul-14-512.png" />
        )
      }
      return (
        <img className="piece" src="https://cdn4.iconfinder.com/data/icons/board-games-glyph/48/Games_BoardGames_Artboard_14-512.png" />
      )
    }
    return (
      <div>
        <div className="head"><h2>Checkers</h2></div>
          <div>{board.map((row, index) => (
            <div className="grid" key={row[index] + index}>
            {row.map((square, i) => (
              <div className={this.whichSquare(index, i)} key={square + i}>{whichPiece(index, i, square)}</div>
            ))}
          </div>
        ))}</div>
      </div>
    );
  }
}
export default App;

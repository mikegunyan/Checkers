import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: 'Player One',
      playerTwo: 'Player Two',
      savedView: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeView = this.changeView.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  onClose(event) {
    const { onClose } = this.props;
    if (onClose) {
      onClose(event);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  changeView() {
    const { savedView } = this.state;
    this.setState({ savedView: !savedView })
  }

  startGame(event) {
    const { makeBoard, onClose } = this.props;
    makeBoard(event.target.name)
    onClose();
  }

  render() {
    const { playerOne, playerTwo, savedView } = this.state;
    const { modal, gameList } = this.props;
    if (!modal) {
      return null;
    }
    if (savedView) {
      return (
        <div className="modalBackground">
          <div className="head"><h2>Checkers</h2></div>
          <div className="formBox">
            <h2>Select Game</h2>
            <div>
              {gameList.map((game) => (
                <button key={Math.random() * (1000) - 1} name={game} className="altButton" onClick={this.startGame}>{game}</button>
              ))}
            </div>
            <button className="altButton" onClick={this.changeView}>Back to Welcome Page</button>
          </div>
        </div>
      )
    }
    return (
      <div className="modalBackground">
        <div className="head"><h2>Checkers</h2></div>
        <div className="formBox">
          <h2>Start Game</h2>
          <label>Player One Name: </label>
          <input type="text" id="playerOne" onChange={this.handleChange} value={playerOne}></input>
          <label>Player Two Name: </label>
          <input type="text" id="playerTwo" onChange={this.handleChange} value={playerTwo}></input>
            <div className="buttonGrid">
            <button onClick={this.changeView}>Saved Game</button>
            <button onClick={(event) => {this.onClose(event)}}>New Game</button>
            </div>
        </div>
      </div>
    )
  }

}
export default Modal;
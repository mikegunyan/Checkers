import React from 'react';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: 'Player One',
      playerTwo: 'Player Two',
      savedView: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeVictory = this.changeVictory.bind(this);
    this.startGame = this.startGame.bind(this);
    this.players = this.players.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  changeView() {
    const { savedView } = this.state;
    this.setState({ savedView: !savedView });
  }

  changeVictory() {
    const { changeVictory } = this.props;
    this.changeView();
    changeVictory();
  }

  startGame(event) {
    const { makeBoard, onClose } = this.props;
    makeBoard(event.target.name);
    onClose();
  }

  players() {
    const { playerOne, playerTwo } = this.state;
    const { players, onClose } = this.props;
    players(playerOne, playerTwo);
    onClose();
  }

  render() {
    const { playerOne, playerTwo, savedView } = this.state;
    const { modal, gameList, victory } = this.props;
    if (!modal) {
      return null;
    }
    if (savedView) {
      if (victory !== '') {
        return (
          <div className="modalBackground">
            <div className="head"><h2>Checkers</h2></div>
            <div className="formBox">
              <h2>Select Game</h2>
              <div>
                <h1>
                  {victory}
                  wins!!!
                </h1>
              </div>
              <button className="altButton" type="button" onClick={this.changeVictory}>Back to Welcome Page</button>
            </div>
          </div>
        );
      }
      return (
        <div className="modalBackground">
          <div className="head"><h2>Checkers</h2></div>
          <div className="formBox">
            <h2>Select Game</h2>
            <div>
              {gameList.map((game) => (
                <button key={Math.random() * (1000) - 1} name={game} className="altButton" type="button" onClick={this.startGame}>{game}</button>
              ))}
            </div>
            <button className="altButton" type="button" onClick={this.changeView}>Back to Welcome Page</button>
          </div>
        </div>
      );
    }
    return (
      <div className="modalBackground">
        <div className="head"><h2>Checkers</h2></div>
        <div className="formBox">
          <h2>Start Game</h2>
          <label htmlFor="playerOne">
            Player One Name:
            <input type="text" id="playerOne" onChange={this.handleChange} value={playerOne} />
          </label>
          <label htmlFor="playerTwo">
            Player Two Name:
            <input type="text" id="playerTwo" onChange={this.handleChange} value={playerTwo} />
          </label>
          <div className="buttonGrid">
            <button type="button" onClick={this.changeView}>Saved Game</button>
            <button type="button" onClick={this.players}>New Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;

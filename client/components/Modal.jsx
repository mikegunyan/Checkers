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

  render() {
    const { playerOne, playerTwo, savedView } = this.state;
    const { modal } = this.props;
    if (!modal) {
      return null;
    }
    if (savedView) {
      return (
        <div className="modalBackground">
          <div className="head"><h2>Checkers</h2></div>
          <div className="formBox">
            <h2>Select Game</h2>
              <button className="altButton" onClick={this.update}>Saved Game</button>
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
            <button onClick={this.update}>Saved Game</button>
            <button onClick={(event) => {this.onClose(event)}}>New Game</button>
            </div>
        </div>
      </div>
    )
  }

}
export default Modal;
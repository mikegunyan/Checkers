import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  login() {
    console.log('login clicked')
  }

  newUser() {
    console.log('newUser clicked')
  }

  render() {
    return (
      <div className="modalBackground">
        <div className="head"><h2>Checkers</h2></div>
        <div className="formBox">
          <h2>LogIn</h2>
          <label>Username: </label>
          <input type="text" id="username" onChange={this.handleChange} value={username}></input>
          <label>Password: </label>
          <input type="text" id="password" onChange={this.handleChange} value={password}></input>
            <div className="buttonGrid">
            <button onClick={this.login}>Log In</button>
            <button onClick={this.newUser}>New User</button>
            </div>
        </div>
      </div>
    )
  }

}
export default Login;
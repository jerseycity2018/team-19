import React, { Component } from 'react';
import '../App.css';
import {Container} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';

class LogIn extends Component {
  
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleEmailChange = (evt) => this.setState({ username: evt.target.value });
  handlePasswordChange = (evt) => this.setState({ password: evt.target.value });
  
  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { username, password } = this.state;

    if(username === 'volunteer' && password ==='pass'){
      this.props.history.push('/home');
    }
    else if(username === 'admin' && password ==='pass'){
      this.props.history.push('/signup');

    }
    else{
      alert("Not a valid account");
    }
    // alert(`Signed up with username: ${username} password: ${password}`);
  }
  
  canBeSubmitted() {
    const { username, password } = this.state;
    return (
      username.length > 0 &&
      password.length > 0
    );
  }


  render() {

    const isEnabled = this.canBeSubmitted();


    return (
      <Container>

<form onSubmit={this.handleSubmit}>
<label>Username </label>
<input
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <br/>
        <label>Password </label>

        <input
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br/>


<button type="submit" disabled={!isEnabled}>Log In </button>

<LinkContainer to="signup">
<button>Sign Up </button>
</LinkContainer>
</form>

  </Container>
    );
  }
}

export default LogIn;
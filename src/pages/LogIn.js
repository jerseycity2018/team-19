import React, { Component } from 'react';
import '../App.css';
import {Container} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Media } from 'reactstrap';
import Logo from '../img/gcf_logo.gif';
import Twitter from '../img/twitter_button.png'
import FB from '../img/fb_button.png'

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
      this.props.history.push('/admin');

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
      <Container className="LogIn">
        <Media middle href="#">
          <Media object src={Logo} alt="GCF Logo" />
        </Media>
        <form onSubmit={this.handleSubmit}>
          <label id="labelLogIn">Username </label>
          &nbsp;&nbsp;
          <input
            id="LogInInput1"
            type="text"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <br />
          <label id="labelLogIn">Password </label>
          &nbsp;&nbsp;
          <input
            id="LogInInput2"
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <br />
          <br />
          <button type="submit" id="LogInButton" disabled={!isEnabled}>Log In </button>
          &nbsp;&nbsp;
          <LinkContainer to="signup">
            <button id="LogInButton">Sign Up </button>
          </LinkContainer>
        </form>
        <br />
        <Media middle href="#">
          <Media object src={Twitter} id="socialMediaButtons" alt="Login with Twitter" />
        </Media>
        <br />
        <Media middle href="#">
          <Media object src={FB} id="socialMediaButtons" alt="Login with FB" />
        </Media>
      </Container>
    );
  }
}

export default LogIn;
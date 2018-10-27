import React, { Component } from 'react';
import '../App.css';

class LogIn extends Component {
  render() {
    return (
      <div className="App">

    <label>Username </label>
    <input type="text" name="username" required/><br/>
    <label>Password </label>
    <input type="text" name="password" required/><br/>

    <button>Log In </button>
    <button>Sign Up </button>


    </div>
    );
  }
}

export default LogIn;
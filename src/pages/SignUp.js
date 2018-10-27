import React, { Component } from 'react';
import '../App.css';

class SignUp extends Component {
  render() {
    return (
      <div className="App">
        
      <label>First Name </label>
      <input type="text" name="firstName" required/><br/>
      <label>Last Name </label>
      <input type="text" name="lastName" required/><br/>

      <label>Username </label>
      <input type="text" name="username" required/><br/>
      <label>Password </label>
      <input type="text" name="password" required/><br/>
      <label>Confirm Password </label>
      <input type="text" name="passwordConfirm" required/><br/>

      
      </div>
    );
  }
}

export default SignUp;
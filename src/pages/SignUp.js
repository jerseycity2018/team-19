import React, { Component } from 'react';
import {Container} from 'reactstrap';

import '../App.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      zip: '',
      createdAccount:false,
    };
  }

  handleEmailChange = (evt) => this.setState({ email: evt.target.value });
  handlePasswordChange = (evt) => this.setState({ password: evt.target.value });
  handleFirstNameChange = (evt) => this.setState({ firstName: evt.target.value });
  handleLastNameChange = (evt) => this.setState({ lastName: evt.target.value });
  handleZipChange = (evt) => this.setState({ zip: evt.target.value });
  
  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    evt.preventDefault();

    const { email, 
            password,
            firstName,
            lastName,
            zip
          } = this.state;
    //       alert("before");

    // this.props.history.push({
    //   pathname: '/signup',
    //   // search: '?query=abc',

    //   state: {email:email,
    //           password:password,
    //           firstName:firstName,
    //           lastName: lastName,
    //           zip:zip,   
    //           createdAccount:true,
    //   }
    // });
    // alert("after");

      this.setState({createdAccount:true});
    
    // alert(`Signed up with username: ${username} password: ${password}`);
  }
  
  canBeSubmitted() {
    const { email, 
      password,
      firstName,
      lastName,
      zip
    } = this.state;
    
    return (
      email.length > 0 &&
      password.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 
      //zip is not required to be inputed?
    );
  }

  createdAccountPrint(){
    if(this.state.createdAccount){
      return(
        <Container>
          <h3>Newly Created Account: </h3>
          <label>Email: </label> <nobr/> <p>{this.state.email}</p> 
          <label>Name: </label> <nobr/>
          <p>{this.state.firstName + " " + this.state.lastName}</p>
          <label>Zipcode: </label>
          <p>{this.state.zip}</p>

        </Container>
      );
    }
    return null;
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <Container className="SignUp">
        <form onSubmit={this.handleSubmit}>
        <label id="labelSignUp">Email </label>
        <input
            type="text"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <br/>
        <label id="labelSignUp">Password </label>
        <input
            type="text"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <br/>
          <label id="labelSignUp">First Name </label>
        <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          <br/>
          <label id="labelSignUp">Last Name </label>
        <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
          <br/>
          <label id="labelSignUp">Zipcode </label>
        <input
            type="text"
            placeholder="Zipcode"
            value={this.state.zip}
            onChange={this.handleZipChange}
          />
          <br/>
          <button disabled={!isEnabled}>Create Account! </button>
          </form>
          {this.createdAccountPrint()}
      </Container>
    );
  }
}

export default SignUp;
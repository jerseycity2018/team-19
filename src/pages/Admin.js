import React, { Component } from 'react';
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../App.css';

class Admin extends Component {
  render() {
    return (
      <Container className="Admin">
        <Container>
          hello
          <Link to="/home">Home</Link>
        </Container>
        <Container>
          lmao
        </Container>
      </Container>
    );
  }
}

export default Admin;
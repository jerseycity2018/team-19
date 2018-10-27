import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs'
import { Container, Nav, TabContent, TabPane, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import '../App.css';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Container className="Admin">
        <Container>
          <h1>Hello Isabella</h1>
          <Link to="/home">Home</Link>
        </Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            
          </TabPane>
          <TabPane tabId="2">
            Add
            <br />
            Create
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default Admin;
import React, { Component } from 'react';
import { Container, Nav, TabContent, TabPane, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import PieChart from 'react-minimal-pie-chart';

import '../App.css';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      startDate: moment(),
      email: "",
      contributionQuantity:0,
      contributionType: "",
      farm: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleEmailChange = (evt) => this.setState({ email: evt.target.value });
  // handleChosenDateChange = (evt) => this.setState({ chosenDate: evt.target.value });
  handleContributionQuantityChange = (evt) => this.setState({ contributionQuantity: evt.target.value });
  handleContributionTypeChange = (evt) => this.setState({ contributionType: evt.target.value });
  handleFarmChange = (evt) => this.setState({ farm: evt.target.value });

  handleSubmitContribution = (evt) => {
    if (!this.canBeSubmittedContribution()) {
      evt.preventDefault();
      return;
    }
    const { email, startDate,contributionQuantity,contributionType,farm } = this.state;
  }

  canBeSubmittedContribution() {
    const { email, startDate,contributionQuantity,contributionType,farm } = this.state;

    // alert(email+chosenDate+contributionQuantity+contributionType+farm);
    // console.log("email: "+email);
    // console.log("startDate: "+startDate);
    // console.log("qty: "+contributionQuantity);
    // console.log("type: "+contributionType);
    // console.log("farm: "+farm);

    return (
      email.length > 0 &&
      startDate &&
      contributionQuantity >0 &&
      contributionType.length >0 &&
      farm.length >0
    );
  };

  canBeSubmittedAdmin() {
    const { email } = this.state;

    return (
      email.length > 0
    );
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const isEnabledContribution = this.canBeSubmittedContribution();
    const isEnabledAdmin = this.canBeSubmittedAdmin();

    const labels = ['2016', '2017', '2018'];
    const data = [324, 45, 672];
    const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
    return (
      <Container className="Admin">
        <Container className="Greetings">
          <h1> Hello, Bahij!</h1>
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
            <PieChart
                   cx = {20}
                   cy = {20}
                   radius = {20}
                   data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Four', value: 25, color:'#baf9ab' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                    { title: 'Five', value: 5, color: '#acf7f9' }
                  ]}
                  animate = {true}
            />
            <PieChart
                   cx = {40}
                   cy = {20}
                   radius = {20}
                   data={[
                    { title: 'One', value: 10, color: '#4286f4' },
                    { title: 'Two', value: 20, color: '#f4f142' },
                    { title: 'Four', value: 5, color:'#f4425f' }
                  ]}
                  animate = {true}
            />
          </TabPane>
          <TabPane tabId="2">
            <form onSubmit={this.handleSubmitContribution}>
              <h3>Adding User Contribution </h3>
              <label>User's Email</label>
              <input
                type="text"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <br/>
              <label>Date</label>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
              <label>User Contribution</label>
              <input
                type="number"
                placeholder="#of hours/lbs"
                value={this.state.contributionQuantity}
                onChange={this.handleContributionQuantityChange}
              />
              <select onChange={this.handleContributionTypeChange}>
                <option selected disabled>Choose Type</option>
                <option value="hours">hours</option>
                <option value="lbs">lbs</option>
              </select>
              <br />
              <label>Farm Attended</label>
              <select onChange={this.handleFarmChange}>
                <option selected disabled>Choose Farm</option>
                <option value="farm1">Farm 1</option>
                <option value="farm2">Farm 2</option>
                <option value="farm3">Farm 3</option>
                <option value="farm4">Farm 4</option>
                <option value="farm5">Farm 5</option>
                <option value="farm6">Farm 6</option>
              </select>
              <br/>
              <button type="submit" disabled={!isEnabledContribution}>Add Contribution</button>
            </form>
            <h3>User Admin Access </h3>
            <form>
              <label>User's Email</label>
              <input
                type="text"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <br/>
              <button type="submit" disabled={!isEnabledAdmin}>Make Admin</button>
            </form>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default Admin;
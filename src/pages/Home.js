import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Table } from 'reactstrap'
import classnames from 'classnames';
import '../App.css';
import PieChart from 'react-minimal-pie-chart';

class Home extends Component {

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
        <Container className="Home">
            <Container className="Greetings">
                <h1> Hello, Jimmy!</h1>
            </Container>
            <Nav tabs>
                <NavItem>
                    <NavLink
                    id="nav-links"
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    >
                    Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    id="nav-links"
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                    >
                    Scoreboard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    id="nav-links"
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                    >
                    Rewards
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    id="nav-links"
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('4'); }}
                    >
                    Changelog
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <Container className="usrData">
                    <h4>Volunteered for 4 hours!</h4>
                    <h4>Donated 20 pounds of compost!</h4>
                    <h4>Refered 2 friends!</h4>
					<h4>You have 28 points!</h4>
                    </Container>
                   <PieChart
                   cx = {40}
                   cy = {25}
                   radius = {20}
                     data={[
                         { title: 'One', value: 15, color: '#78C776'},
                         { title: 'Two', value: 10, color: '#6D3521'},
                         ]}
                         animate = {true}
                        />
                    <Row>
                        <Col sm="12">
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>&nbsp; Farm Rankings</CardTitle>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Farm</th>
                                        <th>Work (hr)</th>
                                        <th>Compost (lb)</th>
                                        <th>Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Bay View Houses</td>
                                        <td>27</td>
                                        <td>217</td>
                                        <td>234</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Howard Houses</td>
                                        <td>22</td>
                                        <td>180</td>
                                        <td>202</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Forest Houses</td>
                                        <td>18</td>
                                        <td>161</td>
                                        <td>179</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                            <CardTitle id = "App">&nbsp; Individual Rankings</CardTitle>
                            <Table>
                                    <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Work (hr)</th>
                                        <th>Compost (lb)</th>
                                        <th>Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Gerald Miller</td>
                                        <td>7</td>
                                        <td>32</td>
                                        <td>39</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Katy Morgan</td>
                                        <td>5</td>
                                        <td>29</td>
                                        <td>34</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Chase Hershey</td>
                                        <td>2</td>
                                        <td>31</td>
                                        <td>33</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
							<Card body>
							<center><CardTitle id ="App"><h3>Rewards List</h3></CardTitle>
								<h4>Total Points Accumulated: 28</h4>
								<h4>Current Points: 28</h4></center>
								<Table>
									<thead>
									<tr>
										<th>Reward</th>
										<th>Point Value</th>
									</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">LED Lightbulb</th>
											<td>10</td>
										</tr>
										<tr>
											<th scope="row">Bundle of crops for the season</th>
											<td>20</td>
										</tr>
										<tr>
											<th scope="row">Various Seed Bags for a Garden</th>
											<td>30</td>
										</tr>
									</tbody>
								</Table>
							</Card>
                        </Col>
                    </Row>
                </TabPane>
            <TabPane tabId="4">
                <Row>
                    <Col sm="6">
                        <Card body>
                        <CardTitle>&nbsp; Changelog</CardTitle>
                        <Table>
                                <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Task</th>
                                    <th>Point Change</th>
                                    <th>Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>jimmy@jpm.com</td>
                                    <td>Compost Donation</td>
                                    <td>+8</td>
                                    <td>10/25</td>
                                </tr>
                                <tr>
                                    <td>jimmy@jpm.com</td>
                                    <td>Compost Donation</td>
                                    <td>+12</td>
                                    <td>10/22</td>
                                </tr>
                                <tr>
                                    <td>jimmy@jpm.com</td>
                                    <td>Volunteer Hours</td>
                                    <td>+4</td>
                                    <td>10/21</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </TabPane>
            </TabContent>
      
      </Container>
    );
    }
}

export default Home;

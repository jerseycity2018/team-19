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
                        <h3 id="HomeTitle">Your stats:</h3>
                        <h4>Volunteered for 4 hours!</h4>
                        <h4>Donated 20 pounds of compost!</h4>
                        <h4>Referred 2 friends!</h4>
                        <h4>You have 28 points!</h4>
                        <h4>Current Rank: Bronze</h4>
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
                    <Container>
                        <h4 id="usrDataBottom">178 Points to Silver</h4>
                    </Container>
                    <Row>
                        <Col sm="12">
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle><h3>&nbsp; Farm Rankings</h3></CardTitle>
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
                            <CardTitle><h3>&nbsp; Individual Rankings</h3></CardTitle>
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
							<center><CardTitle><h3>Rewards List</h3></CardTitle>
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
                                        <tr>
											<th scope="row">Grease disposer</th>
											<td>40</td>
										</tr>
                                        <tr>
											<th scope="row">Reusable produce bags</th>
											<td>50</td>
										</tr>
                                        <tr>
											<th scope="row">Bamboo straws</th>
											<td>60</td>
										</tr>
                                        <tr>
											<th scope="row">Recycled backpack</th>
											<td>70</td>
										</tr>
                                        <tr>
											<th scope="row">Recycled cotton socks</th>
											<td>80</td>
										</tr>
                                        <tr>
											<th scope="row">Travel mug</th>
											<td>90</td>
										</tr>
                                        <tr>
											<th scope="row">Reusable water bottle</th>
											<td>100</td>
										</tr>
                                        <tr>
											<th scope="row">Bamboo plates</th>
											<td>110</td>
										</tr>
                                        <tr>
											<th scope="row">Solar lamp</th>
											<td>120</td>
										</tr><tr>
											<th scope="row">Solar power phone charger</th>
											<td>130</td>
										</tr>
                                        <tr>
											<th scope="row">Organic blankets</th>
											<td>140</td>
										</tr>
                                        <tr>
											<th scope="row">Water filter for faucet</th>
											<td>150</td>
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
                        <CardTitle><h3>&nbsp; Changelog</h3></CardTitle>
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

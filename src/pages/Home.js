import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Table } from 'reactstrap'
import classnames from 'classnames';
import '../App.css';
//import * as d3 from "d3";

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
                <h1> Hello!</h1>
            </Container>
            <Nav tabs>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    >
                    Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                    >
                    Scoreboard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                    >
                    Rewards
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <svg width="720" height="120">
                        <circle cx="40" cy="60" r="10"></circle>
                        <circle cx="80" cy="60" r="10"></circle>
                        <circle cx="120" cy="60" r="10"></circle>
                    </svg>
                    <Row>
                        <Col sm="12">
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>&nbsp; Borough Rankings</CardTitle>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Borough</th>
                                        <th>Work (hr)</th>
                                        <th>Compost (lb)</th>
                                        <th>Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brooklyn</td>
                                        <td>27</td>
                                        <td>217</td>
                                        <td>234</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bronx</td>
                                        <td>22</td>
                                        <td>180</td>
                                        <td>202</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Staten Island</td>
                                        <td>18</td>
                                        <td>199</td>
                                        <td>217</td>
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
								<h4>Total Points Accumulated: </h4>
								<h4>Current Points: </h4></center>
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
											<td>5000</td>
										</tr>
										<tr>
											<th scope="row">Bundle of crops for the season</th>
											<td>10000</td>
										</tr>
										<tr>
											<th scope="row">Various Seed Bags for a Garden</th>
											<td>30000</td>
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

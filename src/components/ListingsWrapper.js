import React, { Component, Fragment } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import Listings from './Listings';
import Filter from './Filter';

const Wrapper = styled.div`
    margin: 35px 0;
`;

export default class ListingsWrapper extends Component {
    state = {
        activeTab: '1'
    };

    constructor(props) {
        super(props);
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        return (
            <Wrapper>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Current Listings
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            New Listings
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Sold Listings
                        </NavLink>
                    </NavItem>
                </Nav>
                <Filter />
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Listings />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Listings />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Wrapper>
        );
    }
}

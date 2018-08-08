import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import Listings from './Listings';
import Filter from './Filter';
import {fetchItems, applyFilter, changeTab} from '../actions/items';
import {selectNewLisiting, selectSoldLisiting, selectCurrentLisiting} from '../reducers';
import {createSelector} from 'reselect'

const Wrapper = styled.div`
    margin: 35px 0;
`;

const SoldTabPane = styled(TabPane)`
    position: relative;
    
    &:after{
        content: "";
        position: absolute;
        top: 0;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background-color: rgba(0,0,0,.4)
    }
`;

class ListingsWrapper extends Component {
    state = {
        activeTab: '1'
    };

    componentDidMount() {
        const {fetchItems} = this.props;
        fetchItems();
    }


    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }

        this.props.changeTab(tab)
    };

    _onFilterSelected = (filters) => {
        this.props.applyFilter(filters)
    };

    render() {
        const {list, newList, soldList, isFetching} = this.props;

        return (
            <Wrapper>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            Current Listings
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            New Listings
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '3'})}
                            onClick={() => {
                                this.toggle('3');
                            }}
                        >
                            Sold Listings
                        </NavLink>
                    </NavItem>
                </Nav>
                <Filter onFilterSelected={this._onFilterSelected}/>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                {!isFetching && <Listings list={list}/>}
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                {!isFetching && <Listings list={newList}/>}
                            </Col>
                        </Row>
                    </TabPane>
                    <SoldTabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                {!isFetching && <Listings list={soldList}/>}
                            </Col>
                        </Row>
                    </SoldTabPane>
                </TabContent>
            </Wrapper>
        );
    }
}


const mapStateToProps = (state) => {
    const {items} = state;
    const isFetching = items.isFetching;

    const selectItemFilters = (state) => state.items.filters;

    const filteredCurrentListings = createSelector(selectCurrentLisiting, selectItemFilters, (itemList, filterList) => {
        if (filterList.includes('all')) {
            return itemList;
        }
        return itemList.filter(listing => filterList.includes(listing.type.toLowerCase().replace(/\s+/g, '')))
    });

    const filteredNewListings = createSelector(selectNewLisiting, selectItemFilters, (itemList, filterList) => {
        if (filterList.includes('all')) {
            return itemList;
        }
        return itemList.filter(listing => filterList.includes(listing.type.toLowerCase().replace(/\s+/g, '')))
    });
    const filteredSoldListings = createSelector(selectSoldLisiting, selectItemFilters, (itemList, filterList) => {
        if (filterList.includes('all')) {
            return itemList;
        }
        return itemList.filter(listing => filterList.includes(listing.type.toLowerCase().replace(/\s+/g, '')))
    });

    return {
        isFetching,
        list: filteredCurrentListings(state),
        newList: filteredNewListings(state),
        soldList: filteredSoldListings(state),
    };
};

const mapDispatchToProps = {fetchItems, applyFilter, changeTab};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsWrapper);

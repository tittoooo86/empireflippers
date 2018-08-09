import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';



const FilterWrapper = styled.div`
    text-align: center;
    margin: 15px 0;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    @media (max-width: 768px) {
        width: 100%;
        display: table;
        border-spacing: 10px;
        border-collapse: separate;
    }
    
    &::-webkit-scrollbar { 
        display: none; 
    }
`;

const Item = styled.li`
    display: inline-block;
    padding: 5px 15px;
    color: ${props => props.active ? '#fff' : '#6D6D6D'};
    border: ${props => props.active ? '1px solid #3c79cb' : '1px solid #979797'};
    font-weight: ${props => props.active ? '700' : '400'};
    border-radius: 15px;
    font-size: 12px;
    margin: 0 5px;
    cursor: pointer;
    background: ${props => props.active ? '#3c79cb' : '#fff'};
    &:hover{
        transition: background .3s ease-in;
        background: ${props => props.active ? '#4168A9' : '#f5f5f5'}; 
    }
    @media (max-width: 768px) {
        display: table-cell;
        white-space: nowrap;
    }
`;

const ModCol = styled(Col)`
    @media (max-width: 768px) {
        overflow: scroll;
    }
`;

export default class Filter extends Component {

    state = {
        activeFilters: ['all']
    };

    _filterClicked = (filter) => {
        let {activeFilters} = this.state;
        const clearedFilter = filter.toLowerCase().replace(/\s+/g, '');
        if(!activeFilters.includes(clearedFilter)){
            activeFilters.push(clearedFilter);
        } else {
            const index = activeFilters.indexOf(clearedFilter);
            if (index > -1) {
                activeFilters.splice(index, 1);
            }
        }

        if(filter !== 'all' && activeFilters.includes('all')){
            const index = activeFilters.indexOf('all');
            if (index > -1) {
                activeFilters.splice(index, 1);
            }
        } else if (filter === 'all') {
            activeFilters = ['all']
        }

        this.setState({activeFilters});

        this.props.onFilterSelected(activeFilters);

    };

    render(){
        const filters = ['All', 'AdSense', 'Affiliate', 'Amazon FBA', 'Dropshipping', 'Other'];
        const {activeFilters} = this.state;
        return <FilterWrapper>
            <Container>
                <Row>
                    <ModCol sm={12}>
                        <List>
                            {filters.map((filter, index) => <Item key={index} active={activeFilters.includes(filter.toLowerCase().replace(/\s+/g, ''))} onClick={() => this._filterClicked(filter.toLowerCase())}>{filter}</Item>)}
                        </List>
                    </ModCol>
                </Row>
            </Container>
        </FilterWrapper>
    }
}

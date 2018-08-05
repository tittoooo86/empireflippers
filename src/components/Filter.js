import React from 'react';
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
    transition: background .3s ease-in;
    cursor: pointer;
    background: ${props => props.active ? '#3c79cb' : '#fff'};
    &:hover{
        background: #f5f5f5;
        
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

const Filter = () => (
    <FilterWrapper>
        <Container>
            <Row>
                <ModCol sm={12}>
                    <List>
                        <Item active>All</Item>
                        <Item>AdSense</Item>
                        <Item>Affiliate</Item>
                        <Item>Amazon FBA</Item>
                        <Item>Dropshipping</Item>
                        <Item>Other</Item>
                    </List>
                </ModCol>
            </Row>
        </Container>
    </FilterWrapper>
);

export default Filter

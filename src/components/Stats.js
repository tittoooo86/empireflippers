import React from 'react';
import PropTypes from "prop-types";
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import bg from './images/splash-default.jpg';

const StatWrapper = styled.div`
    background: url(${bg}) no-repeat center;
    padding: 40px 0;
`;


const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
     @media (max-width: 480px) {
        padding-bottom: 20px;
        margin-bottom: 20px;
        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            width: 80px;
            height: 1px;
            background-color: #fff;
        }
    }
`;

const StatValue = styled.p`
    color: #fff;
    font-size: 48px;
    margin-bottom: 15px;
    
    @media (max-width: 800px) {
        font-size: 42px;
        margin-bottom: 5px;
    }
`;

const StatName = styled.p`
    color: #fff;
    font-size: 20px;
    @media (max-width: 800px) {
        font-size: 12px;
    }
`;

const Stats = ({stats}) => (
    <StatWrapper>
        <Container>
            <Row>
                {stats.map((item, i) => <Col sm={12} md={4} key={i}><StatItem><StatValue>{item.value}</StatValue><StatName>{item.name}</StatName></StatItem></Col>)}
            </Row>
        </Container>
    </StatWrapper>
);

Stats.propTypes = {
    stats: PropTypes.array.isRequired
};

export default Stats

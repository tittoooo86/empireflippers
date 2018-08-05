import React, {Fragment} from 'react';
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
`;

const StatValue = styled.p`
    color: #fff;
    font-size: 48px;
    margin-bottom: 15px;
`;

const StatName = styled.p`
    color: #fff;
    font-size: 20px;
`;

const Stats = ({stats}) => (
    <StatWrapper>
        <Container>
            <Row>
                {stats.map((item, i) => <Col sm={12} md={4}><StatItem
                    key={i}><StatValue>{item.value}</StatValue><StatName>{item.name}</StatName></StatItem></Col>)}
            </Row>
        </Container>
    </StatWrapper>
);

Stats.propTypes = {
    stats: PropTypes.array.isRequired
};

export default Stats

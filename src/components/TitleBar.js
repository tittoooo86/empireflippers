import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import search from './images/search.png';

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
    padding: 10px 0;
`;
const Title = styled.h1`
    color: #2A2E32;
    font-size: 1.75rem;
`;


const Input = styled.input`
    border: 1px solid #dedede;
    line-height: 34px;
    padding: 0 0 0 30px;
    background: url(${search}) no-repeat scroll 8px 10px #f8f8f8;
    background-size: 15px;
    background-color: #F8F8F8;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;
export default class TitleBar extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <TitleWrapper>
                            <Title>Marketplace</Title>
                            <Input placeholder={`Search for listings...`}/>
                        </TitleWrapper>
                    </Col>
                </Row>
            </Container>
        );
    }
}

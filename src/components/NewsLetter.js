import React from 'react';
import {Form, Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import Button from "./Button";
import mail from './images/icon-envelope.png';

const SignupWrapper = styled.div`
    padding: 60px 0;
`;

const StyledTitle = styled.h3`
    text-align: center;
    color: #2A2E32;
    margin-bottom: 30px;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid #dedede;
    line-height: 58px;
    padding: 0 0 0 60px;
    background: url(${mail}) no-repeat scroll 15px 18px #f8f8f8;
    background-color: #F8F8F8;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;

const Newsletter = () => (
    <SignupWrapper>
        <Container>
            <Row>
                <Col sm="12" md={{size: 8, offset: 2}}>
                    <StyledTitle>Get Notified When New Listings Go Live</StyledTitle>
                    <Form>
                        <Row>
                            <Col xs="8">
                                <Input type="email" name="email" placeholder="Your email address"/>
                            </Col>
                            <Col xs="4">
                                <Button text={`Sign Up`} full={true}/>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    </SignupWrapper>
);

export default Newsletter

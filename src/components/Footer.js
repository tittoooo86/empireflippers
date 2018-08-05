import React from 'react';
import {Container} from 'reactstrap';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    padding: 35px 0;
    background-color: #263657;
    color: #fff;
    text-align: center;
`;
const StyledList = styled.ul`
    margin: 0 0 35px;
    padding: 0;
    list-style-type: none;
    text-align: center;
`;

const StyledListItems = styled.li`
    display: inline-block;
    margin: 0 10px;
    
    a{
        color: #fff;
        font-size: 13;
        transition: color .2s ease-in;
        &:hover{
        color: rgba(255,255,255, .5);
    }
`;

const Copyright = styled.p`
    font-size: 12px;
    display: flex;
    align-items: baseline;
    justify-content: center;
`;

const Logo = styled.img`
    width: 20px;
    margin: 0 7px;
`;


const Footer = () => (
    <StyledFooter>
        <Container>

            <StyledList>
                <StyledListItems><img src="/empire-flippers-ibba.jpg" alt="IBBA"/></StyledListItems>
                <StyledListItems><img src="/empire-flippers-inc-500.jpg" alt="Inc 500"/></StyledListItems>
                <StyledListItems><img src="/bitcoin.png" alt="Bitconin"/></StyledListItems>
            </StyledList>
            <nav>
                <StyledList>
                    <StyledListItems><a href="http://">Contact</a></StyledListItems>
                    <StyledListItems><a href="http://">Sitemap</a></StyledListItems>
                    <StyledListItems><a href="http://">Support</a></StyledListItems>
                    <StyledListItems><a href="http://">Careers</a></StyledListItems>
                    <StyledListItems><a href="http://">Buyers FAQ</a></StyledListItems>
                    <StyledListItems><a href="http://">Sellers FAQ</a></StyledListItems>
                    <StyledListItems><a href="http://">General Terms of Use</a></StyledListItems>
                    <StyledListItems><a href="http://">Privacy Policy</a></StyledListItems>
                </StyledList>
            </nav>
            <Copyright>© <Logo src="/crown.png" alt="Empire Flippers" />2018 Empire Flippers</Copyright>
        </Container>

    </StyledFooter>
);

export default Footer

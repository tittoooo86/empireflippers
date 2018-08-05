import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${props => props.full ? '100%' : 'auto'};
    height: ${props => props.full ? '100%' : 'auto'};
    background: #3c79cb;
    border: none;
    color: #fff;
    padding: 10px 25px;
    cursor: pointer;
    &:hover {
        background: #4168A9;
        transition: background .3s ease-in;
    }  
`;

const Button = ({text, full}) => (
    <StyledButton full>
        {text}
    </StyledButton>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    full: PropTypes.bool
};

export default Button

import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin-right: 15px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Blockquote = styled.p`
    color: #6D6D6D  !important;
    font-style: italic;
    margin-bottom: 0!important;
`;

const Author = styled.p`
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-style: normal;
    margin-bottom: 0;
    color: #6D6D6D  !important;
    font-size: 13px !important;
`;

const Web = styled.a`
    color: #ADADAD !important;
    font-size: 12px;
    font-style: italic;
    margin-bottom: 15px;
`;

const Link = styled.a`
    color: #377AC7;
    font-weight: 700;
    transition: color .2s ease-in;
    &:hover{
        color: #275B96;
    }
`;

const Card = ({item}) => (
    <ItemWrapper>
        <Avatar src={item.avatar} alt={item.name}/>
        <Content>
            <blockquote>
                <Blockquote>{item.content}</Blockquote>
            </blockquote>
            <cite><Author>{item.name}</Author></cite>
            {item.web && <Web  href={item.web} target="_blank">{item.web}</Web>}
            {item.link && <Link href={item.link} target="_blank">{item.link}</Link>}
        </Content>
    </ItemWrapper>
);

export default Card

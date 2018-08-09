import React from 'react';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import styled from 'styled-components';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Name = styled.p`
    font-weight: 700;
    color: #2A2E32;
    font-size: 1.2rem;
    margin: 0;
`;

const Category = styled.a`
    background: #F1F1F1;
    font-size: .75rem;
    color: #6D6D6D;
    border-radius: 15px;
    padding: 5px 10px;
`;

const Id = styled.p`
    color: #6D6D6D;
    margin: 0;
`;

const Profit = styled.p`
    color: #6D6D6D;
    font-weight: 700;
    margin: 0;
`;

const Price = styled.p`
    color: #fff;
    background: #3c79cb;
    line-height: 50px;
    text-align: center;
    font-weight: 700;
    font-size: .75rem;
    margin: 0;
    
    @media (min-width: 768px) {
        line-height: 50px;
        font-size: 1.2rem;
    }
`;

const TdWithPadding = styled(Td)`
    text-align: center;
    border-bottom: 1px solid #DDDDDD;
    
     @media (min-width: 768px) {
        padding: 20px 0;
    }
    
    @media (max-width: 768px) {
        font-size: .75rem;
        font-weight: 400;
    }
`;

const ThWithPadding = styled(Th)`
    text-align: center;
    border-bottom: 1px solid #DDDDDD;
    color: #6D6D6D;
    
     @media (min-width: 768px) {
        padding: 20px 0;
    }
    
    @media (max-width: 768px) {
        font-size: .75rem;
        font-weight: 400;
    }
`;

const Listings = ({list}) => (
    <Table>
        <Thead>
        <Tr>
            <ThWithPadding>Listing</ThWithPadding>
            <ThWithPadding>Category</ThWithPadding>
            <ThWithPadding>Listing #</ThWithPadding>
            <ThWithPadding>PBN</ThWithPadding>
            <ThWithPadding>Seller Interview</ThWithPadding>
            <ThWithPadding>Net Profit</ThWithPadding>
            <ThWithPadding>Price</ThWithPadding>
        </Tr>
        </Thead>
        <Tbody>
        {list.map((item, index) => {
            return <Tr key={index}>
                <TdWithPadding><Name>{item.type}</Name></TdWithPadding>
                <TdWithPadding><Category>{item.category}</Category></TdWithPadding>
                <TdWithPadding><Id>{item.id}</Id></TdWithPadding>
                <TdWithPadding>{item.pbn !== null ? item.pbn : '\xa0'}</TdWithPadding>
                <TdWithPadding>{item.interview ? '\xa0': <img src="/ico_seller_interview_02.png" width={20} alt="" style={{margin: '0 auto'}}/>}</TdWithPadding>
                <TdWithPadding><Profit>{item.profit}</Profit></TdWithPadding>
                <TdWithPadding><Price>{item.price}</Price></TdWithPadding>
            </Tr>
        })}
        </Tbody>
    </Table>

);

export default Listings
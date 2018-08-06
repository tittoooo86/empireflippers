import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Slider from "react-slick";
import styled from 'styled-components';
import testimonials from '../data/testimonials';
import Card from "./Card";

const TestimonialsWrapper = styled.div`
    padding: 60px 0;
`;
const StyledTitle = styled.h3`
    text-align: center;
    color: #2A2E32;
    margin-bottom: 30px;
`;

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img src="/right.png" alt="Navigate forward" className={className} style={{width: 'auto'}} onClick={onClick}/>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <img src="/left.png" alt="Navigate backwards" className={className} style={{width: 'auto'}} onClick={onClick}/>
    );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Testimonials = () => (
    <TestimonialsWrapper>
        <Container>
            <Row>
                <Col sm="12">
                    <StyledTitle>Satisfied Buyers</StyledTitle>
                    <Slider {...settings}>
                        {testimonials.map((item, index) => <Card key={index} item={item} />)}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </TestimonialsWrapper>
);

export default Testimonials

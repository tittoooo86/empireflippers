import React, {Component, Fragment} from 'react';
import {Container} from 'reactstrap';

import Header from '../components/Header';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import Newsletter from '../components/NewsLetter';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import ListingsWrapper from '../components/ListingsWrapper';

import stats from '../data/stats';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <TitleBar/>
                <Container>

                    <ListingsWrapper/>
                </Container>
                <Newsletter/>
                <Stats stats={stats}/>
                <Testimonials/>
                <Footer/>
            </Fragment>
        );
    }
}


export default App;

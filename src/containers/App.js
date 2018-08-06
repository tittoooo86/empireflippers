import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Container} from 'reactstrap';

import Header from '../components/Header';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import Newsletter from '../components/NewsLetter';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import ListingsWrapper from '../components/ListingsWrapper';

import stats from '../data/stats';
//import AddTodo from './AddTodo'

//import VisibleTodoList from './VisibleTodoList'
// import { FETCH_TODO } from '../constants';

class App extends Component {
    componentDidMount() {
        // this.props.dispatch({
        //     type: FETCH_TODO,
        //     promise: fetch('https://todo-hapi-postgres.herokuapp.com/')
        // })
    }

    render() {
        console.log('articles: ', stats);
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

export default connect()(App);

import React, { Component } from 'react';
import Footer from './general/Footer/Footer';
import Header from './general/Header/Header';
import Wrapper from './general/Wrapper/Wrapper';
import Status from '../pages/Status';
import "./App.css"


class App extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <Status />
                <Footer>Rincon Enterprises</Footer>
            </Wrapper>
        );
    }
}

export default App;
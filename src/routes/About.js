import React, { Component } from 'react';

import Header from '../components/Header';
import Mission from '../components/Mission';
import Founders from '../components/Founders';
import Story from '../components/Story';
import Social from '../components/Social';
import Footer from '../components/Footer';

class About extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Mission />
                <Founders />
                <Story />
                <Social />
                <Footer />
            </div>
        );
    }
}

export default About;

import React, { Component } from 'react';

import Header from '../components/Header';
import HeroImages from '../components/HeroImages';
import Intro from '../components/Intro';
import Featured from '../components/Featured';
import Social from '../components/Social';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <div className="home">
              <Header />
              <HeroImages />
              <Intro />
              <Featured />
              <Social />
              <Footer />  
            </div>
        );
    }
}

export default Home;

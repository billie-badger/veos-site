import React, { Component } from 'react';

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

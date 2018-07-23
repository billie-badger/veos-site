import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <div className="intro">
                    <div className="intro-text">Introduction Text</div>
                    <div className="intro-inner">
                        <div className="intro-img-desc">
                            <div className="intro-desc-text">Description Text</div>
                            <div className="intro-img" />
                        </div>
                        <div className="intro-img-desc">
                            <div className="intro-img" />
                            <div className="intro-desc-text">Description Text</div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Intro;

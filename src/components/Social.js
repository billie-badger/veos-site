import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div className="social">
                <div className="social-inner">
                    <p>Follow Our Journey</p>
                    <input type="text" placeholder="Email Address" />
                    <button type="submit">Subscribe</button>
                    <div className="icons">
                        <div className="icon" />
                        <div className="icon" />
                        <div className="icon" />
                        <div className="icon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;

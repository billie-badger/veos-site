import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>veos apparel</h1>
                <ul>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>Contact/FAQ</li>
                </ul>
            </div>
        );
    }
}

export default Header;

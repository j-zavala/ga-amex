import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <button>{this.props.tabs[0]}</button>
                <button>{this.props.tabs[1]}</button>
            </div>
        );
    }
}

export default Header;
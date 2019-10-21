import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="flex-container">
                <nav class="nav">
                    <button class="btn btn-default">Previous Recipe</button>
                    <button class="btn btn-default">Next Recipe</button>
                </nav>
            </div>
        );
    }
}

export default Nav;
import React, { Component } from 'react'

class Course extends Component {

    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.code}</div>
                <hr />
            </div>
        )
    }

}

export default Course

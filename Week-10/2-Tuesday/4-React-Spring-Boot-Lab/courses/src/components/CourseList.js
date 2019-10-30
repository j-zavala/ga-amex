import React, { Component } from 'react'

import Course from './Course'
import CourseNewForm from './CourseNewForm'

class CourseList extends Component {
    state = {
        courses: []
    }

    async componentDidMount() {
        try {
            const response = await fetch('/course/list')
            this.setState({ courses: response.data })
        } catch (error) {
            console.log('Error retrieving ideas!')
        }
    }

    createCourse = async (course, index) => {
        try {
            const newCourseResponse = await fetch(`/course/add`, course)

            const updatedCoursesList = [...this.state.courses]
            updatedCoursesList.push(newCourseResponse.data)
            this.setState({ courses: updatedCoursesList })

        } catch (error) {
            console.log('Error creating new Course!')
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseNewForm createCourse={this.createCourse} />
                {
                    this.state.courses && this.state.courses.map((course, key) => {
                        return <Course
                            name={course.name}
                            code={course.code}
                            key={key}
                        />
                    })
                }
            </div>
        )
    }
}

export default CourseList
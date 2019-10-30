package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Course;

public interface CourseService {

    public Course createCourse(Course course);

    public Iterable<Course> listCourses();
}

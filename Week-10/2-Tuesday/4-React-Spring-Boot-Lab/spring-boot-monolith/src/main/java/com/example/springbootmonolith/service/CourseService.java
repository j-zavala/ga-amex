package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Course;

public interface CourseService {

    public Course createCourse(Course course);

    public Iterable<Course> listCourses();

    public Course findById(int id);

    public Course save(Course course);

    void deleteById(int id);
}

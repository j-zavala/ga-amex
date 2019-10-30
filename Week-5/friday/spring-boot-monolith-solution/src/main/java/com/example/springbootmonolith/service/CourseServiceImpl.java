package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Course;
import com.example.springbootmonolith.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    CourseRepository courseRepository;

    @Override
    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Iterable<Course> listCourses(){
        return courseRepository.findAll();
    }
}

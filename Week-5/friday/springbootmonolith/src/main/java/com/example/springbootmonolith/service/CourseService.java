package com.example.springbootmonolith.service;
import com.example.springbootmonolith.models.Course;
import org.springframework.stereotype.Component;

@Component
public interface CourseService {
    public Course createCourse(Course course);

    public Iterable<Course> listCourses();

}

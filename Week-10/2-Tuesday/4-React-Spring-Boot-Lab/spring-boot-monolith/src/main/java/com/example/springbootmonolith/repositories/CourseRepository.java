package com.example.springbootmonolith.repositories;

import com.example.springbootmonolith.models.Course;
import org.springframework.data.repository.CrudRepository;

public interface CourseRepository extends CrudRepository<Course, Integer> {
    Course findById(int id);
}

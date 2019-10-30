package com.example.springbootmonolith.repository;

import com.example.springbootmonolith.models.Course;
import org.springframework.data.repository.CrudRepository;



public interface CourseRepository extends CrudRepository <Course,Integer> {
}

package com.example.springbootmonolith.controller;

import com.example.springbootmonolith.models.Course;
import com.example.springbootmonolith.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/course")
public class CourseController {

    @Autowired
    CourseService courseService;

    @PostMapping
    public Course createCourse(@RequestBody Course course){
        return courseService.createCourse(course);
    }

    @GetMapping("/list")
    public Iterable<Course> listCourses(){
        return courseService.listCourses();
    }

    @PutMapping("/update")
    public Course updateCourseById(@RequestBody Course courseRequest) {
        Course courseFromDb = courseService.findById(courseRequest.getId());

        courseFromDb.setName(courseRequest.getName());
        courseFromDb.setCode(courseRequest.getCode());
        return courseService.save(courseFromDb);
    }

    @DeleteMapping("/delete")
    public HttpStatus deletePostById(@RequestBody Course courseRequest) {
        courseService.deleteById(courseRequest.getId());
        return HttpStatus.OK;
    }

}

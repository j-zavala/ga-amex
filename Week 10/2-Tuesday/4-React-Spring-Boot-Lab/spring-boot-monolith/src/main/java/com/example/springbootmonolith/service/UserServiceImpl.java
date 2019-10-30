package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.Course;
import com.example.springbootmonolith.models.User;
import com.example.springbootmonolith.models.UserRole;
import com.example.springbootmonolith.repositories.CourseRepository;
import com.example.springbootmonolith.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserRoleService userRoleService;

    @Autowired
    CourseService courseService;

    @Autowired
    CourseRepository courseRepository;

    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Iterable<User> listUsers() {
        return userRepository.findAll();
    }

    @Override
    public User createUser(User newUser) {
        UserRole userRole = userRoleService.getRole(newUser.getUserRole().getName());
        newUser.setUserRole(userRole);
        return userRepository.save(newUser);
    }

    @Override
    public User login(String username, String password) {
        return userRepository.login(username, password);
    }

    @Override
    public User addCourse(String username, int courseId) {
        Course course = courseRepository.findById(courseId);
        User user = getUser(username);
        user.addCourse(course);

        return userRepository.save(user);
    }

    @Override
    public HttpStatus deleteById(Long userId){
        userRepository.deleteById(userId);
        return HttpStatus.OK;
    }
}

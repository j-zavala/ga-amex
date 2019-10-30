package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.User;
import org.springframework.http.HttpStatus;

public interface UserService {

    public User getUser(String username);

    public Iterable<User> listUsers();

    public User createUser(User newUser);

    public User login(String username, String password);

    public HttpStatus deleteById(Long userId);

    public User addCourse(String username, int courseId);
}
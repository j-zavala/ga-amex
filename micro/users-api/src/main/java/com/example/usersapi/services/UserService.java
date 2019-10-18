package com.example.usersapi.services;

import com.example.usersapi.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    // CREATE
    public HttpStatus createUsers(User user);

    // READ
    public Iterable<User> getAll();

    //UPDATE
    public HttpStatus updateUsers(Long id, User userRequest);

    //DELETE
    public HttpStatus deleteUser(long id);

}

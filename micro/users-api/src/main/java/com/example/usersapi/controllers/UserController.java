package com.example.usersapi.controllers;

import com.example.usersapi.models.User;
import com.example.usersapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    // CREATE
    @PostMapping("/create")
    public HttpStatus createUser(@RequestBody User newUser) {
        return userService.createUsers(newUser);
    }

    // READ
    @GetMapping("/all")
    public Iterable<User> getAllSongs() {
        return userService.getAll();
    }

    // UPDATE
    @PatchMapping("/update/{id}")
    public HttpStatus updateUser(@PathVariable Long id, @RequestBody User usersRequest) {
        return userService.updateUsers(id, usersRequest);
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public HttpStatus deleteUsers(@PathVariable Long id) {
        return userService.deleteUser(id);
    }
}

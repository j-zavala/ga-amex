package com.example.usersapi.services;

import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    public UserRepository userRepository;

    // CREATE
    @Override
    public HttpStatus createUsers(User user) {
        userRepository.save(user);
        return HttpStatus.OK;
    };

    // READ
    @Override
    public Iterable<User> getAll() {
        return userRepository.findAll();
    };

    // UPDATE
    @Override
    public HttpStatus updateUsers(Long id, User userRequest) {
        User userToUpdate = userRepository.findById(id).get();
        userToUpdate.setId(userRequest.getId());
        userToUpdate.setFirstName(userRequest.getFirstName());
        userToUpdate.setLastName(userRequest.getLastName());
        userRepository.save(userToUpdate);
        return HttpStatus.OK;
    }

    // DELETE
    @Override
    public HttpStatus deleteUser(long id) {
        userRepository.deleteById(id);
        return HttpStatus.OK;
    }
}

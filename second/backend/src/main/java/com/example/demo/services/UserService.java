package com.example.demo.services;

import com.example.demo.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getUsers();
    Optional<User> getUserById(Long id);
    User updateUser(User user);
    void deleteUser(Long id);

}

package com.guided_challenge.users.services;

import com.guided_challenge.users.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getUsers();
    Optional<User> getUserById(Long idUser);
    User createUser(User user);
    User updateUser(User user);
    Optional<User> deleteUser(Long idUser);

}

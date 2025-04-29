package com.guided_challenge.users.services;

import com.guided_challenge.users.entities.User;
import com.guided_challenge.users.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> getUserById(Long idUser) {
        return this.userRepository.findById(idUser);
    }

    @Transactional()
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Transactional()
    @Override
    public User updateUser(User user){
        return userRepository.save(user);
    }

    @Override
    public Optional<User> deleteUser(Long idUser) {
        Optional<User> user = userRepository.findById(idUser);
        if(user.isPresent()) {
            userRepository.deleteById(idUser);
            return user;
        }
        else {
            return null;
        }
    }
}

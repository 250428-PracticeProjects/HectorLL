package com.guided_challenge.users.controllers;

import com.guided_challenge.users.entities.User;
import com.guided_challenge.users.services.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
    this.userService = userService;
    }

    @GetMapping("/index")
    public String index(){
        return "Hola";
    }

    @GetMapping("/Users")
    public List<User> getUsers(){
        return this.userService.getUsers();
    }

    @GetMapping("User/{id}")
    public Optional<User> getUserById(@PathVariable Long id){
        return this.userService.getUserById(id);
    }

    @PutMapping("/User")
    public User updateUser(@RequestBody User user){
        return this.userService.updateUser(user);
    }

    @PostMapping("/User")
    public User createUser(@RequestBody User user){
        return this.userService.createUser(user);
    }

    @DeleteMapping("/User/{id}")
    public Optional<User> deleteUser(@PathVariable("id") Long idUser){
        return this.userService.deleteUser(idUser);
    }

}

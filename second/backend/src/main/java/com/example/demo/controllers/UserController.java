package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.services.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    UserServiceImpl userService;

    public UserController(UserServiceImpl userService){
    this.userService=userService;
    }

    @GetMapping("/")
    public String index(){
        return "Nuevo back";
    }

    @GetMapping("/Users")
    public List<User> getUsers(){
        return this.userService.getUsers();
    }

    @GetMapping("/User/{id}")
    public Optional<User> getUserById(@PathVariable Long id){
        return this.userService.getUserById(id);
    }

    @PutMapping("/User")
    public User updateUser(@RequestBody User user){
        return this.userService.updateUser(user);
    }

    @DeleteMapping("/User/{id}")
    public void deleteUser(@PathVariable Long id){
         this.userService.deleteUser(id);
    }



}

package com.guided_challenge.users.repository;

import com.guided_challenge.users.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface UserRepository  extends JpaRepository<User, Long> {



    }

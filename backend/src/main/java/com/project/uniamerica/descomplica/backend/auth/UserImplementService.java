package com.project.uniamerica.descomplica.backend.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserImplementService {

    @Autowired
    private UserRepository userRepository;

    public UserEntity findById(Long id){
        Optional<UserEntity> obj = this.userRepository.findById(id);
        return obj.orElse(null);
    }
    public UserEntity insert(UserEntity obj) {

        return this.userRepository.save(obj);
    }

}

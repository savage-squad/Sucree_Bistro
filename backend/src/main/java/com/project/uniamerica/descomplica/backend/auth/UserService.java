package com.project.uniamerica.descomplica.backend.auth;

import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    UserEntity saveUser(UserEntity user);
    Role saveRole(Role role);
    void addRoleToUser(String email, String RoleName);
    UserEntity getUser(String email);
    List<UserEntity> getUsers();
}

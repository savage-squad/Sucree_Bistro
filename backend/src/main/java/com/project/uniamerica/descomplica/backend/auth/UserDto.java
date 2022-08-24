package com.project.uniamerica.descomplica.backend.auth;

import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.Email;

@Data
public class UserDto {
    private String email;
    private String password;
    private Role role;
}

package com.project.uniamerica.descomplica.backend.configuration.userForm;

import com.project.uniamerica.descomplica.backend.user.UserDto;
import com.project.uniamerica.descomplica.backend.user.UserRepository;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class UpdateUserForm {

    @NotNull
    @NotEmpty
    private String name;
    @NotNull
    @NotEmpty
    private String username;
    @NotNull
    @NotEmpty
    private String email;
    @NotNull
    @NotEmpty
    private String typeUser;

    public UpdateUserForm(String name, String username, String email, String typeUser) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.typeUser = typeUser;
    }

    public UserDto updateUser(UserDto user, UserRepository userRepository){

        user.setName(this.name);
        user.setEmail(this.email);

        return user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTypeUser() {
        return typeUser;
    }

    public void setTypeUser(String typeUser) {
        this.typeUser = typeUser;
    }
}
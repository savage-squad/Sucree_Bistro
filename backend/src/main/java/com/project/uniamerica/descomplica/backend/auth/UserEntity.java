package com.project.uniamerica.descomplica.backend.auth;

import com.project.uniamerica.descomplica.backend.person.PersonEntity;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Data
public class UserEntity extends PersonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email(message = "Please provide a valid email address")
    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;


    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;


    public Object getId() {
        return id;
    }

    public void setId(Object o) {
    }
}

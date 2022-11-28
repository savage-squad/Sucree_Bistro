package com.project.uniamerica.descomplica.backend.userType;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class UserTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    public UserTypeEntity(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public UserTypeEntity(String name) {
        this.name = name;
    }
}

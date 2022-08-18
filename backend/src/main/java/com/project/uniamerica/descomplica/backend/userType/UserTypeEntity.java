package com.project.uniamerica.descomplica.backend.userType;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class UserTypeEntity {

    @Id
    private Long id;

    @Column
    private String name;


}

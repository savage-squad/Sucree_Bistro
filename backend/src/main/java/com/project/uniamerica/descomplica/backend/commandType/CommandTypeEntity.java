package com.project.uniamerica.descomplica.backend.commandType;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="commandType")
public class CommandTypeEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public CommandTypeEntity() {
    }

    public CommandTypeEntity(int id) {
        this.id = id;
    }
}

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

    @Column(nullable = false, length = 45)
    private String nome;

    public CommandTypeEntity() {
    }

    public CommandTypeEntity(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }
}

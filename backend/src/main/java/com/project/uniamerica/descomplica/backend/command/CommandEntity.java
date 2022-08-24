package com.project.uniamerica.descomplica.backend.command;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Data
@Table(name="comands")
public class CommandEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false, length = 45)
    private int pedidos_id;

    @Column(nullable = false, length = 45)
    private int cliente_id;

    @Column(nullable = false, length = 45)
    private int mesa_id;

    @Column(nullable = false, length = 45)
    private int tipoComanda_id;


}

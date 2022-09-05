package com.project.uniamerica.descomplica.backend.table;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="tables")
public class TableEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false, length = 45)
    private String mesacol;

    public TableEntity() {
    }

    public TableEntity(int id, String mesacol) {
        this.id = id;
        this.mesacol = mesacol;
    }
}

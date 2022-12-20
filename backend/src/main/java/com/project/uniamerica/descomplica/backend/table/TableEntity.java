package com.project.uniamerica.descomplica.backend.table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="tables")
public class TableEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Getter @Setter
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Getter @Setter
    @Column(nullable = false, length = 45)
    private String referenciaMesa;

    @Getter @Setter
    @Column(nullable = false, length = 45)
    private Status status;

    public TableEntity() {
    }

    public TableEntity(int id, String referenciaMesa) {
        this.id = id;
        this.referenciaMesa = referenciaMesa;
    }
}

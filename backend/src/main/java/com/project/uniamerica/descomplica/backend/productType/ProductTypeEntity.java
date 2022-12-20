package com.project.uniamerica.descomplica.backend.productType;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="productType")
public class ProductTypeEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Getter @Setter
    @Column(nullable = false, length = 45)
    private String nome;

    public ProductTypeEntity() {
    }

    public ProductTypeEntity(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }
}

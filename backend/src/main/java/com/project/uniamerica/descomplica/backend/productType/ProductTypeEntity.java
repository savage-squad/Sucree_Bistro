package com.project.uniamerica.descomplica.backend.productType;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="productType")
public class ProductTypeEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public ProductTypeEntity() {
    }

    public ProductTypeEntity(int id) {
        this.id = id;
    }
}

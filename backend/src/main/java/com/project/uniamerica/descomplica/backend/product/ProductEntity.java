package com.project.uniamerica.descomplica.backend.product;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Data
@Table(name="product")
public class ProductEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false, length = 45)
    private String nomeDoPrato;

    @Column(nullable = false, length = 45)
    private float valor;

    @Column(nullable = false, length = 45)
    private int tipoProdutoId;


}

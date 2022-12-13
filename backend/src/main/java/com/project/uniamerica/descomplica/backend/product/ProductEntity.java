package com.project.uniamerica.descomplica.backend.product;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="products")
public class ProductEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false, length = 45)
    private String nomeDoPrato;

    @Column(nullable = false, length = 100)
    private String descricao;

    @Column(nullable = false, length = 45)
    private float valor;

    @Column(nullable = false, length = 45)
    private int tipoProdutoId;

    public ProductEntity() {
    }

    public ProductEntity(int id, String nomeDoPrato, float valor) {
        this.id = id;
        this.nomeDoPrato = nomeDoPrato;
        this.valor = valor;
    }
}

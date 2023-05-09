package com.project.uniamerica.descomplica.backend.product;

import com.project.uniamerica.descomplica.backend.productType.ProductTypeDto;
import com.project.uniamerica.descomplica.backend.productType.ProductTypeEntity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="products")
public class ProductEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Getter @Setter
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Getter @Setter
    @Column(nullable = false, length = 45)
    private String nomeDoPrato;

    @Getter @Setter
    @Column(nullable = false, length = 100)
    private String descricao;

    @Getter @Setter
    @Column(nullable = false, length = 45)
    private float valor;


    @Getter @Setter
    @ManyToOne(cascade = {CascadeType.MERGE })
    @JoinColumn(name = "categoria_id")
    private ProductTypeEntity categoria;

    @Getter @Setter
    @Column(nullable = false, length = 45)
    private boolean ativo;

    public ProductEntity() {
    }

    public ProductEntity(int id, String nomeDoPrato, float valor) {
        this.id = id;
        this.nomeDoPrato = nomeDoPrato;
        this.valor = valor;
    }
}

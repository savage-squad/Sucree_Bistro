package com.project.uniamerica.descomplica.backend.order;

import com.project.uniamerica.descomplica.backend.command.CommandDto;
import com.project.uniamerica.descomplica.backend.command.CommandEntity;
import com.project.uniamerica.descomplica.backend.product.ProductDto;
import com.project.uniamerica.descomplica.backend.product.ProductEntity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="orders")
public class OrderEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Getter @Setter
    @ManyToOne(cascade = {CascadeType.MERGE})
    @JoinColumn(name = "command_id")
    private CommandEntity command;


    @Getter @Setter
    @Column(nullable = false, length = 45)
    private float total;

    @Getter @Setter
    @Column(nullable = false, length = 45)
    private Status status;

    @Getter @Setter
    @Column(nullable = false, length = 100)
    private String observacao;

    @Getter @Setter
    @ManyToOne(cascade = {CascadeType.MERGE})
    @JoinColumn(name = "product_id")
    private ProductEntity product;



    public OrderEntity() {
    }

    public OrderEntity(int id) {

        this.id = id;
    }
}

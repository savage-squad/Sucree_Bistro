package com.project.uniamerica.descomplica.backend.order;

import lombok.Data;

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

    @Column(nullable = false, length = 45)
    private int product_id;

    @Column(nullable = false, length = 45)
    private int status_id;

    public OrderEntity() {
    }

    public OrderEntity(int id) {

        this.id = id;
    }
}

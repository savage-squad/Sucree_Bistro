package com.project.uniamerica.descomplica.backend.product;
import javax.persistence.*;

@Entity
public class ProductEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;
    private Float value;
    private Long type;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getValue() {
        return value;
    }

    public void setValue(Float value) {
        this.value = value;
    }

    public Long getType() {
        return type;
    }

    public void setType(Long type) {
        this.type = type;
    }

    public ProductEntity() {}

    public ProductEntity(Long id, String name, Float value, Long type) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.type = type;
    }

    @Override
    public String toString() {
        return "ProductEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", value=" + value +
                ", type=" + type +
                '}';
    }
}

package com.project.uniamerica.descomplica.backend.productType;
import javax.persistence.*;

@Entity
public class ProductTypeEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;

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
    public ProductTypeEntity() {}
    public ProductTypeEntity(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "ProductTypeEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}

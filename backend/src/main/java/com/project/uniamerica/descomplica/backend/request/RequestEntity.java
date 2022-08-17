package com.project.uniamerica.descomplica.backend.request;
import javax.persistence.*;

@Entity
public class RequestEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private Long OS;
    private Long products;
    private Long status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOS() {
        return OS;
    }

    public void setOS(Long OS) {
        this.OS = OS;
    }

    public Long getProducts() {
        return products;
    }

    public void setProducts(Long products) {
        this.products = products;
    }

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
        this.status = status;
    }

    public RequestEntity() {}

    public RequestEntity(Long id, Long OS, Long products, Long status) {
        this.id = id;
        this.OS = OS;
        this.products = products;
        this.status = status;
    }

    @Override
    public String toString() {
        return "RequestEntity{" +
                "id=" + id +
                ", OS=" + OS +
                ", products=" + products +
                ", status=" + status +
                '}';
    }
}

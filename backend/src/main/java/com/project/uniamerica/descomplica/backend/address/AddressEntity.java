package com.project.uniamerica.descomplica.backend.address;
import javax.persistence.*;

@Entity
public class AddressEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private Long street;
    private Long neighborhood;
    private Long city;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Long getStreet() {
        return street;
    }

    public void setStreet(Long street) {
        this.street = street;
    }

    public Long getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(Long neighborhood) {
        this.neighborhood = neighborhood;
    }

    public Long getCity() {
        return city;
    }

    public void setCity(Long city) {
        this.city = city;
    }

    public AddressEntity() {
    }

    public AddressEntity(Long id, Long street, Long neighborhood, Long city) {
        this.id = id;
        this.street = street;
        this.neighborhood = neighborhood;
        this.city = city;
    }

    @Override
    public String toString() {
        return "AddressEntity{" +
                "id=" + id +
                ", street=" + street +
                ", neighborhood=" + neighborhood +
                ", city=" + city +
                '}';
    }
}

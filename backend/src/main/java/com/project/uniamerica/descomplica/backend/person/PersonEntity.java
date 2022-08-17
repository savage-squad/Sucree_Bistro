package com.project.uniamerica.descomplica.backend.person;
import javax.persistence.*;

@Entity
public class PersonEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private Long address;
    private String complement;
    private Integer number;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Long getAddress() {
        return address;
    }

    public void setAddress(Long address) {
        this.address = address;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }

    public Integer getNumber() {
        return number;
    }

    public PersonEntity() {
    }

    public PersonEntity(Long id, Long address, String complement, Integer number) {
        this.id = id;
        this.address = address;
        this.complement = complement;
        this.number = number;
    }

    @Override
    public String toString() {
        return "PersonEntity{" +
                "id=" + id +
                ", address=" + address +
                ", complement='" + complement + '\'' +
                ", number=" + number +
                '}';
    }
}

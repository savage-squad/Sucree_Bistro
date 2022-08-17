package com.project.uniamerica.descomplica.backend.publicPace;
import javax.persistence.*;

@Entity
public class PlublicEntity {
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

    public PlublicEntity() {
    }

    public PlublicEntity(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "PlublicEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}

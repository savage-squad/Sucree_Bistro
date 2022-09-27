package com.project.uniamerica.descomplica.backend.userType;
import javax.persistence.*;

@Entity
public class UserTypeEntity {
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

    public UserTypeEntity() {

    }

    public UserTypeEntity(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "UserTypeEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}

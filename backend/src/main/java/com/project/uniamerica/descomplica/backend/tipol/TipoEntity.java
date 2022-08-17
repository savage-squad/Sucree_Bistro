package com.project.uniamerica.descomplica.backend.tipol;
import javax.persistence.*;

@Entity
public class TipoEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

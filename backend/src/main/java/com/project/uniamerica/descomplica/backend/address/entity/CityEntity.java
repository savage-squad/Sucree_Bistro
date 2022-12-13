package com.project.uniamerica.descomplica.backend.address.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "citys")
@NoArgsConstructor
public class CityEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "state_id", nullable = false)
    private StateEntity state;

    public CityEntity(Long id) {
        this.id = id;
    }

}
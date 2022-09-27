package com.project.uniamerica.descomplica.backend.address;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.uniamerica.descomplica.backend.address.entity.CityEntity;
import com.project.uniamerica.descomplica.backend.client.ClientEntity;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "address")
@Getter
@Setter
public class AddressEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer number;
    private String zipCode;

    @Enumerated(EnumType.STRING)
    private AddressType type;
    private String district;
    private String publicPlace;
    private String complement;
    private String viacepUrl;

    @ManyToOne
    @JoinColumn(name = "city_id", nullable = false)
    private CityEntity city;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_id", nullable = false)
    private ClientEntity client;


}
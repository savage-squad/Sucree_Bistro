package com.project.uniamerica.descomplica.backend.client;

import com.project.uniamerica.descomplica.backend.address.AddressEntity;
import com.project.uniamerica.descomplica.backend.person.PersonEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name = "clients")
public class ClientEntity extends PersonEntity {
    @Id
    private Long id;
    @Column
    private String document;
    @Column
    private String cpf;

    @OneToMany(mappedBy = "client",cascade= CascadeType.ALL, fetch = FetchType.EAGER)
    private List<AddressEntity> address = new ArrayList<>();

}
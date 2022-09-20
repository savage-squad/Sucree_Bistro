package com.project.uniamerica.descomplica.backend.client;

import lombok.Data;

@Data
public class ClientResponse {
    private Long id;
    private String fullName;
    private String telephone;
    private String email;
    private String cpf;
    private String document;

//    public ClientResponse(ClientEntity register) {
//        this.id = register.getId();
//        this.fullName = register.getFullName();
//        this.telephone = register.getTelephone();
//        this.email = register.getEmail();
//        this.cpf = register.getCpf();
//        this.document = register.getDocumento();
//    }
}
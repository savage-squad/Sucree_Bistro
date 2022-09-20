package com.project.uniamerica.descomplica.backend.client;

import lombok.Data;

@Data
public class ClientRequest {
    private String fullName;
    private String telephone;
    private String email;
    private String cpf;
    private String document;

//    public ClientEntity toModel(){
//        var client = new ClientEntity();
//        client.setFullName(fullName);
//        client.setDocument(document);
//        client.setCpf(cpf);
//        client.setEmail(email);
//        client.setTelephone(telephone);
//        return client;
//    }
}
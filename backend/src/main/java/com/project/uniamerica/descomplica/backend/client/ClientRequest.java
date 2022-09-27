package com.project.uniamerica.descomplica.backend.client;

import lombok.Data;

@Data
public class ClientRequest {
    private String fullName;
    private String telephone;
    private String email;
    private String cpf;
    private String document;

   public ClientEntity toModel(){
       ClientEntity client = new ClientEntity();
         client.setDocument(document);
       return client;
   }
}
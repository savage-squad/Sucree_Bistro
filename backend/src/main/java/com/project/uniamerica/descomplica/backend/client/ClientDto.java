package com.project.uniamerica.descomplica.backend.client;

import lombok.Data;

@Data
public class ClientDto {
    private Long id;
    private String fullName;
    private String telephone;
    private String email;
    private String cpf;
    private String document;


   public void ClientResponse(ClientEntity register) {
       this.id = register.getId();
       this.fullName = register.getName();
      this.telephone = register.getTelefone();
    this.cpf = register.getCpf();
      this.document =register.getDocument();
      this.email=register.getEmail();
  }
}
package com.project.uniamerica.descomplica.backend.client;
import javax.persistence.*;

@Entity
public class ClientEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;
    private String cpf;
    private String rg;
    private String cep;
    private String complement;
    private Integer addressNumber;

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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }

    public Integer getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(Integer addressNumber) {
        this.addressNumber = addressNumber;
    }

    public ClientEntity() {
    }

    public ClientEntity(Long id, String name, String cpf, String rg, String cep, String complement, Integer addressNumber) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.rg = rg;
        this.cep = cep;
        this.complement = complement;
        this.addressNumber = addressNumber;
    }

    @Override
    public String toString() {
        return "ClientEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", cpf='" + cpf + '\'' +
                ", rg='" + rg + '\'' +
                ", cep='" + cep + '\'' +
                ", complement='" + complement + '\'' +
                ", addressNumber=" + addressNumber +
                '}';
    }
}

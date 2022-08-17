package com.project.uniamerica.descomplica.backend.command;
import javax.persistence.*;

@Entity
public class ComandEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private Long table;
    private Long client;
    private Long request;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTable() {
        return table;
    }

    public void setTable(Long table) {
        this.table = table;
    }

    public Long getClient() {
        return client;
    }

    public void setClient(Long client) {
        this.client = client;
    }

    public Long getRequest() {
        return request;
    }

    public void setRequest(Long request) {
        this.request = request;
    }

    public ComandEntity() {
    }

    public ComandEntity(Long id, Long table, Long client, Long request) {
        this.id = id;
        this.table = table;
        this.client = client;
        this.request = request;
    }

    @Override
    public String toString() {
        return "ComandEntity{" +
                "id=" + id +
                ", table=" + table +
                ", client=" + client +
                ", request=" + request +
                '}';
    }
}

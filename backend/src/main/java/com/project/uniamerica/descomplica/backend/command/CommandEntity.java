package com.project.uniamerica.descomplica.backend.command;

import com.google.gson.Gson;
import com.project.uniamerica.descomplica.backend.table.TableDto;
import com.project.uniamerica.descomplica.backend.table.TableEntity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="comands")
public class  CommandEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Getter @Setter
    @ManyToOne
    @JoinColumn(name = "table_id")
    private TableEntity table;

    @Id
    @Getter @Setter
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Getter @Setter
    @Column(nullable = false, length = 45)
    private int cliente_id;


    public CommandEntity() {

    }

    public CommandEntity(int id, String nome) {
        this.id = id;

    }

    public static void main(String[] args) {
        Gson gson = new Gson();

        CommandEntity command = new CommandEntity();
        System.out.printf(gson.toJson(command));
    }


}

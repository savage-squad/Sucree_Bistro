package com.project.uniamerica.descomplica.backend.order;

import com.google.gson.Gson;
import com.project.uniamerica.descomplica.backend.command.CommandDto;
import com.project.uniamerica.descomplica.backend.product.ProductDto;
import com.project.uniamerica.descomplica.backend.table.TableDto;
import lombok.Data;
@Data
public class OrderDto {
    private int id;
    private ProductDto product;
    private Status status;
    private CommandDto command;
    private float total;
    private String observacao;


    public static void main(String[] args) {
        Gson g = new Gson();
        OrderDto o = new OrderDto();
        CommandDto commandDto = new CommandDto();
        commandDto.setCliente_id(1);
        TableDto table = new TableDto();

        table.setId(2);
        table.setStatus(com.project.uniamerica.descomplica.backend.table.Status.ocupado);
        table.setReferenciaMesa("A2");

        commandDto.setTable(table);

        o.setCommand(commandDto);
        o.setObservacao("sem cebola");
        o.setTotal(322);
        System.out.printf(g.toJson(o));
    }
}

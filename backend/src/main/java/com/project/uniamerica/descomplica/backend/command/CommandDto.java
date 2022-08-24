package com.project.uniamerica.descomplica.backend.command;

import lombok.Data;

@Data
public class CommandDto {
    private int id;
    private int pedidos_id;
    private int cliente_id;
    private int mesa_id;
    private int tipoComanda_id;


}

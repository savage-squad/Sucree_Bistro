package com.project.uniamerica.descomplica.backend.command;

import com.project.uniamerica.descomplica.backend.table.TableDto;
import lombok.Data;

@Data
public class CommandDto {
    private int id;
    private int cliente_id;
    private TableDto table;

    public CommandDto() {
    }


}

package com.project.uniamerica.descomplica.backend.commandType;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/commandTypes")
@Api(value = "API REST CommandTypes")
public class CommandTypeResource {

    final CommandTypeService commandTypeService;

    @Autowired
    public CommandTypeResource(CommandTypeService commandTypeService) {
        this.commandTypeService = commandTypeService;
    }

    @GetMapping()
    @ApiOperation(value="Retorna uma lista de tipos de Comandas")
    public ResponseEntity<List<CommandTypeEntity>> getAllCommandType() {
        return ResponseEntity.status(HttpStatus.OK).body(commandTypeService.findAll());
    }

    @PostMapping
    @ApiOperation(value="Cadastra um tipo de comanda")
    public ResponseEntity<Object> saveCommandType(@RequestBody @Valid CommandTypeDto commandTypeDto) {

        var commandTypeEntity = new CommandTypeEntity();
        BeanUtils.copyProperties(commandTypeDto, commandTypeEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(commandTypeService.save(commandTypeEntity));
    }



    @GetMapping("/{id}")
    @ApiOperation(value="Retorna um tipo de comanda especifico")
    public ResponseEntity<Object> getOnecommandType(@PathVariable(value = "id") int id) {
        Optional<CommandTypeEntity> commandTypeEntityOptional = commandTypeService.findById(id);
        if (!commandTypeEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("commandType not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(commandTypeEntityOptional.get());
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value="Deleta um tipo de comanda")
    public ResponseEntity<Object> deletecommandType(@PathVariable(value = "id") int id) {
        Optional<CommandTypeEntity> commandTypeEntityOptional = commandTypeService.findById(id);
        if (!commandTypeEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("commandType not found.");
        }
        commandTypeService.delete(commandTypeEntityOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("commandType deleted sucessfully");
    }

    @PutMapping("/{id}")
    @ApiOperation(value="Atualiza tipo de comanda")
    public ResponseEntity<Object> updatecommandType(@PathVariable(value = "id") int id,
                                                    @RequestBody @Valid CommandTypeDto commandTypeDto) {
        Optional<CommandTypeEntity> commandTypeEntityOptional = commandTypeService.findById(id);
        if (!commandTypeEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("commandType not found.");
        }
        var commandTypeEntity = new CommandTypeEntity();
        BeanUtils.copyProperties(commandTypeDto, commandTypeEntity);
        commandTypeEntity.setId(commandTypeEntityOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(commandTypeService.save(commandTypeEntity));
    }


}
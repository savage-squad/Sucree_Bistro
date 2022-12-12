package com.project.uniamerica.descomplica.backend.command;


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
@RequestMapping("/commands")
@Api(value = "API REST Command")
public class CommandResource {

    final CommandService commandService;

    @Autowired
    public CommandResource(CommandService commandService) {
        this.commandService = commandService;
    }

    @GetMapping()
    @ApiOperation(value="Retorna uma lista de comandas")
    public ResponseEntity<List<CommandEntity>> getAllCommand() {
        return ResponseEntity.status(HttpStatus.OK).body(commandService.findAll());
    }

    @PostMapping
    @ApiOperation(value="Cadastra comanda")
    public ResponseEntity<Object> saveCommand(@RequestBody @Valid CommandDto commandDto) {

        var commandEntity = new CommandEntity();
        BeanUtils.copyProperties(commandDto, commandEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(commandService.save(commandEntity));
    }



    @GetMapping("/{id}")
    @ApiOperation(value="Retorna uma comanda especifico")
    public ResponseEntity<Object> getOnecommand(@PathVariable(value = "id") int id) {
        Optional<CommandEntity> commandEntityOptional = commandService.findById(id);
        if (!commandEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("command not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(commandEntityOptional.get());
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value="deleta comanda")
    public ResponseEntity<Object> deletecommand(@PathVariable(value = "id") int id) {
        Optional<CommandEntity> commandEntityOptional = commandService.findById(id);
        if (!commandEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("command not found.");
        }
        commandService.delete(commandEntityOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("command deleted sucessfully");
    }

    @PutMapping("/{id}")
    @ApiOperation(value="atualiza comanda")
    public ResponseEntity<Object> updatecommand(@PathVariable(value = "id") int id,
                                                @RequestBody @Valid CommandDto commandDto) {
        Optional<CommandEntity> commandEntityOptional = commandService.findById(id);
        if (!commandEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("command not found.");
        }
        var commandEntity = new CommandEntity();
        BeanUtils.copyProperties(commandDto, commandEntity);
        commandEntity.setId(commandEntityOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(commandService.save(commandEntity));
    }


}
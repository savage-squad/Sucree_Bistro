package com.project.uniamerica.descomplica.backend.commandType;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/commandTypes")
public class CommandTypeResource {

    final CommandTypeService commandTypeService;

    @Autowired
    public CommandTypeResource(CommandTypeService commandTypeService) {
        this.commandTypeService = commandTypeService;
    }

    @GetMapping()
    public ResponseEntity<List<CommandTypeEntity>> getAllCommandType() {
        return ResponseEntity.status(HttpStatus.OK).body(commandTypeService.findAll());
    }

    @PostMapping
    public ResponseEntity<Object> saveCommandType(@RequestBody @Valid CommandTypeDto commandTypeDto) {

        var commandTypeEntity = new CommandTypeEntity();
        BeanUtils.copyProperties(commandTypeDto, commandTypeEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(commandTypeService.save(commandTypeEntity));
    }



    @GetMapping("/{id}")
    public ResponseEntity<Object> getOnecommandType(@PathVariable(value = "id") UUID id) {
        Optional<CommandTypeEntity> commandTypeEntityOptional = commandTypeService.findById(id);
        if (!commandTypeEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("commandType not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(commandTypeEntityOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletecommandType(@PathVariable(value = "id") UUID id) {
        Optional<CommandTypeEntity> commandTypeEntityOptional = commandTypeService.findById(id);
        if (!commandTypeEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("commandType not found.");
        }
        commandTypeService.delete(commandTypeEntityOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("commandType deleted sucessfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updatecommandType(@PathVariable(value = "id") UUID id,
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
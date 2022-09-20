package com.project.uniamerica.descomplica.backend.table;


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
@RequestMapping("/tables")
@Api(value = "API REST Tables")
public class TableResource {

    final TableService tableService;

    @Autowired
    public TableResource(TableService tableService) {
        this.tableService = tableService;
    }

    @GetMapping()
    @ApiOperation(value="Retorna uma lista mesas")
    public ResponseEntity<List<TableEntity>> getAllTable() {
        return ResponseEntity.status(HttpStatus.OK).body(tableService.findAll());
    }

    @PostMapping
    @ApiOperation(value="Cadastra mesas")
    public ResponseEntity<Object> saveTable(@RequestBody @Valid TableDto tableDto) {

        var tableEntity = new TableEntity();
        BeanUtils.copyProperties(tableDto, tableEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(tableService.save(tableEntity));
    }



    @GetMapping("/{id}")
    @ApiOperation(value="Retorna uma mesa especifica")
    public ResponseEntity<Object> getOnetable(@PathVariable(value = "id") int id) {
        Optional<TableEntity> tableEntityOptional = tableService.findById(id);
        if (!tableEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("table not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(tableEntityOptional.get());
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value="Deleta mesa")
    public ResponseEntity<Object> deletetable(@PathVariable(value = "id") int id) {
        Optional<TableEntity> tableEntityOptional = tableService.findById(id);
        if (!tableEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("table not found.");
        }
        tableService.delete(tableEntityOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("table deleted sucessfully");
    }

    @PutMapping("/{id}")
    @ApiOperation(value="Atualiza mesa")
    public ResponseEntity<Object> updatetable(@PathVariable(value = "id") int id,
                                                @RequestBody @Valid TableDto tableDto) {
        Optional<TableEntity> tableEntityOptional = tableService.findById(id);
        if (!tableEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("table not found.");
        }
        var tableEntity = new TableEntity();
        BeanUtils.copyProperties(tableDto, tableEntity);
        tableEntity.setId(tableEntityOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(tableService.save(tableEntity));
    }


}
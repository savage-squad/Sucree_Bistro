package com.project.uniamerica.descomplica.backend.order;


import com.project.uniamerica.descomplica.backend.command.CommandEntity;
import com.project.uniamerica.descomplica.backend.product.ProductEntity;
import com.project.uniamerica.descomplica.backend.productType.ProductTypeDto;
import com.project.uniamerica.descomplica.backend.productType.ProductTypeEntity;
import com.project.uniamerica.descomplica.backend.table.TableEntity;
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
@RequestMapping("/orders")
@Api(value = "API REST orders")
public class OrderResource {

    final OrderService orderService;

    @Autowired
    public OrderResource(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping()
    @ApiOperation(value="Retorna uma lista de pedidos")
    public ResponseEntity<List<OrderEntity>> getAllRequest() {
        return ResponseEntity.status(HttpStatus.OK).body(orderService.findAll());
    }

    @PostMapping
    @ApiOperation(value="Cadastra um  pedido")
    public ResponseEntity<Object> saveRequest(@RequestBody @Valid OrderDto orderDto) {
        var requestEntity = new OrderEntity();
        CommandEntity commandEntity = new CommandEntity();

        ProductTypeEntity categoria = new ProductTypeEntity();
        categoria.setId(orderDto.getProduct().getCategoria().getId());
        categoria.setNome(orderDto.getProduct().getCategoria().getNome());

        TableEntity table = new TableEntity();
        table.setId(orderDto.getCommand().getTable().getId());
        table.setStatus(orderDto.getCommand().getTable().getStatus());
        table.setReferenciaMesa(orderDto.getCommand().getTable().getReferenciaMesa());

        commandEntity.setId(orderDto.getCommand().getId());
        commandEntity.setCliente_id(orderDto.getCommand().getCliente_id());
        commandEntity.setTable(table);

        ProductEntity product = new ProductEntity();
        product.setValor(orderDto.getProduct().getValor());
        product.setNomeDoPrato(orderDto.getProduct().getNomeDoPrato());
        product.setDescricao(orderDto.getProduct().getDescricao());
        product.setId(orderDto.getProduct().getId());
        product.setAtivo(orderDto.getProduct().isAtivo());
        product.setCategoria(categoria);

        requestEntity.setCommand(commandEntity);
        requestEntity.setStatus(orderDto.getStatus());
        requestEntity.setObservacao(orderDto.getObservacao());
        requestEntity.setTotal(orderDto.getTotal());
        requestEntity.setProduct(product);

       OrderEntity orderEntity =  orderService.save(requestEntity);


        //BeanUtils.copyProperties(orderDto, requestEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(orderEntity);
    }
    /*@PostMapping
    public ResponseEntity<?> insert(@RequestBody OrderEntity order){
        try {
            this.orderService.save(order);
            return ResponseEntity.ok().body("Sucesso.");
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }*/


    @GetMapping("/{id}")
    @ApiOperation(value="Retorna um pedido especifico")
    public ResponseEntity<Object> getOnerequest(@PathVariable(value = "id") int id) {
        Optional<OrderEntity> requestEntityOptional = orderService.findById(id);
        if (!requestEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("request not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(requestEntityOptional.get());
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value="deleta um pedido")
    public ResponseEntity<Object> deleterequest(@PathVariable(value = "id") int id) {
        Optional<OrderEntity> requestEntityOptional = orderService.findById(id);
        if (!requestEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("request not found.");
        }
        orderService.delete(requestEntityOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("request deleted sucessfully");
    }

    @PutMapping("/{id}")
    @ApiOperation(value="Atualizar pedido")
    public ResponseEntity<Object> updaterequest(@PathVariable(value = "id") int id,
                                              @RequestBody @Valid OrderDto orderDto) {
        Optional<OrderEntity> requestEntityOptional = orderService.findById(id);
        if (!requestEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("request not found.");
        }
        var requestEntity = new OrderEntity();
        BeanUtils.copyProperties(orderDto, requestEntity);
        requestEntity.setId(requestEntityOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(orderService.save(requestEntity));
    }


}
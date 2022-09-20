package com.project.uniamerica.descomplica.backend.order;


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
        BeanUtils.copyProperties(orderDto, requestEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(orderService.save(requestEntity));
    }



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
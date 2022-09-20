package com.project.uniamerica.descomplica.backend.product;


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
@RequestMapping("/products")
@Api(value = "API REST Products")
public class ProductResource {

    final ProductService productService;

    @Autowired
    public ProductResource(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping()
    @ApiOperation(value="Retorna uma lista de produtos")
    public ResponseEntity<List<ProductEntity>> getAllProduct() {
        return ResponseEntity.status(HttpStatus.OK).body(productService.findAll());
    }

    @PostMapping
    @ApiOperation(value="Cadastra produto")
    public ResponseEntity<Object> saveProduct(@RequestBody @Valid ProductDto productDto) {

        var productEntity = new ProductEntity();
        BeanUtils.copyProperties(productDto, productEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.save(productEntity));
    }



    @GetMapping("/{id}")
    @ApiOperation(value="Retorna um produto especifico")
    public ResponseEntity<Object> getOneproduct(@PathVariable(value = "id") int id) {
        Optional<ProductEntity> productEntityOptional = productService.findById(id);
        if (!productEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("product not found.");
        }

        return ResponseEntity.status(HttpStatus.OK).body(productEntityOptional.get());
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value="Deleta produto")
    public ResponseEntity<Object> deleteproduct(@PathVariable(value = "id") int id) {

        Optional<ProductEntity> productEntityOptional = productService.findById(id);
        if (!productEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("product not found.");
        }
        productService.delete(productEntityOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("product deleted sucessfully");
    }

    @PutMapping("/{id}")
    @ApiOperation(value="Atualiza produto")
    public ResponseEntity<Object> updateproduct(@PathVariable(value = "id") int id,

                                                @RequestBody @Valid ProductDto productDto) {
        Optional<ProductEntity> productEntityOptional = productService.findById(id);
        if (!productEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("product not found.");
        }
        var productEntity = new ProductEntity();
        BeanUtils.copyProperties(productDto, productEntity);
        productEntity.setId(productEntityOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(productService.save(productEntity));
    }
}


package com.project.uniamerica.descomplica.backend.productType;


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
@RequestMapping("/productTypes")
public class ProductTypeResource {

    final ProductTypeService productTypeService;

    @Autowired
    public ProductTypeResource(ProductTypeService productTypeService) {
        this.productTypeService = productTypeService;
    }

    @GetMapping()
    public ResponseEntity<List<ProductTypeEntity>> getAllProductType() {
        return ResponseEntity.status(HttpStatus.OK).body(productTypeService.findAll());
    }

    @PostMapping
    public ResponseEntity<Object> saveProductType(@RequestBody @Valid ProductTypeDto productTypeDto) {

        var productTypeEntity = new ProductTypeEntity();
        BeanUtils.copyProperties(productTypeDto, productTypeEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(productTypeService.save(productTypeEntity));
    }



    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneproductType(@PathVariable(value = "id") UUID id) {
        Optional<ProductTypeEntity> productTypeEntityOptional = productTypeService.findById(id);
        if (!productTypeEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("productType not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(productTypeEntityOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteproductType(@PathVariable(value = "id") UUID id) {
        Optional<ProductTypeEntity> productTypeEntityOptional = productTypeService.findById(id);
        if (!productTypeEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("productType not found.");
        }
        productTypeService.delete(productTypeEntityOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("productType deleted sucessfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateproductType(@PathVariable(value = "id") UUID id,
                                                @RequestBody @Valid ProductTypeDto productTypeDto) {
        Optional<ProductTypeEntity> productTypeEntityOptional = productTypeService.findById(id);
        if (!productTypeEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("productType not found.");
        }
        var productTypeEntity = new ProductTypeEntity();
        BeanUtils.copyProperties(productTypeDto, productTypeEntity);
        productTypeEntity.setId(productTypeEntityOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(productTypeService.save(productTypeEntity));
    }


}
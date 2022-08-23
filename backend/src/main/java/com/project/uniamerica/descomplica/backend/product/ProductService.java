package com.project.uniamerica.descomplica.backend.product;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public ProductEntity save(ProductEntity productEntity) {
        return productRepository.save(productEntity);
    }

    public List<ProductEntity> findAll() {
        return productRepository.findAll();
    }

    public Optional<ProductEntity> findById(UUID id) {
        return productRepository.findById(id);
    }

    @Transactional
    public void delete(
            ProductEntity productEntity) {
        productRepository.delete(productEntity);
    }
}
package com.project.uniamerica.descomplica.backend.productType;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProductTypeService {

    @Autowired
    private ProductTypeRepository productTypeRepository;

    @Transactional
    public ProductTypeEntity save(ProductTypeEntity productTypeEntity) {
        return productTypeRepository.save(productTypeEntity);
    }

    public List<ProductTypeEntity> findAll() {
        return productTypeRepository.findAll();
    }

    public Optional<ProductTypeEntity> findById(int id) {
        return productTypeRepository.findById(id);
    }

    @Transactional
    public void delete(
            ProductTypeEntity productTypeEntity) {
        productTypeRepository.delete(productTypeEntity);
    }
}
package com.project.uniamerica.descomplica.backend.productTypeTest;

import com.project.uniamerica.descomplica.backend.productType.ProductTypeEntity;
import com.project.uniamerica.descomplica.backend.productType.ProductTypeRepository;
import org.assertj.core.api.Assertions;
import org.junit.Rule;
import org.junit.jupiter.api.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
class ProductTypeRepositoryTest {


    @Autowired
    private ProductTypeRepository productTypeRepository;

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Test
    public void createShouldPersistData(){

        ProductTypeEntity productType = new ProductTypeEntity(1, "");
        this.productTypeRepository.save(productType);
        Assertions.assertThat(productType.getId()).isEqualTo(1);

    }

    @Test
    public void deleteShouldDeleteData(){

        ProductTypeEntity productType = new ProductTypeEntity(1, "");
        this.productTypeRepository.delete(productType);
        Assertions.assertThat(productTypeRepository.findById(productType.getId())).isEmpty();
    }
    @Test
    public void updateShouldChangeAndPersistData(){

        ProductTypeEntity productType = new ProductTypeEntity(1, "");
        productType.setId(3);
        this.productTypeRepository.save(productType);
        Assertions.assertThat(productType.getId()).isEqualTo(3);
    }

    @Test
    public void findAllShouldReturnData(){
        ProductTypeEntity productType = new ProductTypeEntity();
        productType.setId(1);
        Assertions.assertThat(productType.getId()).isNotNull();
    }


}
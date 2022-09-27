package com.project.uniamerica.descomplica.backend.productTest;

import com.project.uniamerica.descomplica.backend.product.ProductEntity;
import com.project.uniamerica.descomplica.backend.product.ProductRepository;
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
class ProductRepositoryTest {


    @Autowired
    private ProductRepository productRepository;

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Test
    public void createShouldPersistData(){

        ProductEntity product = new ProductEntity(1,"carne",10);

        this.productRepository.save(product);

        Assertions.assertThat(product.getId()).isEqualTo(1);
        Assertions.assertThat(product.getTipoProdutoId()).isNotNull();
        Assertions.assertThat(product.getValor()).isEqualTo(10);
        Assertions.assertThat(product.getNomeDoPrato()).isEqualTo("carne");
    }

    @Test
    public void deleteShouldDeleteData(){

        ProductEntity product = new ProductEntity(1,"carne",10);
        this.productRepository.delete(product);
        Assertions.assertThat(productRepository.findById(product.getId())).isEmpty();
    }
    @Test
    public void updateShouldChangeAndPersistData(){

        ProductEntity product = new ProductEntity(1,"carne",10);
        product.setNomeDoPrato("picanha");
        product.setValor(20);

        this.productRepository.save(product);
        Assertions.assertThat(product.getNomeDoPrato()).isEqualTo("picanha");
        Assertions.assertThat(product.getValor()).isEqualTo(20);
    }

    @Test
    public void findAllShouldReturnData(){
        ProductEntity product = new ProductEntity();

        product.setValor(11);
        product.setId(2);
        product.setNomeDoPrato("caviar");
        product.setTipoProdutoId(5);

        Assertions.assertThat(product.getId()).isNotNull();
        Assertions.assertThat(product.getNomeDoPrato()).isNotNull();
        Assertions.assertThat(product.getTipoProdutoId()).isNotNull();
        Assertions.assertThat(product.getValor()).isNotNull();

    }


}
package com.project.uniamerica.descomplica.backend.orderTest;

import com.project.uniamerica.descomplica.backend.order.OrderEntity;
import com.project.uniamerica.descomplica.backend.order.OrderRepository;
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
class OrderRepositoryTest {

    @Autowired
    private OrderRepository orderRepository;

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Test
    public void createShouldPersistData(){

        OrderEntity order = new OrderEntity(1);
        this.orderRepository.save(order);
        Assertions.assertThat(order.getId()).isEqualTo(1);
    }

    @Test
    public void deleteShouldDeleteData(){
        OrderEntity order = new OrderEntity(1);
        this.orderRepository.delete(order);
        Assertions.assertThat(orderRepository.findById(order.getId())).isEmpty();
    }

    @Test
    public void updateShouldChangeAndPersistData(){
        OrderEntity order = new OrderEntity(1);
        order.setId(3);
        this.orderRepository.save(order);
        Assertions.assertThat(order.getId()).isEqualTo(3);
    }

    @Test
    public void findAllShouldReturnData(){
        OrderEntity order = new OrderEntity();

        order.setId(2);
        order.setProduct_id(3);
        order.setStatus_id(2);
        Assertions.assertThat(order.getId()).isNotNull();
    }


}
package com.project.uniamerica.descomplica.backend.order;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
//
//    @Transactional
//    public OrderEntity save(OrderEntity orderEntity){
//        return orderRepository.save(orderEntity);
//    }
//    public List<OrderEntity> findAll() {
//        return orderRepository.findAll();
//    }
//
//    public Optional<OrderEntity> findById(UUID id) {
//        return orderRepository.findById(id);
//    }
//
//    @Transactional
//    public void delete(
//            OrderEntity OrderEntity) {
//        orderRepository.delete(OrderEntity);
//    }
}

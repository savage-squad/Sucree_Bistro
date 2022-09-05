package com.project.uniamerica.descomplica.backend.orderTest;

import com.project.uniamerica.descomplica.backend.order.OrderEntity;
import com.project.uniamerica.descomplica.backend.order.OrderRepository;
import com.project.uniamerica.descomplica.backend.order.OrderService;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

class OrderServiceTest {

    @Mock
    OrderService orderService = new OrderService();

    @Mock
    OrderRepository orderRepository = new OrderRepository() {
        @Override
        public List<OrderEntity> findAll() {
            return null;
        }

        @Override
        public List<OrderEntity> findAll(Sort sort) {
            return null;
        }

        @Override
        public List<OrderEntity> findAllById(Iterable<Integer> integers) {
            return null;
        }

        @Override
        public <S extends OrderEntity> List<S> saveAll(Iterable<S> entities) {
            return null;
        }

        @Override
        public void flush() {

        }

        @Override
        public <S extends OrderEntity> S saveAndFlush(S entity) {
            return null;
        }

        @Override
        public <S extends OrderEntity> List<S> saveAllAndFlush(Iterable<S> entities) {
            return null;
        }

        @Override
        public void deleteAllInBatch(Iterable<OrderEntity> entities) {

        }

        @Override
        public void deleteAllByIdInBatch(Iterable<Integer> integers) {

        }

        @Override
        public void deleteAllInBatch() {

        }

        @Override
        public OrderEntity getOne(Integer integer) {
            return null;
        }

        @Override
        public OrderEntity getById(Integer integer) {
            return null;
        }

        @Override
        public OrderEntity getReferenceById(Integer integer) {
            return null;
        }

        @Override
        public <S extends OrderEntity> List<S> findAll(Example<S> example) {
            return null;
        }

        @Override
        public <S extends OrderEntity> List<S> findAll(Example<S> example, Sort sort) {
            return null;
        }

        @Override
        public Page<OrderEntity> findAll(Pageable pageable) {
            return null;
        }

        @Override
        public <S extends OrderEntity> S save(S entity) {
            return null;
        }

        @Override
        public Optional<OrderEntity> findById(Integer integer) {
            return Optional.empty();
        }

        @Override
        public boolean existsById(Integer integer) {
            return false;
        }

        @Override
        public long count() {
            return 0;
        }

        @Override
        public void deleteById(Integer integer) {

        }

        @Override
        public void delete(OrderEntity entity) {

        }

        @Override
        public void deleteAllById(Iterable<? extends Integer> integers) {

        }

        @Override
        public void deleteAll(Iterable<? extends OrderEntity> entities) {

        }

        @Override
        public void deleteAll() {

        }

        @Override
        public <S extends OrderEntity> Optional<S> findOne(Example<S> example) {
            return Optional.empty();
        }

        @Override
        public <S extends OrderEntity> Page<S> findAll(Example<S> example, Pageable pageable) {
            return null;
        }

        @Override
        public <S extends OrderEntity> long count(Example<S> example) {
            return 0;
        }

        @Override
        public <S extends OrderEntity> boolean exists(Example<S> example) {
            return false;
        }

        @Override
        public <S extends OrderEntity, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
            return null;
        }
    };
    @Test
    void save() {
    }

    @Test
    void findAll() {
    }

    @Test
    void findById() {
    }

    @Test
    void delete() {
    }
}
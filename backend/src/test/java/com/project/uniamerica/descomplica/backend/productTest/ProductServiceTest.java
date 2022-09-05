package com.project.uniamerica.descomplica.backend.productTest;

import com.project.uniamerica.descomplica.backend.product.ProductEntity;
import com.project.uniamerica.descomplica.backend.product.ProductRepository;
import com.project.uniamerica.descomplica.backend.product.ProductService;
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

class ProductServiceTest {

    @Mock
    ProductService productService = new ProductService();

    @Mock
    ProductRepository productRepository = new ProductRepository() {
        @Override
        public List<ProductEntity> findAll() {
            return null;
        }

        @Override
        public List<ProductEntity> findAll(Sort sort) {
            return null;
        }

        @Override
        public List<ProductEntity> findAllById(Iterable<Integer> integers) {
            return null;
        }

        @Override
        public <S extends ProductEntity> List<S> saveAll(Iterable<S> entities) {
            return null;
        }

        @Override
        public void flush() {

        }

        @Override
        public <S extends ProductEntity> S saveAndFlush(S entity) {
            return null;
        }

        @Override
        public <S extends ProductEntity> List<S> saveAllAndFlush(Iterable<S> entities) {
            return null;
        }

        @Override
        public void deleteAllInBatch(Iterable<ProductEntity> entities) {

        }

        @Override
        public void deleteAllByIdInBatch(Iterable<Integer> integers) {

        }

        @Override
        public void deleteAllInBatch() {

        }

        @Override
        public ProductEntity getOne(Integer integer) {
            return null;
        }

        @Override
        public ProductEntity getById(Integer integer) {
            return null;
        }

        @Override
        public ProductEntity getReferenceById(Integer integer) {
            return null;
        }

        @Override
        public <S extends ProductEntity> List<S> findAll(Example<S> example) {
            return null;
        }

        @Override
        public <S extends ProductEntity> List<S> findAll(Example<S> example, Sort sort) {
            return null;
        }

        @Override
        public Page<ProductEntity> findAll(Pageable pageable) {
            return null;
        }

        @Override
        public <S extends ProductEntity> S save(S entity) {
            return null;
        }

        @Override
        public Optional<ProductEntity> findById(Integer integer) {
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
        public void delete(ProductEntity entity) {

        }

        @Override
        public void deleteAllById(Iterable<? extends Integer> integers) {

        }

        @Override
        public void deleteAll(Iterable<? extends ProductEntity> entities) {

        }

        @Override
        public void deleteAll() {

        }

        @Override
        public <S extends ProductEntity> Optional<S> findOne(Example<S> example) {
            return Optional.empty();
        }

        @Override
        public <S extends ProductEntity> Page<S> findAll(Example<S> example, Pageable pageable) {
            return null;
        }

        @Override
        public <S extends ProductEntity> long count(Example<S> example) {
            return 0;
        }

        @Override
        public <S extends ProductEntity> boolean exists(Example<S> example) {
            return false;
        }

        @Override
        public <S extends ProductEntity, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
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
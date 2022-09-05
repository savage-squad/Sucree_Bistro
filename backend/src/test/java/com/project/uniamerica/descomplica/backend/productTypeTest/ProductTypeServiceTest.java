package com.project.uniamerica.descomplica.backend.productTypeTest;

import com.project.uniamerica.descomplica.backend.productType.ProductTypeEntity;
import com.project.uniamerica.descomplica.backend.productType.ProductTypeRepository;
import com.project.uniamerica.descomplica.backend.productType.ProductTypeService;
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

class ProductTypeServiceTest {

    @Mock
    ProductTypeService productTypeService = new ProductTypeService();

    @Mock
    ProductTypeRepository productTypeRepository = new ProductTypeRepository() {
        @Override
        public List<ProductTypeEntity> findAll() {
            return null;
        }

        @Override
        public List<ProductTypeEntity> findAll(Sort sort) {
            return null;
        }

        @Override
        public List<ProductTypeEntity> findAllById(Iterable<Integer> integers) {
            return null;
        }

        @Override
        public <S extends ProductTypeEntity> List<S> saveAll(Iterable<S> entities) {
            return null;
        }

        @Override
        public void flush() {

        }

        @Override
        public <S extends ProductTypeEntity> S saveAndFlush(S entity) {
            return null;
        }

        @Override
        public <S extends ProductTypeEntity> List<S> saveAllAndFlush(Iterable<S> entities) {
            return null;
        }

        @Override
        public void deleteAllInBatch(Iterable<ProductTypeEntity> entities) {

        }

        @Override
        public void deleteAllByIdInBatch(Iterable<Integer> integers) {

        }

        @Override
        public void deleteAllInBatch() {

        }

        @Override
        public ProductTypeEntity getOne(Integer integer) {
            return null;
        }

        @Override
        public ProductTypeEntity getById(Integer integer) {
            return null;
        }

        @Override
        public ProductTypeEntity getReferenceById(Integer integer) {
            return null;
        }

        @Override
        public <S extends ProductTypeEntity> List<S> findAll(Example<S> example) {
            return null;
        }

        @Override
        public <S extends ProductTypeEntity> List<S> findAll(Example<S> example, Sort sort) {
            return null;
        }

        @Override
        public Page<ProductTypeEntity> findAll(Pageable pageable) {
            return null;
        }

        @Override
        public <S extends ProductTypeEntity> S save(S entity) {
            return null;
        }

        @Override
        public Optional<ProductTypeEntity> findById(Integer integer) {
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
        public void delete(ProductTypeEntity entity) {

        }

        @Override
        public void deleteAllById(Iterable<? extends Integer> integers) {

        }

        @Override
        public void deleteAll(Iterable<? extends ProductTypeEntity> entities) {

        }

        @Override
        public void deleteAll() {

        }

        @Override
        public <S extends ProductTypeEntity> Optional<S> findOne(Example<S> example) {
            return Optional.empty();
        }

        @Override
        public <S extends ProductTypeEntity> Page<S> findAll(Example<S> example, Pageable pageable) {
            return null;
        }

        @Override
        public <S extends ProductTypeEntity> long count(Example<S> example) {
            return 0;
        }

        @Override
        public <S extends ProductTypeEntity> boolean exists(Example<S> example) {
            return false;
        }

        @Override
        public <S extends ProductTypeEntity, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
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
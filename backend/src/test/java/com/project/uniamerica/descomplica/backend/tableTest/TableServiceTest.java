package com.project.uniamerica.descomplica.backend.tableTest;

import com.project.uniamerica.descomplica.backend.table.TableEntity;
import com.project.uniamerica.descomplica.backend.table.TableRepository;
import com.project.uniamerica.descomplica.backend.table.TableService;
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

class TableServiceTest {

    @Mock
    TableService tableService = new TableService();

    @Mock
    TableRepository tableRepository = new TableRepository() {
        @Override
        public List<TableEntity> findAll() {
            return null;
        }

        @Override
        public List<TableEntity> findAll(Sort sort) {
            return null;
        }

        @Override
        public List<TableEntity> findAllById(Iterable<Integer> integers) {
            return null;
        }

        @Override
        public <S extends TableEntity> List<S> saveAll(Iterable<S> entities) {
            return null;
        }

        @Override
        public void flush() {

        }

        @Override
        public <S extends TableEntity> S saveAndFlush(S entity) {
            return null;
        }

        @Override
        public <S extends TableEntity> List<S> saveAllAndFlush(Iterable<S> entities) {
            return null;
        }

        @Override
        public void deleteAllInBatch(Iterable<TableEntity> entities) {

        }

        @Override
        public void deleteAllByIdInBatch(Iterable<Integer> integers) {

        }

        @Override
        public void deleteAllInBatch() {

        }

        @Override
        public TableEntity getOne(Integer integer) {
            return null;
        }

        @Override
        public TableEntity getById(Integer integer) {
            return null;
        }

        @Override
        public TableEntity getReferenceById(Integer integer) {
            return null;
        }

        @Override
        public <S extends TableEntity> List<S> findAll(Example<S> example) {
            return null;
        }

        @Override
        public <S extends TableEntity> List<S> findAll(Example<S> example, Sort sort) {
            return null;
        }

        @Override
        public Page<TableEntity> findAll(Pageable pageable) {
            return null;
        }

        @Override
        public <S extends TableEntity> S save(S entity) {
            return null;
        }

        @Override
        public Optional<TableEntity> findById(Integer integer) {
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
        public void delete(TableEntity entity) {

        }

        @Override
        public void deleteAllById(Iterable<? extends Integer> integers) {

        }

        @Override
        public void deleteAll(Iterable<? extends TableEntity> entities) {

        }

        @Override
        public void deleteAll() {

        }

        @Override
        public <S extends TableEntity> Optional<S> findOne(Example<S> example) {
            return Optional.empty();
        }

        @Override
        public <S extends TableEntity> Page<S> findAll(Example<S> example, Pageable pageable) {
            return null;
        }

        @Override
        public <S extends TableEntity> long count(Example<S> example) {
            return 0;
        }

        @Override
        public <S extends TableEntity> boolean exists(Example<S> example) {
            return false;
        }

        @Override
        public <S extends TableEntity, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
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
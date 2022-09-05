package com.project.uniamerica.descomplica.backend.commandTest;

import com.project.uniamerica.descomplica.backend.command.CommandEntity;
import com.project.uniamerica.descomplica.backend.command.CommandRepository;
import com.project.uniamerica.descomplica.backend.command.CommandService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

class CommandServiceTest {

    @Autowired
    CommandEntity command = new CommandEntity(1,"jorge");
    @Mock
    CommandService commandService = new CommandService();

    @Mock
    CommandRepository commandRepository = new CommandRepository() {
        @Override
        public List<CommandEntity> findAll() {
            return null;
        }

        @Override
        public List<CommandEntity> findAll(Sort sort) {
            return null;
        }

        @Override
        public List<CommandEntity> findAllById(Iterable<Integer> integers) {
            return null;
        }

        @Override
        public <S extends CommandEntity> List<S> saveAll(Iterable<S> entities) {
            return null;
        }

        @Override
        public void flush() {

        }

        @Override
        public <S extends CommandEntity> S saveAndFlush(S entity) {
            return null;
        }

        @Override
        public <S extends CommandEntity> List<S> saveAllAndFlush(Iterable<S> entities) {
            return null;
        }

        @Override
        public void deleteAllInBatch(Iterable<CommandEntity> entities) {

        }

        @Override
        public void deleteAllByIdInBatch(Iterable<Integer> integers) {

        }

        @Override
        public void deleteAllInBatch() {

        }

        @Override
        public CommandEntity getOne(Integer integer) {
            return null;
        }

        @Override
        public CommandEntity getById(Integer integer) {
            return null;
        }

        @Override
        public CommandEntity getReferenceById(Integer integer) {
            return null;
        }

        @Override
        public <S extends CommandEntity> List<S> findAll(Example<S> example) {
            return null;
        }

        @Override
        public <S extends CommandEntity> List<S> findAll(Example<S> example, Sort sort) {
            return null;
        }

        @Override
        public Page<CommandEntity> findAll(Pageable pageable) {
            return null;
        }

        @Override
        public <S extends CommandEntity> S save(S entity) {
            return null;
        }

        @Override
        public Optional<CommandEntity> findById(Integer integer) {
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
        public void delete(CommandEntity entity) {

        }

        @Override
        public void deleteAllById(Iterable<? extends Integer> integers) {

        }

        @Override
        public void deleteAll(Iterable<? extends CommandEntity> entities) {

        }

        @Override
        public void deleteAll() {

        }

        @Override
        public <S extends CommandEntity> Optional<S> findOne(Example<S> example) {
            return Optional.empty();
        }

        @Override
        public <S extends CommandEntity> Page<S> findAll(Example<S> example, Pageable pageable) {
            return null;
        }

        @Override
        public <S extends CommandEntity> long count(Example<S> example) {
            return 0;
        }

        @Override
        public <S extends CommandEntity> boolean exists(Example<S> example) {
            return false;
        }

        @Override
        public <S extends CommandEntity, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
            return null;
        }
    };
    @Test
    void save() {

        commandService.save(command);
        Assertions.assertThat(command.getId()).isEqualTo(1);
    }

    @Test
    void findAll() {
        CommandEntity command = new CommandEntity();

        command.setNome("Willson");
        command.setId(2);
        command.setCliente_id(2);
        command.setMesa_id(4);
        command.setTipoComanda_id(1);
        command.setPedidos_id(4);

        Assertions.assertThat(command.getId()).isNotNull();
        Assertions.assertThat(command.getCliente_id()).isNotNull();
        Assertions.assertThat(command.getMesa_id()).isNotNull();
        Assertions.assertThat(command.getPedidos_id()).isNotNull();
        Assertions.assertThat(command.getTipoComanda_id()).isNotNull();
        Assertions.assertThat(command.getNome()).isNotNull();

    }

    @Test
    void findById() {
        commandService.findById(command.getId());
        Assertions.assertThat(command.getId()).isEqualTo(1);
    }

    @Test
    void delete() {
        commandService.delete(command);
        Assertions.assertThat(commandRepository.findById(command.getId())).isEmpty();
    }
}
package com.project.uniamerica.descomplica.backend.commandTest;

import com.project.uniamerica.descomplica.backend.command.CommandEntity;
import com.project.uniamerica.descomplica.backend.command.CommandRepository;
import org.assertj.core.api.Assertions;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CommandRepositoryTest {

    @Autowired
    private CommandRepository commandRepository;

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Test
    public void createShouldPersistData(){

        CommandEntity command = new CommandEntity(2,"Jorge");

        this.commandRepository.save(command);

        Assertions.assertThat(command.getId()).isEqualTo(2);
        Assertions.assertThat(command.getCliente_id()).isNotNull();
        Assertions.assertThat(command.getMesa_id()).isNotNull();
        Assertions.assertThat(command.getPedidos_id()).isNotNull();
        Assertions.assertThat(command.getTipoComanda_id()).isNotNull();
        Assertions.assertThat(command.getNome()).isEqualTo("Jorge");
    }

    @Test
    public void deleteShouldDeleteData(){

        CommandEntity command = new CommandEntity(2,"Jorge");
        this.commandRepository.delete(command);
        Assertions.assertThat(commandRepository.findById(command.getId())).isEmpty();
    }
    @Test
    public void updateShouldChangeAndPersistData(){

        CommandEntity command = new CommandEntity(2,"Jorge");
        command.setNome("Willson");
        this.commandRepository.save(command);
        Assertions.assertThat(command.getNome()).isEqualTo("Willson");
    }

    @Test
    public void findAllShouldReturnData(){
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
}
package com.project.uniamerica.descomplica.backend.commandTypeTest;

import com.project.uniamerica.descomplica.backend.commandType.CommandTypeEntity;
import com.project.uniamerica.descomplica.backend.commandType.CommandTypeRepository;
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
class CommandTypeRepositoryTest {

    @Autowired
    private CommandTypeRepository commandTypeRepository;

    @Rule
    public
    ExpectedException thrown = ExpectedException.none();

    @Test
    public void createShouldPersistData(){

        CommandTypeEntity commandType = new CommandTypeEntity(1, "");
        this.commandTypeRepository.save(commandType);
        Assertions.assertThat(commandType.getId()).isEqualTo(1);

    }

    @Test
    public void deleteShouldDeleteData(){
        CommandTypeEntity commandType = new CommandTypeEntity(1, "");
        this.commandTypeRepository.delete(commandType);
        Assertions.assertThat(commandTypeRepository.findById(commandType.getId())).isEmpty();
    }


    @Test
    public void findAllShouldReturnData(){
        CommandTypeEntity commandType = new CommandTypeEntity();

        commandType.setId(2);

        Assertions.assertThat(commandType.getId()).isNotNull();
    }





}
package com.project.uniamerica.descomplica.backend.tableTest;

import com.project.uniamerica.descomplica.backend.table.TableEntity;
import com.project.uniamerica.descomplica.backend.table.TableRepository;
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
class TableRepositoryTest {


    @Autowired
    private TableRepository tableRepository;

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Test
    public void createShouldPersistData(){

        TableEntity table = new TableEntity(1,"A");
        this.tableRepository.save(table);
        Assertions.assertThat(table.getId()).isEqualTo(1);
        Assertions.assertThat(table.getMesacol()).isEqualTo("A");
    }

    @Test
    public void deleteShouldDeleteData(){

        TableEntity table = new TableEntity(1,"A");
        this.tableRepository.delete(table);
        Assertions.assertThat(tableRepository.findById(table.getId())).isEmpty();
    }
    @Test
    public void updateShouldChangeAndPersistData(){

        TableEntity table = new TableEntity(1,"A");
        table.setMesacol("B");
        this.tableRepository.save(table);
    Assertions.assertThat(table.getMesacol()).isEqualTo("B");
    }

    @Test
    public void findAllShouldReturnData(){
        TableEntity table = new TableEntity();

        table.setId(1);
        table.setMesacol("A");

        Assertions.assertThat(table.getId()).isNotNull();
        Assertions.assertThat(table.getMesacol()).isNotNull();

    }


}
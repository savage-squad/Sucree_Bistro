package com.project.uniamerica.descomplica.backend.table;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TableService {

    @Autowired
    private TableRepository tableRepository;

    @Transactional
    public TableEntity save(TableEntity tableEntity) {
        return tableRepository.save(tableEntity);
    }

    public List<TableEntity> findAll() {
        return tableRepository.findAll();
    }

    public Optional<TableEntity> findById(UUID id) {
        return tableRepository.findById(id);
    }

    @Transactional
    public void delete(
            TableEntity tableEntity) {
        tableRepository.delete(tableEntity);
    }
}
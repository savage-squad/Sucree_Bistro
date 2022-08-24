package com.project.uniamerica.descomplica.backend.commandType;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CommandTypeService {

    @Autowired
    private CommandTypeRepository commandTypeRepository;

    @Transactional
    public CommandTypeEntity save(CommandTypeEntity commandTypeEntity) {
        return commandTypeRepository.save(commandTypeEntity);
    }

    public List<CommandTypeEntity> findAll() {
        return commandTypeRepository.findAll();
    }

    public Optional<CommandTypeEntity> findById(UUID id) {
        return commandTypeRepository.findById(id);
    }

    @Transactional
    public void delete(
            CommandTypeEntity commandTypeEntity) {
        commandTypeRepository.delete(commandTypeEntity);
    }
}
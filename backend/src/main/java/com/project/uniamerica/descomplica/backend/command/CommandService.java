package com.project.uniamerica.descomplica.backend.command;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class CommandService {

    @Autowired
    private CommandRepository commandRepository;

    @Transactional
    public CommandEntity save(CommandEntity commandEntity) {
        return commandRepository.save(commandEntity);
    }

    public List<CommandEntity> findAll() {
        return commandRepository.findAll();
    }

    public Optional<CommandEntity> findById(int id) {
        return commandRepository.findById(id);
    }

    @Transactional
    public void delete(
            CommandEntity commandEntity) {
        commandRepository.delete(commandEntity);
    }
}
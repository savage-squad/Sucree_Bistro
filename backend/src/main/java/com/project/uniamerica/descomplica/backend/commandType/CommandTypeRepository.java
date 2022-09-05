package com.project.uniamerica.descomplica.backend.commandType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommandTypeRepository extends JpaRepository<CommandTypeEntity, Integer> {

}

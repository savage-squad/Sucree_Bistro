package com.project.uniamerica.descomplica.backend.command;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommandRepository extends JpaRepository<CommandEntity, Integer> {
}

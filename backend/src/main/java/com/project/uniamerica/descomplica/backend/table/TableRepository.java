package com.project.uniamerica.descomplica.backend.table;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TableRepository extends JpaRepository<TableEntity, UUID> {

}



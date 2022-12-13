package com.project.uniamerica.descomplica.backend.address.repositories;

import com.project.uniamerica.descomplica.backend.address.entity.StateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StateRepository extends JpaRepository<StateEntity, Long> {
}
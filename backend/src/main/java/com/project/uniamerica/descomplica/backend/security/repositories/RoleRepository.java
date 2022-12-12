package com.project.uniamerica.descomplica.backend.security.repositories;


import java.util.Optional;

import com.project.uniamerica.descomplica.backend.security.model.ERole;
import com.project.uniamerica.descomplica.backend.security.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
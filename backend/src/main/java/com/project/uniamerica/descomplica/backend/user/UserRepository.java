package com.project.uniamerica.descomplica.backend.user;

import com.project.uniamerica.descomplica.backend.auth.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

}

package com.project.uniamerica.descomplica.backend.client;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Repository
public interface ClientRepository extends JpaRepository<ClientEntity, Long> {
    //padronizacao que o jpa utliza e implementa
   Optional<ClientEntity> findClientByCpf(String cpf);


   @Query(value = "SELECT * FROM Task WHERE cpf = ?1", nativeQuery = true)
   List<ClientEntity> findName(String cpf);

}
package com.project.uniamerica.descomplica.backend.address;

import com.project.uniamerica.descomplica.backend.client.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<AddressEntity, Long> {
    List<AddressEntity> findAllByClient(ClientEntity client);

}
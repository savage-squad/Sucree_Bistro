package com.project.uniamerica.descomplica.backend.address.repositories;

import com.project.uniamerica.descomplica.backend.address.entity.CityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<CityEntity, Long> {
//    List<CityEntity> findAllByState_Id(Integer id);
//    List<CityEntity> findAllByCity_Uf(String uf);
}
package com.project.uniamerica.descomplica.backend.seeder.seeds;

import com.project.uniamerica.descomplica.backend.security.model.ERole;
import com.project.uniamerica.descomplica.backend.security.model.Role;
import com.project.uniamerica.descomplica.backend.security.repositories.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class RoleSeeder {

    private final RoleRepository roleRepository;

    public void execute(){
        loadRoles();
    }

    private void loadRoles(){
       var roleSize =  roleRepository.count();
       if (roleSize == 0l){
           Role roleAdmin = new Role();
           roleAdmin.setName(ERole.ROLE_ADMIN);

           Role roleUser = new Role();
           roleUser.setName(ERole.ROLE_USER);
           roleRepository.saveAll(List.of(roleAdmin, roleUser));
       }
    }
}

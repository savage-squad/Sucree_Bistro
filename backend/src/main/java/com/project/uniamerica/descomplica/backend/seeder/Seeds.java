package com.project.uniamerica.descomplica.backend.seeder;

import com.project.uniamerica.descomplica.backend.seeder.seeds.RoleSeeder;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.ContextStartedEvent;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
@Profile({"test"})
public class Seeds implements CommandLineRunner{

    private final RoleSeeder roleSeeder;

    @Override
    public void run(String... args) throws Exception {
        roleSeeder.execute();
    }
}

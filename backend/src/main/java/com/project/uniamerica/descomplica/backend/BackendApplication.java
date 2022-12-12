package com.project.uniamerica.descomplica.backend;

import com.project.uniamerica.descomplica.backend.seeder.seeds.RoleSeeder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import javax.annotation.PostConstruct;


@EnableWebMvc
@SpringBootApplication
@EnableSwagger2
public class BackendApplication {

    @Autowired
    private RoleSeeder roleSeeder;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

}

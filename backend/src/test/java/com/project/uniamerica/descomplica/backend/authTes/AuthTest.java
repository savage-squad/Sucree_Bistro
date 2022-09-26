package com.project.uniamerica.descomplica.backend.authTes;

import com.github.javafaker.Faker;
import com.project.uniamerica.descomplica.backend.auth.Role;
import com.project.uniamerica.descomplica.backend.auth.UserEntity;
import com.project.uniamerica.descomplica.backend.auth.UserImplementService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.util.Locale;
import java.util.Random;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class AuthTest {
    @Autowired
    private UserImplementService userImplementService;
    private final Faker faker = new Faker(new Locale("pt-br"));

    @Test
    void store() {
        UserEntity user = new UserEntity();
        int role = new Random().nextInt(Role.values().length);

        user.setEmail(faker.internet().emailAddress());
        user.setPassword(faker.random().hex());
        user.setRole(Role.values()[role]);
        UserEntity resultdb = userImplementService.insert(user);
        Assertions.assertEquals(user, resultdb);
    }
}

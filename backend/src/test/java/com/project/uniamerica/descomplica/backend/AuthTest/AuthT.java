package com.project.uniamerica.descomplica.backend.AuthTest;

import com.github.javafaker.Faker;
import com.project.uniamerica.descomplica.backend.auth.Role;
import com.project.uniamerica.descomplica.backend.auth.UserEntity;
import com.project.uniamerica.descomplica.backend.auth.UserImplementService;


import org.junit.jupiter.api.Assertions;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;

import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.Random;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class AuthT {
    @Autowired
    private UserImplementService userImplementService;
    private final Faker faker = new Faker(new Locale("pt-br"));

    {/*
    @Test
    void index() {
        List<UserEntity> before = userImplementService.index().getBody();

        UserEntity userEntity = new UserEntity();

        userEntity.setEmail(faker.internet().emailAddress());
        userEntity.setPassword(faker.random().hex());

        userImplementService.insert(userEntity);

        ResponseEntity<List<UserEntity>> after = userImplementService.index();
        Assertions.assertEquals(after.getClass(), before.size() + 1);

    }*/}

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
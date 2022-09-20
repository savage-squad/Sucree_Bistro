//package com.project.uniamerica.descomplica.backend.Integracao;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.project.uniamerica.descomplica.backend.auth.Role;
//import com.project.uniamerica.descomplica.backend.auth.UserEntity;
//import com.project.uniamerica.descomplica.backend.auth.UserResource;
//import org.hamcrest.Matchers;
//import org.junit.Before;
//import org.junit.jupiter.api.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.test.web.server.LocalServerPort;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MockMvcBuilder;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import java.util.regex.Matcher;
//
//import static com.project.uniamerica.descomplica.backend.auth.Role.RECEPTIONIST;
//
//
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//@AutoConfigureTestDatabase
//public class UserIntegrationTest{
//
//    private MockMvc mockMvc;
//
//    @Autowired
//    private UserResource userResource;
//
//    @Before
//    public void setup() {
//        this.mockMvc = MockMvcBuilders.standaloneSetup(userResource).build();
//    }
//
//    @Test
//    public void createUserInDatabse_ReturnStatusCodeOk() throws Exception {
//        UserEntity userEntity = new UserEntity();
//        userEntity.setEmail("liomanjate@gmail.com");
//        userEntity.setPassword("1234");
//        userEntity.setRole(RECEPTIONIST);
//        ObjectMapper mapper = new ObjectMapper();
//
//        String json = mapper.writeValueAsString(userEntity);
//
//        this.mockMvc.perform(MockMvcRequestBuilders.post("/api/auth")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(json))
//                .andExpect(MockMvcResultMatchers.status().isCreated())
//                .andExpect(MockMvcResultMatchers.handler()
//                        .toString("location", Matchers.containsString("https://localhost:8080/api/auth")));
//    }
//    @Test
//    public void createUserInCorrects_ReturnStatusCode400() throws Exception {
//        UserEntity userEntity = new UserEntity();
//        userEntity.setEmail("liomanjate@gmail.com");
//        userEntity.setPassword("1234");
//        userEntity.setRole(RECEPTIONIST);
//        ObjectMapper mapper = new ObjectMapper();
//
//        String json = mapper.writeValueAsString(userEntity);
//
//        this.mockMvc.perform(MockMvcRequestBuilders.post("/api/auth")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(""))
//                .andExpect(MockMvcResultMatchers.status().isBadRequest());
//    }
//
//
//}

package com.project.uniamerica.descomplica.backend.commandTypeTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.uniamerica.descomplica.backend.commandType.CommandTypeEntity;
import com.project.uniamerica.descomplica.backend.commandType.CommandTypeResource;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = CommandTypeServiceTest.class)
public class CommandTypeServiceTest {

    private MockMvc mockMvc;

    @Mock
    CommandTypeResource commandTypeResource;

    @Before
    public void setUp(){
        this.mockMvc = MockMvcBuilders.standaloneSetup(commandTypeResource).build();
    }

    @Test
    public void criarcommandType() throws Exception {
        CommandTypeEntity commandTypeEntity = new CommandTypeEntity(1);
        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writeValueAsString(commandTypeEntity);

        this.mockMvc.perform(MockMvcRequestBuilders.post("/commandTypes")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json)
            )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.header()
                        .string("location", Matchers.containsString("http://localhost/commadTypes")));

    }
}
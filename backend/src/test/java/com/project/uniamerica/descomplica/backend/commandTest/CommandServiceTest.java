package com.project.uniamerica.descomplica.backend.commandTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.uniamerica.descomplica.backend.command.CommandEntity;
import com.project.uniamerica.descomplica.backend.command.CommandResource;
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
@SpringBootTest(classes = CommandServiceTest.class)
public class CommandServiceTest {

    private MockMvc mockMvc;

    @Mock
    CommandResource commandResource;

    @Before
    public void setUp(){
        this.mockMvc = MockMvcBuilders.standaloneSetup(commandResource).build();
    }

    @Test
    public void criarcommand() throws Exception {
        CommandEntity commandEntity = new CommandEntity(1,"unica");
        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writeValueAsString(commandEntity);

        this.mockMvc.perform(MockMvcRequestBuilders.post("/commands")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json)
                )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.header()
                        .string("location", Matchers.containsString("http://localhost/commands")));

    }
}
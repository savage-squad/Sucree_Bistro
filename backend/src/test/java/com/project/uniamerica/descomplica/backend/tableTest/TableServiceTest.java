package com.project.uniamerica.descomplica.backend.tableTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.uniamerica.descomplica.backend.table.TableEntity;
import com.project.uniamerica.descomplica.backend.table.TableResource;
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
@SpringBootTest(classes = TableServiceTest.class)
public class TableServiceTest {

    private MockMvc mockMvc;

    @Mock
    TableResource tableResource;

    @Before
    public void setUp(){
        this.mockMvc = MockMvcBuilders.standaloneSetup(tableResource).build();
    }

    @Test
    public void criartable() throws Exception {
        TableEntity tableEntity = new TableEntity(1,"duo");
        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writeValueAsString(tableEntity);

        this.mockMvc.perform(MockMvcRequestBuilders.post("/tables")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json)
                )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.header()
                        .string("location", Matchers.containsString("http://localhost/tables")));

    }
}
package com.project.uniamerica.descomplica.backend.orderTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.uniamerica.descomplica.backend.order.OrderEntity;
import com.project.uniamerica.descomplica.backend.order.OrderResource;
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
@SpringBootTest(classes = OrderServiceTest.class)
class OrderServiceTest {

    private MockMvc mockMvc;

    @Mock
    OrderResource orderResource;

    @Before
    public void setUp(){
        this.mockMvc = MockMvcBuilders.standaloneSetup(orderResource).build();
    }

    @Test
    public void criarorder() throws Exception {
        OrderEntity orderEntity = new OrderEntity(1);
        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writeValueAsString(orderEntity);

        this.mockMvc.perform(MockMvcRequestBuilders.post("/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json)
                )
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.header()
                        .string("location", Matchers.containsString("http://localhost/orders")));

    }
}
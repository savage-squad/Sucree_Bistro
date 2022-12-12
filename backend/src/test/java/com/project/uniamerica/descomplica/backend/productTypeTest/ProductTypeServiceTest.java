package com.project.uniamerica.descomplica.backend.productTypeTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.uniamerica.descomplica.backend.productType.ProductTypeEntity;
import com.project.uniamerica.descomplica.backend.productType.ProductTypeResource;
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
@SpringBootTest(classes = ProductTypeServiceTest.class)
public class ProductTypeServiceTest {

    private MockMvc mockMvc;

    @Mock
    ProductTypeResource productTypeResource;

    @Before
    public void setUp(){
        this.mockMvc = MockMvcBuilders.standaloneSetup(productTypeResource).build();
    }

    @Test
    public void criarproductType() throws Exception {
        ProductTypeEntity productTypeEntity = new ProductTypeEntity(1);
        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writeValueAsString(productTypeEntity);

        this.mockMvc.perform(MockMvcRequestBuilders.post("/productTypes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json)
                )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.header()
                        .string("location", Matchers.containsString("http://localhost/productTypes")));

    }
}
package com.project.uniamerica.descomplica.backend.productTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.uniamerica.descomplica.backend.product.ProductEntity;
import com.project.uniamerica.descomplica.backend.product.ProductResource;
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
@SpringBootTest(classes = ProductServiceTest.class)
class ProductServiceTest {

    private MockMvc mockMvc;

    @Mock
    ProductResource productResource;

    @Before
    public void setUp(){
        this.mockMvc = MockMvcBuilders.standaloneSetup(productResource).build();
    }

    @Test
    public void criarproduct() throws Exception {
        ProductEntity productEntity = new ProductEntity(1,"caviar",99);

        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writeValueAsString(productEntity);

        this.mockMvc.perform(MockMvcRequestBuilders.post("/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json)
                )
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.header()
                        .string("location", Matchers.containsString("http://localhost/products")));

    }
}
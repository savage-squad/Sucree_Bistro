package com.project.uniamerica.descomplica.backend.product;

import com.project.uniamerica.descomplica.backend.productType.ProductTypeDto;
import lombok.Data;
@Data
public class ProductDto {
    private int id;
    private String nomeDoPrato;
    private String descricao;
    private float valor;
    private boolean ativo;
    private ProductTypeDto categoria;
}

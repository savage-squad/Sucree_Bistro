package com.project.uniamerica.descomplica.backend.product;

import lombok.Data;
@Data
public class ProductDto {
    private int id;
    private String nomeDoPrato;
    private String descricao;
    private float valor;
    private int tipoProdutoId;
}

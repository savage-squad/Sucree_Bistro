package com.project.uniamerica.descomplica.backend.product;

public class ProductResource {


    final ProductService productService;

    @Autowired
    public ProductResource(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping()
    public ResponseEntity<List<ProductEntity>> getAllProduct() {
        return ResponseEntity.status(HttpStatus.OK).body(productService.findAll());
    }

    @PostMapping
    public ResponseEntity<Object> saveProduct(@RequestBody @Valid ProductDto productDto) {

        var productEntity = new ProductEntity();
        BeanUtils.copyProperties(productDto, productEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.save(productEntity));
    }



    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneproduct(@PathVariable(value = "id") UUID id) {
        Optional<ProductEntity> productEntityOptional = productService.findById(id);
          if (!productEntityOptional.isPresent()) {
              return ResponseEntity.status(HttpStatus.NOT_FOUND).body("product not found.");
          }
        return ResponseEntity.status(HttpStatus.OK).body(productEntityOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteproduct(@PathVariable(value = "id") UUID id) {
        Optional<ProductEntity> productEntityOptional = productService.findById(id);
        if (!productEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("product not found.");
        }
        productService.delete(productEntityOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("product deleted sucessfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateproduct(@PathVariable(value = "id") UUID id,
                                                @RequestBody @Valid ProductDto productDto) {
        Optional<ProductEntity> productEntityOptional = productService.findById(id);
        if (!productEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("product not found.");
        }
        var productEntity = new ProductEntity();
        BeanUtils.copyProperties(productDto, productEntity);
        productEntity.setId(productEntityOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(productService.save(productEntity));
    }


}

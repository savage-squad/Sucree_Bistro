package com.project.uniamerica.descomplica.backend.auth;

import com.project.uniamerica.descomplica.backend.exception.ObjectNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UserResource {

    @Autowired
    private UserImplementService service;

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable(value="id") Long id) {

        ModelMapper modelMapper = new ModelMapper();
        UserEntity userEntity = service.findById(id);

        if(userEntity == null) {
            throw new ObjectNotFoundException("Object "+UserEntity.class.getName()+" not found! id "+id);
        }

        UserDto userDto = modelMapper.map(userEntity,UserDto.class);
        return ResponseEntity.ok().body(userDto);
    }
    @PostMapping()
    public ResponseEntity<Void> insert(@RequestBody UserDto dto){

        ModelMapper modelMapper = new ModelMapper();
        UserEntity obj = modelMapper.map(dto,UserEntity.class);

        obj = this.service.insert(obj);
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(obj.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@RequestBody UserDto dto, @PathVariable(value="id") Long id){
        ModelMapper modelMapper = new ModelMapper();
        UserEntity obj = modelMapper.map(dto,UserEntity.class);
        obj.setId(id);
        obj = this.service.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable(value="id") Long id) {
        service.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }


}

package com.project.uniamerica.descomplica.backend.auth;

import com.project.uniamerica.descomplica.backend.exception.ObjectNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

}
